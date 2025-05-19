import { useEffect, useRef, forwardRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const ExportingProducts = forwardRef((props, ref) => {
  const flightRef = useRef(null);
  const textRef = useRef(null);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const flight = flightRef.current;
    const container = ref?.current;
    const text = textRef.current;

    if (!flight || !container || !text) return;

    // Initial setup
    gsap.set(flight, { 
      y: 200,
      x: "-50%",
      rotation: 0,
      scale: 1
    });
    
    // Split text for animation
    const splitHeading = new SplitText(text.querySelector('h2'), { type: "chars" });
    const splitParagraph = new SplitText(text.querySelector('p'), { type: "chars" });
    
    gsap.set([...splitHeading.chars, ...splitParagraph.chars], {
      opacity: 0,
      y: 20
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=800",
        scrub: true,
        markers: false,
        onLeave: () => {
          setIsFixed(false);
          gsap.set(flight, {
            y: -100,
            rotation: 90,
            scale: 2
          });
          gsap.set(text, {
            x: "20%",
            position: 'relative',
            right: 'auto',
            top: 'auto',
            transform: 'none'
          });
        },
        onEnterBack: () => {
          setIsFixed(true);
          // Reset text to fixed positioning when scrolling back up
          gsap.set(text, {
            position: 'fixed',
            right: '12rem',
            top: '50%',
            transform: 'translateY(-50%)'
          });
        }
      }
    });

    // Text animation sequence
    tl.to(text, {
      x: "20%",
      ease: "power1.out"
    }, -0.3)
    
    // Animate heading characters
    tl.to(splitHeading.chars, {
      opacity: 1,
      y: 0,
      stagger: 0.03,
      ease: "power2.out"
    }, 0)
    
    // Animate paragraph characters (starts after heading)
    tl.to(splitParagraph.chars, {
      opacity: 1,
      y: 0,
      stagger: 0.01,
      ease: "power2.out"
    }, 0.5)

    // Flight animation
    tl.to(flight, {
      y: -100,
      rotation: 90,
      scale: 2,
      ease: "power1.out"
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      splitHeading.revert();
      splitParagraph.revert();
    };
  }, [ref]);

  return (
    <div ref={ref} className="h-[100vh] bg-blue-50 relative overflow-hidden">
      {/* Flight image */}
      <img
        ref={flightRef}
        src="/images/flight2-removebg-preview.png"
        alt="flight"
        className={`w-64 h-auto left-1/2 bottom-20 top-64 transform -translate-x-1/2 origin-center ${
          isFixed ? 'fixed' : 'relative'
        }`}
      />
      
      {/* Text content */}
      <div 
        ref={textRef}
        className={`${isFixed ? 'fixed right-44 top-1/2 transform -translate-y-1/2' : 'relative mx-auto mr-40 mt-[-200px] right-24'} w-1/3 pr-8`}
      >
        <h2 className="text-3xl font-bold mb-4">Our Export Products</h2>
        <p className="text-lg">
          We deliver high-quality products worldwide with fast and reliable shipping.
          Our network ensures your goods arrive safely and on time.
        </p>
      </div>
    </div>
  );
});

ExportingProducts.displayName = 'ExportingProducts';
export default ExportingProducts;