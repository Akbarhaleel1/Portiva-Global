import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

import Home from './components/Home';
import Spices from './components/Spices';
import AboutUs from './components/AboutUs';
import ContactUs from './components/Contact';
import TeaAndCoffee from './components/TeaAndCoffee';
import ProductCategoryPage from './components/ProductCategoryPage';

// Scroll to top helper component on route change or hash routing
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let checkInterval;
    let attempts = 0;

    const handleScroll = () => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Get absolute position from top of page
          const offsetTop = element.getBoundingClientRect().top + window.scrollY;
          // Check if document height is greater than window height (meaning it is scrollable)
          const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
          
          // Wait for page to be scrollable and element to be pushed to its layout offset
          if ((isScrollable && offsetTop > 100) || attempts > 15) {
            if (window.lenis) {
              window.lenis.stop();
              // Scroll using Lenis
              window.lenis.scrollTo(element, { immediate: true });
              // Also sync browser window scroll immediately
              window.scrollTo(0, offsetTop);
              
              requestAnimationFrame(() => {
                if (window.lenis) window.lenis.start();
              });
            } else {
              element.scrollIntoView();
            }
            clearInterval(checkInterval);
          }
        }
      } else {
        if (window.lenis) {
          // Stop any active inertia/scroll animations
          window.lenis.stop();
          window.lenis.scrollTo(0, { immediate: true });
          window.scrollTo(0, 0);
          // Resume scroll on next frame
          requestAnimationFrame(() => {
            if (window.lenis) window.lenis.start();
          });
        } else {
          window.scrollTo(0, 0);
        }
        
        // Stop polling after 10 attempts (500ms) to allow user interaction
        if (attempts > 10) {
          clearInterval(checkInterval);
        }
      }
      attempts++;
    };

    // Poll for both hash routes and standard route changes to ensure page stays at top during layout/images loading
    checkInterval = setInterval(handleScroll, 50);
    handleScroll();

    return () => {
      if (checkInterval) clearInterval(checkInterval);
    };
  }, [pathname, hash]);

  return null;
};

const App = () => {
  useEffect(() => {
    // Disable default browser scroll restoration so page transitions don't start scrolled down
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
    });
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/spices' element={<Spices />} />
        <Route path='/coffee-tea' element={<TeaAndCoffee />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/products/:slug' element={<ProductCategoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
