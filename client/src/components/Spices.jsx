

import { useState } from 'react';
import ThankYouFooter from './Footer';
import Navbar from './Navbar'
import Products from './Products';
import SpiceCardGrid from './SpiceCard';
import TypographyShowcase from './TypographyShowcase';
import ProducstListingModal from "./ProducstListingModal";

const Spices = () => {
  const [logoHide, setLogoHide] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const handleLogoToggle = () => {
    console.log('handleLogoToggle is working')
    setLogoHide(!logoHide);
  }
  const onChangeIsProductsDropdownOpen = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

      const spicesProducts = [
      {
        id: 1,
        name: "CLOVES",
        description: "Premium quality cloves with rich aroma and flavor, carefully selected and purified using advanced methods Fresh green cardamom pods with intense fragrance, perfect for both sweet and savory dishes.",
        image: "/images/CARDAMOM.png",
        scatteredImage: "/images/cloves-scattered.png",
        position: "left"
      },
      {
        id: 2,
        name: "CARDAMOM",
        description: "Fresh green cardamom pods with intense fragrance, perfect for both sweet and savory dishes.",
        image: "/images/cloves.png",
        position: "top"
      },
      {
        id: 3, 
        name: "CINNAMON",
        description: "Pure Ceylon cinnamon sticks with sweet woody flavor and health benefits.",
        image: "/images/CINNAMONs.avif",
        position: "center"
      },
      {
        id: 4,
        name: "BLACK PEPPER",
        description: "Premium quality cloves with rich aroma and flavor, carefully selected and purified using advanced methods Fresh green cardamom pods with intense fragrance, perfect for both sweet and savory dishes.",
        image: "/images/blackpepper.webp",
        scatteredImage: "/images/pepper-scattered.png",
        position: "right"
      }
    ];
  

  return (
    <div className='bg-white min-h-screen relative overflow-x-hidden '>
      {/* Navbar with high z-index to stay on top */}
      <div className="relative mt-11">
        {/* <Navbar handleClick/>
                                                                                                                                                            */}
        <Navbar
          isProductsDropdownOpen={isProductsDropdownOpen}
          onChangeIsProductsDropdownOpen={onChangeIsProductsDropdownOpen}
          onToggleLogo={handleLogoToggle}
        />
      </div>

      {/* Hero Section */}
      <div className="relative mt-32">
        {/* Mobile View */}
        <div className="md:hidden relative h-[80vh]">
          {/* Main red-blasting image */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[120%] max-w-[400px] z-0">
            <img
              src="/images/red-blasting.png"
              alt="Main spice"
              className="w-full h-auto rounded-lg"
            />
          </div>

         

          {/* Text content */}
          <div className="absolute left-52 top-[32%] transform -translate-x-1/2 w-[80%] max-w-[350px]  p-4 rounded-lg z-10">
            <h1 className="text-2xl font-bold text-gray-200 mb-2">Spices</h1>
            <h2 className="text-lg text-amber-300 mb-3">Your trusted source for authentic flavors</h2>
            <p className="text-sm text-gray-100">
              At SpiceCraft, we blend tradition with innovation, using
              advanced purification methods.
            </p>
          </div>

          {/* Center images */}
          <div className="absolute left-[25%] top-[18%] w-24 z-10">
            <img
              src="/images/center image.png"
              alt="Spice 1"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="absolute left-[52%] top-[25%] w-24 z-10">
            <img
              src="/images/center image.png"
              alt="Spice 2"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block relative h-[90vh]">
          {/* Main red-blasting image */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[-240px] w-[900px] z-0">
            <img
              src="/images/red-blasting.png"
              alt="Main spice"
              className="w-full h-auto rounded-lg hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Peanuts image - top right */}
          <div className="absolute right-0 top-[-110px] w-64 z-10">
            <img
              src="/images/penuts.png"
              alt="Scattered Spices"
              className="w-full h-auto rounded-lg hover:scale-105 rotate-180 transition-all duration-300"
            />
          </div>

       
          {/* Text content */}
          <div className="absolute left-[33%] top-[45%] transform translate-x-8 max-w-md bg-opacity-80 p-6 rounded-lg z-10">
            <h1 className="text-4xl font-bold text-gray-200 mb-3">Spices</h1>
            <h2 className="text-2xl text-amber-300 mb-4">Your trusted source for authentic flavors</h2>
            <p className="text-gray-100 text-md">
              At SpiceCraft, we blend tradition with innovation, using
              advanced purification methods to guarantee 100% natural,
              pathogen-free spices.
            </p>
          </div>

          {/* Center images */}
          <div className="absolute left-1/3 top-16 w-56 z-10">
            <img
              src="/images/center image.png"
              alt="Spice 1"
              className="w-full h-auto rounded-lg hover:scale-105 transition-all duration-300"
            />
          </div>

          <div className="absolute left-1/2 top-32 w-56 z-10">
            <img
              src="/images/center image.png"
              alt="Spice 2"
              className="w-full h-auto rounded-lg hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Leaves */}
          <div className="absolute left-36 top-32 w-24 z-10">
            <img
              src="/images/leaf.png"
              alt="Leaf"
              className="w-full h-auto rounded-lg hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="absolute left-36 top-[450px] w-24 z-10">
            <img
              src="/images/leaf2.png"
              alt="Leaf"
              className="w-full h-auto rounded-lg hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="absolute right-28 top-96 w-24 z-10">
            <img
              src="/images/leaf2.png"
              alt="Leaf"
              className="w-full h-auto rounded-lg hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="absolute right-36 top-10 w-24 z-10">
            <img
              src="/images/leaf.png"
              alt="Leaf"
              className="w-full h-auto rounded-lg hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      <div className="relative z-20 -mt-24 md:mt-60">
        <Products products={spicesProducts}/>
      </div>

      <div className="relative z-20 mt-10">
        <TypographyShowcase />
      </div>
      <div className="relative z-20 mt-10">
        <SpiceCardGrid />
      </div>
      {/* <div className="relative z-20 mt-10">
                                                                                                                                                            <PortivaHeader />
                                                                                                                                                          </div> */}
      <div className="relative z-20 mt-10">
        <ThankYouFooter />
      </div>
    </div>
  )
}

export default Spices;