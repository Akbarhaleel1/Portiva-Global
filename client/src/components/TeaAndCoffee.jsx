// import { useState } from 'react';
// import ThankYouFooter from './Footer';
// import Navbar from './Navbar';
// import Products from './Products';
// import CoffeeProducts from './CoffeProducts';
// import Tea from './Tea';

// const TeaAndCoffee = () => {
//   const [logoHide, setLogoHide] = useState(false);
//   const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

// const coffeeProducts = [
//   {
//     id: 'arabica-plantation',
//     name: "Arabica Plantation",
//     description: "Premium Arabica beans grown in plantation conditions",
//     grades: [
//       "Arabica Plantation AAA",
//       "Arabica Plantation AA",
//       "Arabica Plantation A",
//       "Arabica Plantation PB",
//       "Arabica Plantation B",
//       "Arabica Plantation C",
//       "Arabica Plantation BBB"
//     ],
//     image: "src/assets/images/Arabica.jpg"
//   },
//   {
//     id: 'arabica-cherry',
//     name: "Arabica Cherry",
//     description: "Naturally processed Arabica coffee cherries",
//     grades: [
//       "Arabica Cherry AAA",
//       "Arabica Cherry AA",
//       "Arabica Cherry A",
//       "Arabica Cherry PB",
//       "Arabica Cherry AB",
//       "Arabica Cherry C",
//       "Arabica Cherry BBB"
//     ],
//     image: "src/assets/images/Arabica plantation.jpg"
//   },
//   {
//     id: 'robusta-plantation',
//     name: "Robusta Plantation",
//     description: "High-quality Robusta beans from plantations",
//     grades: [
//       "Robusta Plantation AA",
//       "Robusta Plantation A",
//       "Robusta Plantation AB",
//       "Robusta Plantation PB",
//       "Robusta Plantation C",
//       "Robusta Plantation BBB"
//     ],
//     image: "src/assets/images/robust plantaion.jpg"
//   },
//   {
//     id: 'robusta-cherry',
//     name: "Robusta Cherry",
//     description: "Naturally processed Robusta coffee cherries",
//     grades: [
//       "Robusta Cherry AAA",
//       "Robusta Cherry AA",
//       "Robusta Cherry A",
//       "Robusta Cherry PB",
//       "Robusta Cherry AB",
//       "Robusta Cherry C",
//       "Robusta Cherry BBB"
//     ],
//     image: "src/assets/images/Robusta 2.jpg"
//   },
//   {
//     id: 'specialty',
//     name: "Specialty Coffee Beans",
//     description: "Unique and rare coffee varieties",
//     grades: [
//       "Monsoon Malabar",
//       "Robusta kapi royal (RKR)",
//       "Mysore nuggets"
//     ],
//     image: "src/assets/images/green coffe beans.jpg"
//   }
//   ];

//   console.log('first')
  
  
//   const handleLogoToggle = () => {
//     console.log('handleLogoToggle is working')
//     setLogoHide(!logoHide);
//   }

//   const onChangeIsProductsDropdownOpen = () => {
//     setIsProductsDropdownOpen(!isProductsDropdownOpen);
//   };

//   return (
//     <div className='bg-white min-h-screen relative overflow-x-hidden'>
//       {/* Navbar with high z-index to stay on top */}
//       <div className="relative z-50">
//         <Navbar
//           isProductsDropdownOpen={isProductsDropdownOpen}
//           onChangeIsProductsDropdownOpen={onChangeIsProductsDropdownOpen}
//           onToggleLogo={handleLogoToggle}
//         />
//       </div>

//       {/* Hero Section */}
//       <div className="relative">
//         {/* Mobile View */}
//         <div className="md:hidden relative h-[80vh] w-full">
//           {/* Background overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b from-amber-900 to-amber-950 opacity-90 z-0"></div>
          
//           {/* Main hero image */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-full max-w-[400px] z-0">
//             <img
//               src="src/assets/images/Coffee_Beans_2-removebg-preview.png"
//               alt="Coffee and Tea"
//               className="w-full h-auto object-contain max-h-[60vh] mx-auto"
//             />
//           </div>

//           {!logoHide && (
//             <div className="absolute left-4 top-4 z-50">
//               <img
//                 src="src/assets/images/Coffee_Beans_2-removebg-preview.png"
//                 alt="Logo"
//                 className="w-12 h-12 rounded-full object-cover border-2 border-amber-300"
//               />
//             </div>
//           )}

