import React, { useState, useEffect, useRef } from 'react';
import LeafAnimation from './LeafAnimation';

const SpiceCard = ({ title, description, delay, sectionInView ,image}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Only start the animation timer after the section is in view
    if (sectionInView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [delay, sectionInView]);

  return (
    <div 
      className={`relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background gradient accent */}
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full opacity-20"></div>
      
      {/* Content container */}
      <div className="relative p-6 flex flex-col items-center justify-center w-full">
        {/* Spice image with reflection effect */}
        <div className="w-28 h-28 mb-5 relative">
<div className="w-28 h-28 mb-5 relative rounded-full overflow-hidden">
  <img 
    src={image}
    alt="Bowl of cloves spice" 
    className="w-full h-full object-cover transform transition-all duration-300 hover:scale-105"
    style={{ filter: 'contrast(1.05) saturate(1.1)' }}
  />
  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-gray-800/10 to-transparent"></div>
</div>
        </div>
        
        {/* Small decorative spice element */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-amber-600 rounded-full"></div>
        
        {/* Title with animated underline on hover */}
        <h3 className="text-xl font-bold tracking-wider mb-3 group relative">
          {title}
          <span className="block h-0.5 w-0 group-hover:w-full bg-amber-500 transition-all duration-300 mt-1"></span>
        </h3>
        
        {/* Description with slightly improved typography */}
        <p className="text-center text-sm text-gray-700 leading-relaxed max-w-xs">
          {description}
        </p>
        
        {/* Subtle "learn more" indicator */}
        <div className="mt-4 text-amber-600 text-xs font-medium flex items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <span>Learn more</span>
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

const SpiceCardGrid = () => {
  const [sectionInView, setSectionInView] = useState(false);
  const sectionRef = useRef(null);
  
  // Set up the Intersection Observer to detect when section comes into view
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1 // 10% of the section needs to be visible
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSectionInView(true);
          // Once the section is in view, we can disconnect the observer
          // as we only need to trigger the animation once
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const spiceData = [
    {
      id: 1,
      title: "Cardamom",
      description: "At SpiceCraft, we blend tradition with innovation, using advanced purification",
      image: '/images/product1.jpg'
    },
    {
      id: 2,
      title: "Cinnamon",
      description: "At SpiceCraft, we blend tradition with innovation, using advanced purification",
      image: '/images/product2.jpg'
    },
    {
      id: 3,
      title: "Clove",
      description: "At SpiceCraft, we blend tradition with innovation, using advanced purification",
      image: '/images/product4.jpg'
    },
    {
      id: 4,
      title: "Bay leaf",
      description: "At SpiceCraft, we blend tradition with innovation, using advanced purification",
      image: '/images/bayleaf.jpg'
    },
    {
      id: 5,
      title: "Black Pepper",
      description: "At SpiceCraft, we blend tradition with innovation, using advanced purification",
      image: '/images/product5.jpg'
    },
    {
      id: 6,
      title: "Star anise",
      description: "At SpiceCraft, we blend tradition with innovation, using advanced purification",
      image: '/images/staranise.webp'
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className={`w-full p-8 bg-gradient-to-br from-gray-50 to-amber-50 transition-opacity duration-1000 ${sectionInView ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Title section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Premium Spices</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      </div>
      {/* Cards grid with staggered animation */}
      <LeafAnimation/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {spiceData.map((spice, index) => (
          <SpiceCard 
            key={spice.id}
            title={spice.title}
            description={spice.description}
            delay={150 * index}
            sectionInView={sectionInView}
            image={spice.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SpiceCardGrid;