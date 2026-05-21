import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { categoriesData } from '../data/categories';

const CategoryCard = ({ title, description, delay, sectionInView, image, slug }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (sectionInView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay, sectionInView]);

  const handleClick = () => {
    if (slug === 'coffee-tea') {
      navigate('/coffee-tea');
    } else if (slug === 'spices-and-sauces') {
      navigate('/spices');
    } else {
      navigate(`/products/${slug}`);
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background gradient accent */}
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-teal-200 to-teal-400 rounded-full opacity-20"></div>
      
      {/* Content container */}
      <div className="relative p-6 flex flex-col items-center justify-center w-full">
        {/* Product image with reflection effect */}
        <div className="w-32 h-32 mb-5 relative">
          <div className="w-32 h-32 mb-5 relative rounded-full overflow-hidden shadow-md">
            <img 
              src={image}
              alt={title} 
              className="w-full h-full object-cover transform transition-all duration-300 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-gray-800/10 to-transparent"></div>
          </div>
        </div>
        
        {/* Small decorative element */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-teal-600 rounded-full"></div>
        
        {/* Title with animated underline on hover */}
        <h3 className="text-xl font-bold tracking-wider mb-3 group relative text-center">
          {title}
          <span className="block h-0.5 w-0 group-hover:w-full bg-teal-500 transition-all duration-300 mt-1 mx-auto"></span>
        </h3>
        
        {/* Description */}
        <p className="text-center text-sm text-gray-600 leading-relaxed max-w-xs h-16 overflow-hidden">
          {description}
        </p>
        
        {/* Subtle "learn more" indicator */}
        <div className="mt-4 text-teal-600 text-xs font-medium flex items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <span>Explore products</span>
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};


const ProductCategoryGrid = () => {
  const [sectionInView, setSectionInView] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSectionInView(true);
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-teal-50/30 transition-opacity duration-1000 ${sectionInView ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Complete Product Range</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our extensive catalog of high-quality products sourced and exported globally.</p>
        <div className="w-24 h-1 bg-teal-500 mx-auto mt-6"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {categoriesData.map((category, index) => (
          <CategoryCard 
            key={category.id}
            title={category.title}
            description={category.description}
            delay={50 * (index % 4)} // Stagger based on column position
            sectionInView={sectionInView}
            image={category.image}
            slug={category.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryGrid;