//           {/* Text content */}
//           <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[350px] p-4 rounded-lg z-10 text-center">
//             <h1 className="text-3xl font-bold text-amber-100 mb-2">Coffee</h1>
//             <h2 className="text-xl text-amber-300 mb-4">Premium brews for every moment</h2>
//             <p className="text-sm text-amber-100">
//               Discover our selection of expertly sourced teas and
//               freshly roasted coffees from around the world.
//             </p>
//           </div>

//           {/* Feature products */}
//           <div className="absolute left-[10%] top-[20%] w-20 z-10">
//             <img
//               src="src/assets/images/coffee-beans.png"
//               alt="Coffee Beans"
//               className="w-full h-auto object-contain"
//             />
//           </div>

//           <div className="absolute right-[10%] top-[25%] w-20 z-10">
//             <img
//               src="src/assets/images/tea-leaves.png"
//               alt="Tea Leaves"
//               className="w-full h-auto object-contain"
//             />
//           </div>
//         </div>

//         {/* Desktop View (unchanged) */}
//         <div className="hidden md:block relative h-[90vh]">
//           {/* Main hero image */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 top-[-240px] w-[900px] z-0">
//             <img
//               src="src/assets/images/coffee-tea-hero.png"
//               alt="Coffee and Tea"
//               className="w-full h-auto rounded-lg hover:scale-105 transition-all duration-300"
//             />
//           </div>

//           {/* Logo - top left */}
//           <div className="absolute left-10 top-[-65px] z-10 w-16">
//             <img
//               src="src/assets/images/second logo.jpg"
//               alt="Logo"
//               className="w-32 h-auto rounded-lg hover:scale-105 hover:rotate-180 transition-all duration-300"
//             />
//           </div>

//           {/* Text content */}
//           <div className="absolute left-[12%] top-[25%] transform translate-x-8 max-w-md bg-opacity-80 p-6 rounded-lg z-10 ">
//             <h1 className="text-4xl font-bold text-amber-900 mb-3">Coffee</h1>
//             <h2 className="text-2xl text-yellow-900 mb-4">Premium brews for every moment</h2>
//             <p className="text-yellow-900 text-md">
//               Discover our selection of expertly sourced teas and freshly roasted
//               coffees from around the world. Each product is carefully selected
//               for exceptional quality and flavor.
//             </p>
//           </div>

//           {/* Feature products */}
//           <div className="absolute left-1/3 top-2 w-56 z-10">
//             <img
//               src="src/assets/images/Coffee_Beans-removebg-preview.png"
//               alt="Coffee Beans"
//               className="w-full h-auto rounded-lg  transition-all duration-300"
//             />
//           </div>

//           <div className="absolute left-1/2 top-32 w-56 z-10">
//             <img
//               src="src/assets/images/Coffee_Beans_2-removebg-preview.png"
//               alt="Tea Leaves"
//               className="w-full h-auto rounded-lg transition-all duration-300"
//             />
//           </div>

//           {/* Decorative elements */}
//           <div className="absolute right-28 top-96 w-24 z-10"></div>
//           <div className="absolute right-0 -top-[120px] w-[400px] z-10">
//             <div className="relative w-full">
//               <img
//                 src="src/assets/images/Coffee_Beans_7-removebg-preview.png"
//                 alt="Tea Leaf"
//                 className="w-full h-auto rounded-lg transition-all duration-300"
//               />
//               <div className="absolute bottom-[-50px] left-0 w-full h-44 bg-white blur-xl rounded-b-lg" />
//             </div>
//           </div>
//         </div>
        
//         {/* Decorative element for both mobile and desktop */}
//         <div className="absolute left-0 md:left-10 top-[80vh] md:top-96 w-full md:w-96 z-5">
//           <img
//             src="src/assets/images/penuts12.png"
//             alt="Tea Leaves"
//             className="w-full h-auto max-w-[400px] md:max-w-none rounded-lg transition-all duration-300"
//           />
//         </div>
//       </div>
//       <div className="relative z-20 -mt-24 md:mt-60">
//         <CoffeeProducts products={coffeeProducts}/>
//       </div>
//       <Tea/>

//       <div className="relative z-20 mt-10">
//         <ThankYouFooter />
//       </div>
//     </div>
//   )
// }

// export default TeaAndCoffee;

