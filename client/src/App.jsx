import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';

import Home from './components/Home';
import Spices from './components/Spices';
import AboutUs from './components/AboutUs';
import ContactUs from './components/Contact';
import TeaAndCoffee from './components/TeaAndCoffee';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/spices' element={<Spices />} />
        <Route path='/coffee-tea' element={<TeaAndCoffee />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contactUs' element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
