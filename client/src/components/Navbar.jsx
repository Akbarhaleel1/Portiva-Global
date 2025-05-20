import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ isProductsDropdownOpen, onChangeIsProductsDropdownOpen, onToggleLogo }) {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverItem, setHoverItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  
  const productCategories = [
    { name: 'Spices', subcategories: [] },
    { name: 'Coffee & Tea', subcategories: [] },
  ];

  // Update active item based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/') setActiveItem('Home');
    else if (currentPath === '/aboutUs') setActiveItem('About Us');
    else if (currentPath === '/contactUs') setActiveItem('Contact Us');
    else setActiveItem('Products');
  }, [location]);

  const handleMenuItemClick = (item) => {
    if (item === 'Products') {
      onChangeIsProductsDropdownOpen();
      if (isProductsDropdownOpen) {
        setActiveCategory(null);
      }
    } else {
      setActiveItem(item);
      setActiveCategory(null);
      setIsMenuOpen(false);
    }
  };

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onToggleLogo();
  };

  return (
    <nav className="fixed w-full mt-[-45px] bg-white/90 backdrop-blur-md shadow-lg z-50 px-4 md:px-8 xl:px-16 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-gray-900 font-bold text-xl tracking-tight">
              <img src="/images/first_logo-removebg-preview.png" alt="logo" className='w-20 rounded-full'/>
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink 
              to="/" 
              active={activeItem === 'Home'} 
              onClick={() => handleMenuItemClick('Home')}
              onMouseEnter={() => setHoverItem('Home')}
              onMouseLeave={() => setHoverItem(null)}
              isHovered={hoverItem === 'Home'}
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/aboutUs" 
              active={activeItem === 'About Us'} 
              onClick={() => handleMenuItemClick('About Us')}
              onMouseEnter={() => setHoverItem('About Us')}
              onMouseLeave={() => setHoverItem(null)}
              isHovered={hoverItem === 'About Us'}
            >
              About Us
            </NavLink>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button 
                onClick={() => handleMenuItemClick('Products')}
                onMouseEnter={() => setHoverItem('Products')}
                onMouseLeave={() => setHoverItem(null)}
                className={`group flex items-center px-2 py-1 text-sm font-medium rounded-md transition-all duration-300 ${
                  activeItem === 'Products' 
                    ? 'text-white bg-blue-500' 
                    : 'text-gray-700 hover:text-blue-500'
                }`}
              >
                <span>Products</span>
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    isProductsDropdownOpen ? 'rotate-180' : ''
                  } ${
                    activeItem === 'Products' ? 'text-white' : 'text-blue-400 group-hover:text-blue-500'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Products Dropdown Menu */}
              {isProductsDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden z-50 origin-top-right transition-all duration-200">
                  <div className="py-1 divide-y divide-gray-100">
                    {productCategories.map((category) => (
                      <div 
                        key={category.name} 
                        className="relative"
                        onMouseEnter={() => handleCategoryHover(category.name)}
                        onMouseLeave={() => setActiveCategory(null)}
                      >
                        <Link
                          to={`/${category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                          className="flex justify-between items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                          onClick={() => {
                            onChangeIsProductsDropdownOpen();
                            setIsMenuOpen(false);
                          }}
                        >
                          <span className="font-medium">{category.name}</span>
                          <svg 
                            className="w-4 h-4 text-gray-400" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        
                        {/* Subcategories Flyout */}
                        {activeCategory === category.name && (
                          <div className="absolute left-full top-0 w-64 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden">
                            <div className="py-1">
                              {category.subcategories.map((subcategory) => (
                                <Link
                                  key={subcategory} 
                                  to={`/${category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}/${subcategory.toLowerCase().replace(/ /g, '-')}`}
                                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                                  onClick={() => {
                                    onChangeIsProductsDropdownOpen();
                                    setIsMenuOpen(false);
                                  }}
                                >
                                  {subcategory}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <NavLink 
              to="/contactUs" 
              active={activeItem === 'Contact Us'} 
              onClick={() => handleMenuItemClick('Contact Us')}
              onMouseEnter={() => setHoverItem('Contact Us')}
              onMouseLeave={() => setHoverItem(null)}
              isHovered={hoverItem === 'Contact Us'}
            >
              Contact Us
            </NavLink>
            
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleOpenMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none transition duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-5">
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2.5' : 'top-0'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current top-2 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2.5' : 'top-4'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
          <MobileNavLink 
            to="/" 
            active={activeItem === 'Home'} 
            onClick={() => handleMenuItemClick('Home')}
          >
            Home
          </MobileNavLink>
          
          <MobileNavLink 
            to="/aboutUs" 
            active={activeItem === 'About Us'}
            onClick={() => handleMenuItemClick('About Us')}
          >
            About Us
          </MobileNavLink>
          
          <div>
            <button
              onClick={() => handleMenuItemClick('Products')}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium ${
                activeItem === 'Products' 
                  ? 'text-white bg-blue-500' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-500'
              } transition-colors duration-200`}
            >
              <span>Products</span>
              <svg 
                className={`ml-1 w-5 h-5 transform transition-transform duration-200 ${
                  isProductsDropdownOpen ? 'rotate-180' : ''
                } ${
                  activeItem === 'Products' ? 'text-white' : 'text-gray-400'
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mobile Products Dropdown */}
            {isProductsDropdownOpen && (
              <div className="mt-2 pl-3 border-l-2 border-gray-100">
                {productCategories.map((category) => (
                  <div key={category.name} className="py-1">
                    <Link
                      to={`/${category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-500 rounded-md"
                      onClick={() => {
                        onChangeIsProductsDropdownOpen();
                        setIsMenuOpen(false);
                      }}
                    >
                      {category.name}
                    </Link>
                    
                    <div className="pl-3 border-l border-gray-100 mt-1 space-y-1">
                      {category.subcategories.map((subcategory) => (
                        <Link
                          key={subcategory}
                          to={`/${category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}/${subcategory.toLowerCase().replace(/ /g, '-')}`}
                          className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-500"
                          onClick={() => {
                            onChangeIsProductsDropdownOpen();
                            setIsMenuOpen(false);
                          }}
                        >
                          {subcategory}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <MobileNavLink 
            to="/contactUs" 
            active={activeItem === 'Contact Us'}
            onClick={() => handleMenuItemClick('Contact Us')}
          >
            Contact Us
          </MobileNavLink>
          
          {/* Mobile Sign In */}
          <div className="pt-2">
            <a
              href="#"
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Desktop Navigation Link Component
function NavLink({ children, to, active, onClick, onMouseEnter, onMouseLeave, isHovered }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative group px-2 py-1 text-sm font-medium rounded-md transition-all duration-300 ${
        active 
          ? 'text-white bg-blue-500' 
          : 'text-gray-700 hover:text-blue-500'
      }`}
    >
      {children}
      {!active && (
        <span 
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left transition-transform duration-300 ${
            isHovered ? 'scale-x-100' : 'scale-x-0'
          }`}
        />
      )}
    </Link>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ children, to, active, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        active 
          ? 'text-white bg-blue-500' 
          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-500'
      } transition-colors duration-200`}
    >
      {children}
    </Link>
  );
}