import { useState } from 'react';
import ThankYouFooter from './Footer';
import Navbar from './Navbar';
import Products from './Products';
import CoffeeProducts from './CoffeProducts';
import Tea from './Tea';
import ProducstListingModal from "./ProducstListingModal";


const TeaAndCoffee = () => {
  const [logoHide, setLogoHide] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const coffeeProducts = [
    {
      id: 'arabica-plantation',
      name: "Arabica Plantation",
      description: "Premium Arabica beans grown in plantation conditions",
      grades: [
        "Arabica Plantation AAA",
        "Arabica Plantation AA",
        "Arabica Plantation A",
        "Arabica Plantation PB",
        "Arabica Plantation B",
        "Arabica Plantation C",
        "Arabica Plantation BBB"
      ],
      image: "src/assets/images/Arabica.jpg"
    },
    {
      id: 'arabica-cherry',
      name: "Arabica Cherry",
      description: "Naturally processed Arabica coffee cherries",
      grades: [
        "Arabica Cherry AAA",
        "Arabica Cherry AA",
        "Arabica Cherry A",
        "Arabica Cherry PB",
        "Arabica Cherry AB",
        "Arabica Cherry C",
        "Arabica Cherry BBB"
      ],
      image: "src/assets/images/Arabica plantation.jpg"
    },
    {
      id: 'robusta-plantation',
      name: "Robusta Plantation",
      description: "High-quality Robusta beans from plantations",
      grades: [
        "Robusta Plantation AA",
        "Robusta Plantation A",
        "Robusta Plantation AB",
        "Robusta Plantation PB",
        "Robusta Plantation C",
        "Robusta Plantation BBB"
      ],
      image: "src/assets/images/robust plantaion.jpg"
    },
    {
      id: 'robusta-cherry',
      name: "Robusta Cherry",
      description: "Naturally processed Robusta coffee cherries",
      grades: [
        "Robusta Cherry AAA",
        "Robusta Cherry AA",
        "Robusta Cherry A",
        "Robusta Cherry PB",
        "Robusta Cherry AB",
        "Robusta Cherry C",
        "Robusta Cherry BBB"
      ],
      image: "src/assets/images/Robusta 2.jpg"
    },
    {
      id: 'specialty',
      name: "Specialty Coffee Beans",
      description: "Unique and rare coffee varieties",
      grades: [
        "Monsoon Malabar",
        "Robusta kapi royal (RKR)",
        "Mysore nuggets"
      ],
      image: "src/assets/images/green coffe beans.jpg"
    }
  ];
  
  const handleLogoToggle = () => {
    console.log('handleLogoToggle is working');
    setLogoHide(!logoHide);
  }

  const onChangeIsProductsDropdownOpen = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  

  return (
    <div className='bg-amber-950 min-h-screen relative overflow-x-hidden'>
      {/* Navbar with high z-index to stay on top */}
      <div className="relative z-50 mt-11">
        <Navbar
          isProductsDropdownOpen={isProductsDropdownOpen}
          onChangeIsProductsDropdownOpen={onChangeIsProductsDropdownOpen}
          onToggleLogo={handleLogoToggle}
        />
      </div>
        {/* {isProductsDropdownOpen && (<ProducstListingModal />)} */}

      {/* Hero Section */}
      <div className="relative">
        {/* Mobile View */}
        <div className="md:hidden relative h-[80vh] w-full">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-800 to-amber-950 opacity-90 z-0"></div>
          
          {/* Main hero image */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-full max-w-[400px] z-0">
            <img
              src="src/assets/images/Coffee_Beans_2-removebg-preview.png"
              alt="Coffee and Tea"
              className="w-full h-auto object-contain max-h-[60vh] mx-auto"
            />
          </div>

     

          {/* Text content */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[350px] p-6 rounded-lg z-10 text-center bg-amber-900 bg-opacity-70 shadow-xl">
            <h1 className="text-3xl font-bold text-amber-50 mb-2">Premium Coffee</h1>
            <h2 className="text-xl text-amber-200 mb-4">Exceptional brews for every moment</h2>
            <p className="text-sm text-amber-100">
              Discover our selection of expertly sourced teas and
              freshly roasted coffees from around the world.
            </p>
            <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white py-2 px-6 rounded-full text-sm font-medium transition-all duration-300 shadow-md">
              Explore Our Collection
            </button>
          </div>

          {/* Feature products */}
          <div className="absolute left-[10%] top-[20%] w-20 z-10 animate-pulse">
            <img
              src="src/assets/images/coffee-beans.png"
              alt="Coffee Beans"
              className="w-full h-auto object-contain drop-shadow-lg"
            />
          </div>

          <div className="absolute right-[10%] top-[25%] w-20 z-10 animate-pulse">
            <img
              src="src/assets/images/tea-leaves.png"
              alt="Tea Leaves"
              className="w-full h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Desktop View (improved) */}
        <div className="hidden md:block relative h-[90vh]">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r  to-amber-950 opacity-20 z-0"></div>
          
          {/* Main hero image */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[-240px] w-[900px] z-0">
            <img
              src="src/assets/images/coffee-tea-hero.png"
              alt="Coffee and Tea"
              className="w-full h-auto rounded-lg hover:scale-105 transition-all duration-300 shadow-2xl"
            />
          </div>


          {/* Text content */}
          <div className="absolute left-[12%] top-[20%] transform translate-x-8 max-w-md  bg-opacity-90 p-8 rounded-lg z-10  ">
            <h1 className="text-4xl font-bold text-amber-50 mb-3">Premium Coffee</h1>
            <h2 className="text-2xl text-amber-200 mb-4">Exceptional brews for every moment</h2>
            <p className="text-amber-100 text-md mb-6">
              Discover our selection of expertly sourced teas and freshly roasted
              coffees from around the world. Each product is carefully selected
              for exceptional quality and flavor.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-8 rounded-full text-lg font-medium transition-all duration-300 shadow-md">
              Explore Our Collection
            </button>
          </div>

          {/* Feature products */}
          <div className="absolute left-1/3 top-2 w-56 z-10 transform hover:rotate-12 transition-all duration-500">
            <img
              src="src/assets/images/Coffee_Beans-removebg-preview.png"
              alt="Coffee Beans"
              className="w-full h-auto rounded-lg drop-shadow-xl"
            />
          </div>
          <div className="absolute left-[800px] top-60 w-56 z-10 transform hover:rotate-12 transition-all duration-500">
            <img
              src="src/assets/images/Coffee_Beans-removebg-preview.png"
              alt="Coffee Beans"
              className="w-full h-auto rounded-lg drop-shadow-xl"
            />
          </div>

          <div className="absolute left-1/2 top-32 w-56 z-10 transform hover:-rotate-12 transition-all duration-500">
            <img
              src="src/assets/images/Coffee_Beans_2-removebg-preview.png"
              alt="Tea Leaves"
              className="w-full h-auto rounded-lg drop-shadow-xl"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute right-28 top-96 w-24 z-10"></div>
          <div className="absolute right-0 -top-[120px] w-[400px] z-10">
            <div className="relative w-full">
              <img
                src="src/assets/images/Coffee_Beans_7-removebg-preview.png"
                alt="Tea Leaf"
                className="w-full h-auto rounded-lg  transition-all duration-300 drop-shadow-2xl"
              />
              <div className="absolute bottom-[-50px] left-36 w-full h-44 bg-amber-950 blur-xl rounded-b-lg" />
            </div>
          </div>
        </div>
        
        {/* Decorative element for both mobile and desktop */}
        <div className="absolute left-0 md:left-10 top-[80vh] md:top-96 w-full md:w-96 z-5">
          <img
            src="src/assets/images/penuts12.png"
            alt="Tea Leaves"
            className="w-full h-auto max-w-[400px] md:max-w-none rounded-lg transition-all duration-300 drop-shadow-lg"
          />
        </div>
      </div>

      {/* Coffee Products Section with improved spacing */}
      <div className="relative z-20 -mt-24 md:mt-72 bg-gradient-to-b from-amber-50 to-amber-100 pt-16 pb-20 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 text-center mb-2">Our Coffee Selection</h2>
          <p className="text-amber-800 text-center max-w-2xl mx-auto mb-10">Explore our premium coffee varieties sourced from the finest growing regions around the world</p>
          <CoffeeProducts products={coffeeProducts}/>
        </div>
      </div>

      {/* Tea Section with contrasting background */}
      <div className="bg-amber-100">
        <Tea/>
      </div>

      <div className="relative  z-20  ">
        <ThankYouFooter />
      </div>
    </div>
  )
}

export default TeaAndCoffee;