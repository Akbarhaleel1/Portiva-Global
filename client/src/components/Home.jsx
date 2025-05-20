
// import { useState, useEffect, useRef } from "react";
// import { Globe, TrendingUp, Shield, Clock, ChevronRight, ArrowRight, MapPin, Users, BarChart } from "lucide-react";
// import WhyChooseUs from "./WhyChooseUs";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import GzapAnimation from "./GzapAnimation";
// import ExportingProducts from "./ExportingProducts";

// export default function ExportServicesUI() {
//   const [isVisible, setIsVisible] = useState(false);
//   const containerRef = useRef(null);
//   const exportSectionRef = useRef(null);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const scrollToSection = () => {
//     exportSectionRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const services = [
//     {
//       icon: <Globe className="text-teal-600" size={28} />,
//       title: "Product Sourcing",
//       description: "We source high-quality products directly from certified suppliers and producers, ensuring authenticity and consistency across every shipment."
//     },
//     {
//       icon: <TrendingUp className="text-teal-600" size={28} />,
//       title: "Custom Packaging",
//       description: "Tailored packaging solutions that meet international standards while preserving freshness, durability, and brand appeal."
//     },
//     {
//       icon: <Shield className="text-teal-600" size={28} />,
//       title: "Documentation & Compliance",
//       description: "Complete export documentation, certifications, and compliance support to ensure smooth customs clearance in destination countries."
//     },
//     {
//       icon: <Clock className="text-teal-600" size={28} />,
//       title: "Logistics & Shipping",
//       description: "Efficient and reliable global shipping with real-time tracking, timely dispatch, and strong partnerships with trusted logistics providers."
//     }
//   ];

//   const stats = [
//     { value: "10+", label: "Global Markets" },
//     { value: "96%", label: "Client Satisfaction" },
//     { value: "100+", label: "Products Exported" },
//   ];

//   const testimonials = [
//     {
//       name: "Sarah Chen",
//       company: "TechGlobal Inc.",
//       content: "Portiva helped us expand into Asian markets with remarkable efficiency."
//     },
//     {
//       name: "Marcus Johnson",
//       company: "EcoGoods Co.",
//       content: "Our exports increased by 175% within just 8 months of partnership."
//     }
//   ];

//   const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

//   const onChangeIsProductsDropdownOpen = () => {
//     setIsProductsDropdownOpen(!isProductsDropdownOpen);
//   };

//   return (
//     <div className="font-sans bg-gradient-to-br from-white to-blue-50 min-h-screen" ref={containerRef}>
//       {/* Hero Section - Premium Export Version */}
//       <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-teal-900 text-white">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {/* Animated shipping routes */}
//           <div className="absolute inset-0">
//             <div className="absolute top-1/4 left-1/5 w-1/2 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-30 animate-pulse"></div>
//             <div className="absolute top-2/3 left-1/3 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
//             <div className="absolute top-1/2 left-1/4 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
//           </div>
          
//           {/* Floating dots representing trade hubs */}
//           <div className="absolute top-1/4 left-1/5 h-2 w-2 bg-teal-400 rounded-full animate-ping"></div>
//           <div className="absolute top-2/3 right-1/4 h-2 w-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
//           <div className="absolute top-1/2 left-3/4 h-2 w-2 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>
//         </div>
        
//         {/* Navbar */}
//         <div className="relative z-50 mt-11">
//           <Navbar
//             isProductsDropdownOpen={isProductsDropdownOpen}
//             onChangeIsProductsDropdownOpen={onChangeIsProductsDropdownOpen}
//           />
//         </div>
        
//         {/* Hero Content */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//             {/* Left side hero content */}
//             <div className={`md:w-1/2 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
//               <div className="flex items-center mb-6 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 w-fit border border-white/20">
//                 <span className="h-2 w-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
//                 <span className="text-sm font-medium text-teal-100">Facilitating Global Trade Since 2010</span>
//               </div>
              
//               <h1 className="text-5xl md:text-6xl font-bold leading-none mb-8">
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">
//                   Seamless Export Solutions
//                 </span>
//                 <span className="block text-3xl md:text-4xl font-semibold text-white/90 mt-4">
//                   Exporting Nature&lsquo;s Finest - Tea, Coffee & Spices
//                 </span>
//               </h1>

//               <p className="text-xl text-teal-100 mb-10 max-w-xl leading-relaxed">
//                 Portiva Global International transforms your export challenges into global opportunities
//                 with our comprehensive logistics network spanning 6 continents and 150+ markets.
//               </p>

//               {/* Stats row with enhanced visual elements */}
//               <div className="grid grid-cols-3 gap-6 mb-10">
//                 {stats.map((stat, index) => (
//                   <div key={index} className="text-center p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all">
//                     <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
//                     <div className="text-sm text-teal-200">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex flex-wrap gap-4 mb-12">
//                 <button onClick={scrollToSection} className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg shadow-lg shadow-teal-900/30 hover:shadow-xl hover:shadow-teal-900/40 transition-all flex items-center gap-3">
//                   <span className="font-bold">Start Exploring</span>
//                   <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             </div>

// <div className={`md:w-1/2 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
//   <div className="relative">
//     <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/20 to-transparent blur-xl"></div>
//     <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-br from-teal-600/20 to-transparent blur-xl"></div>
    
//     <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-2xl shadow-blue-900/40">
//       {/* Image Slider Container */}
//       <div className="relative h-96 w-full rounded-xl overflow-hidden">
//         {/* First Slide */}
//         <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
//           <img
//             src="https://i.pinimg.com/736x/e1/af/fa/e1affaa1f3d06e614db76f3d5f63bdb5.jpg"
//             alt="Background 1"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/30"></div>
//         </div>
        
//         {/* Second Slide */}
//         <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
//           <img
//             src="https://img.freepik.com/free-photo/top-view-various-indian-spices-seasonings-table_181624-58725.jpg"
//             alt="Background 2"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/30"></div>
//         </div>
        
//         {/* SVG Background Pattern (kept from original) */}
//         <div className="absolute inset-0 opacity-20">
//           <svg viewBox="0 0 800 500" className="w-full h-full">
//             <path d="M110,200 Q150,180 200,190 T300,200 T400,180 T500,190 T600,200 T700,190"
//                   stroke="rgba(255,255,255,0.3)"
//                   fill="none"
//                   strokeWidth="1" />
//             <path d="M100,250 Q150,230 200,240 T300,250 T400,230 T500,240 T600,250 T700,240"
//                   stroke="rgba(255,255,255,0.3)"
//                   fill="none"
//                   strokeWidth="1" />
//             <path d="M150,300 Q200,280 250,290 T350,300 T450,280 T550,290 T650,300"
//                   stroke="rgba(255,255,255,0.3)"
//                   fill="none"
//                   strokeWidth="1" />
//           </svg>
//         </div>
        
//         {/* Globe Animation (kept from original) */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="relative w-64 h-64">
//             <div className="absolute inset-0">
//               <svg viewBox="0 0 200 200" className="w-full h-full">
//                 <defs>
//                   <linearGradient id="routeGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="rgba(45, 212, 191, 0)" />
//                     <stop offset="50%" stopColor="rgba(45, 212, 191, 1)" />
//                     <stop offset="100%" stopColor="rgba(45, 212, 191, 0)" />
//                   </linearGradient>
//                 </defs>
//                 <path d="M100,100 L180,50" stroke="url(#routeGradient1)" strokeWidth="1.5">
//                   <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
//                   <animate attributeName="stroke-dasharray" values="0,10,10,10,10,10;10,10,10,10,10,0" dur="3s" repeatCount="indefinite" />
//                 </path>
//                 <path d="M100,100 L160,160" stroke="url(#routeGradient1)" strokeWidth="1.5">
//                   <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4s" repeatCount="indefinite" />
//                   <animate attributeName="stroke-dasharray" values="0,10,10,10,10,10;10,10,10,10,10,0" dur="4s" repeatCount="indefinite" />
//                 </path>
//                 <path d="M100,100 L40,150" stroke="url(#routeGradient1)" strokeWidth="1.5">
//                   <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3.5s" repeatCount="indefinite" />
//                   <animate attributeName="stroke-dasharray" values="0,10,10,10,10,10;10,10,10,10,10,0" dur="3.5s" repeatCount="indefinite" />
//                 </path>
//                 <path d="M100,100 L30,60" stroke="url(#routeGradient1)" strokeWidth="1.5">
//                   <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.5s" repeatCount="indefinite" />
//                   <animate attributeName="stroke-dasharray" values="0,10,10,10,10,10;10,10,10,10,10,0" dur="2.5s" repeatCount="indefinite" />
//                 </path>
//               </svg>
//             </div>
            
//             <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-teal-500/30 flex items-center justify-center animate-pulse">
//               <div className="w-24 h-24 rounded-full border-2 border-blue-500/30 flex items-center justify-center">
//                 <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500/20 to-blue-500/20 border border-white/20 flex items-center justify-center">
//                   <Globe size={32} className="text-white" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* All the info cards (kept from original) */}
//         <div className="absolute top-1/4 right-1/4 flex flex-col items-center">
//           <div className="w-3 h-3 bg-teal-400 rounded-full animate-ping opacity-75" style={{animationDuration: '2s'}}></div>
//           <div className="mt-2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/10">
//             <div className="flex items-center gap-2">
//               <MapPin size={16} className="text-teal-300" />
//               <span className="text-xs font-bold text-white">Asia-Pacific Hub</span>
//             </div>
//             <div className="mt-1 text-xs text-teal-200">35+ countries serviced</div>
//           </div>
//         </div>
        
//         <div className="absolute bottom-1/3 left-1/4 flex flex-col items-center">
//           <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75" style={{animationDuration: '2.5s'}}></div>
//           <div className="mt-2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/10">
//             <div className="flex items-center gap-2">
//               <MapPin size={16} className="text-blue-300" />
//               <span className="text-xs font-bold text-white">European Network</span>
//             </div>
//             <div className="mt-1 text-xs text-blue-200">42 distribution centers</div>
//           </div>
//         </div>
        
//         <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/10 shadow-lg">
//           <div className="flex items-center gap-2">
//             <BarChart size={16} className="text-teal-300" />
//             <span className="text-xs font-bold text-white">98.7% On-time Delivery</span>
//           </div>
//         </div>
        
//         <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/10 shadow-lg">
//           <div className="flex items-center gap-2">
//             <Users size={16} className="text-blue-300" />
//             <span className="text-xs font-bold text-white">2000+ Export Specialists</span>
//           </div>
//         </div>
//       </div>
      
//       {/* Steps grid (kept from original) */}
//       <div className="mt-6 grid grid-cols-4 gap-2">
//         <div className="text-center p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
//           <div className="text-xs font-bold text-white mb-1">Source</div>
//           <div className="text-xs text-teal-200">Step 1</div>
//         </div>
//         <div className="text-center p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
//           <div className="text-xs font-bold text-white mb-1">Ship</div>
//           <div className="text-xs text-teal-200">Step 2</div>
//         </div>
//         <div className="text-center p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
//           <div className="text-xs font-bold text-white mb-1">Distribute</div>
//           <div className="text-xs text-teal-200">Step 3</div>
//         </div>
//         <div className="text-center p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
//           <div className="text-xs font-bold text-white mb-1">Deliver</div>
//           <div className="text-xs text-teal-200">Step 4</div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
            
//           </div>
//         </div>
//       </div>

//       {/* Rest of the content */}
//       {/* Exporting Products Section */}
//       <div className="py-16 bg-gradient-to-br from-white to-blue-50" id=''>
//         <ExportingProducts />
//       </div>

//       <div>
//         <WhyChooseUs />
//       </div>

//       {/* Services Section */}
//       <div className="bg-white py-16 overflow-hidden relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900">Our Export Services</h2>
//             <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
//             Delivering Excellence at Every Step of the Export Journey            </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                   }`}
//                 style={{ transitionDelay: `${150 * index}ms` }}
//               >
//                 <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div  ref={exportSectionRef} className="relative z-0">
//         <GzapAnimation />
//       </div>

      
//       {/* Testimonials */}
//       <div className="bg-gradient-to-br from-teal-50 to-blue-50 py-16 overflow-hidden relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//                   }`}
//                 style={{ transitionDelay: `${200 * index}ms` }}
//               >
//                 <div className="flex items-start mb-4">
//                   <div className="mr-4">
//                     <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
//                       {testimonial.name.charAt(0)}
//                     </div>
//                   </div>
//                   <div>
//                     <p className="text-lg text-gray-700 italic">"{testimonial.content}"</p>
//                     <p className="mt-2 font-semibold text-gray-900">{testimonial.name}</p>
//                     <p className="text-sm text-gray-600">{testimonial.company}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { Globe, TrendingUp, Shield, Clock, ChevronRight, ArrowRight, MapPin, Users, BarChart } from "lucide-react";
import WhyChooseUs from "./WhyChooseUs";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GzapAnimation from "./GzapAnimation";
import ExportingProducts from "./ExportingProducts";

export default function ExportServicesUI() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const exportSectionRef = useRef(null);

  const images = [
    "https://i.pinimg.com/736x/e1/af/fa/e1affaa1f3d06e614db76f3d5f63bdb5.jpg",
    "https://img.freepik.com/free-photo/top-view-various-indian-spices-seasonings-table_181624-58725.jpg",
    "https://i.pinimg.com/736x/b8/24/5e/b8245e9b606e79d245fa0892ed286418.jpg",
    "https://i.pinimg.com/736x/c8/41/66/c84166e6dc37795abc152aebc40682f2.jpg"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Set up the slideshow interval
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = () => {
    exportSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: <Globe className="text-teal-600" size={28} />,
      title: "Product Sourcing",
      description: "We source high-quality products directly from certified suppliers and producers, ensuring authenticity and consistency across every shipment."
    },
    {
      icon: <TrendingUp className="text-teal-600" size={28} />,
      title: "Custom Packaging",
      description: "Tailored packaging solutions that meet international standards while preserving freshness, durability, and brand appeal."
    },
    {
      icon: <Shield className="text-teal-600" size={28} />,
      title: "Documentation & Compliance",
      description: "Complete export documentation, certifications, and compliance support to ensure smooth customs clearance in destination countries."
    },
    {
      icon: <Clock className="text-teal-600" size={28} />,
      title: "Logistics & Shipping",
      description: "Efficient and reliable global shipping with real-time tracking, timely dispatch, and strong partnerships with trusted logistics providers."
    }
  ];

  const stats = [
    { value: "10+", label: "Global Markets" },
    { value: "96%", label: "Client Satisfaction" },
    { value: "100+", label: "Products Exported" },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechGlobal Inc.",
      content: "Portiva helped us expand into Asian markets with remarkable efficiency."
    },
    {
      name: "Marcus Johnson",
      company: "EcoGoods Co.",
      content: "Our exports increased by 175% within just 8 months of partnership."
    }
  ];

  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const onChangeIsProductsDropdownOpen = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  return (
    <div className="font-sans bg-gradient-to-br from-white to-blue-50 min-h-screen" ref={containerRef}>
      {/* Hero Section - Premium Export Version */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-900 to-teal-900 text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated shipping routes */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/5 w-1/2 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-30 animate-pulse"></div>
            <div className="absolute top-2/3 left-1/3 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Floating dots representing trade hubs */}
          <div className="absolute top-1/4 left-1/5 h-2 w-2 bg-teal-400 rounded-full animate-ping"></div>
          <div className="absolute top-2/3 right-1/4 h-2 w-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-3/4 h-2 w-2 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>
        </div>
        
        {/* Navbar */}
        <div className="relative z-50 mt-11">
          <Navbar
            isProductsDropdownOpen={isProductsDropdownOpen}
            onChangeIsProductsDropdownOpen={onChangeIsProductsDropdownOpen}
          />
        </div>
        
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left side hero content */}
            <div className={`md:w-1/2 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <div className="flex items-center mb-6 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 w-fit border border-white/20">
                <span className="h-2 w-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
                <span className="text-sm font-medium text-teal-100">Facilitating Global Trade Since 2010</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-none mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">
                  Seamless Export Solutions
                </span>
                <span className="block text-3xl md:text-4xl font-semibold text-white/90 mt-4">
                  Exporting Nature&lsquo;s Finest - Tea, Coffee & Spices
                </span>
              </h1>

              <p className="text-xl text-teal-100 mb-10 max-w-xl leading-relaxed">
                Portiva Global International transforms your export challenges into global opportunities 
                with our comprehensive logistics network spanning 6 continents and 150+ markets.
              </p>

              {/* Stats row with enhanced visual elements */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                    <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-teal-200">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-12">
                <button onClick={scrollToSection} className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg shadow-lg shadow-teal-900/30 hover:shadow-xl hover:shadow-teal-900/40 transition-all flex items-center gap-3">
                  <span className="font-bold">Start Exploring</span> 
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right side interactive export visualization */}
            <div className={`md:w-1/2 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/20 to-transparent blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-br from-teal-600/20 to-transparent blur-xl"></div>
                
                <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-2xl shadow-blue-900/40">
                  {/* Image Slider Container */}
                  <div className="relative h-96 w-full rounded-xl overflow-hidden">
                    {/* Slides */}
                    {images.map((image, index) => (
                      <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                      >
                        <img 
                          src={image} 
                          alt={`Background ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                      </div>
                    ))}
                    
                    {/* SVG Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <svg viewBox="0 0 800 500" className="w-full h-full">
                        <path d="M110,200 Q150,180 200,190 T300,200 T400,180 T500,190 T600,200 T700,190" 
                              stroke="rgba(255,255,255,0.3)" 
                              fill="none" 
                              strokeWidth="1" />
                        <path d="M100,250 Q150,230 200,240 T300,250 T400,230 T500,240 T600,250 T700,240" 
                              stroke="rgba(255,255,255,0.3)" 
                              fill="none" 
                              strokeWidth="1" />
                        <path d="M150,300 Q200,280 250,290 T350,300 T450,280 T550,290 T650,300" 
                              stroke="rgba(255,255,255,0.3)" 
                              fill="none" 
                              strokeWidth="1" />
                      </svg>
                    </div>
                    
                    {/* Globe Animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-64 h-64">
                        <div className="absolute inset-0">
                          <svg viewBox="0 0 200 200" className="w-full h-full">
                            <defs>
                              <linearGradient id="routeGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(45, 212, 191, 0)" />
                                <stop offset="50%" stopColor="rgba(45, 212, 191, 1)" />
                                <stop offset="100%" stopColor="rgba(45, 212, 191, 0)" />
                              </linearGradient>
                            </defs>
                            <path d="M100,100 L180,50" stroke="url(#routeGradient1)" strokeWidth="1.5">
                              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
                              <animate attributeName="stroke-dasharray" values="0,10,10,10,10,10;10,10,10,10,10,0" dur="3s" repeatCount="indefinite" />
                            </path>
                            <path d="M100,100 L160,160" stroke="url(#routeGradient1)" strokeWidth="1.5">
                              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4s" repeatCount="indefinite" />
                              <animate attributeName="stroke-dasharray" values="0,10,10,10,10,10;10,10,10,10,10,0" dur="4s" repeatCount="indefinite" />
                            </path>
                            <path d="M100,100 L40,150" stroke="url(#routeGradient1)" strokeWidth="1.5">
                              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3.5s" repeatCount="indefinite" />
                              <animate attributeName="stroke-dasharray" values="0,10,10,10,10,10;10,10,10,10,10,0" dur="3.5s" repeatCount="indefinite" />
                            </path>
                            <path d="M100,100 L30,60" stroke="url(#routeGradient1)" strokeWidth="1.5">
                              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2.5s" repeatCount="indefinite" />
                              <animate attributeName="stroke-dasharray" values="0,10,10,10,10,10;10,10,10,10,10,0" dur="2.5s" repeatCount="indefinite" />
                            </path>
                          </svg>
                        </div>
                        
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-teal-500/30 flex items-center justify-center animate-pulse">
                          <div className="w-24 h-24 rounded-full border-2 border-blue-500/30 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500/20 to-blue-500/20 border border-white/20 flex items-center justify-center">
                              <Globe size={32} className="text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Info cards */}
                    <div className="absolute top-1/4 right-1/4 flex flex-col items-center">
                      <div className="w-3 h-3 bg-teal-400 rounded-full animate-ping opacity-75" style={{animationDuration: '2s'}}></div>
                      <div className="mt-2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/10">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-teal-300" />
                          <span className="text-xs font-bold text-white">Asia-Pacific Hub</span>
                        </div>
                        <div className="mt-1 text-xs text-teal-200">35+ countries serviced</div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-1/3 left-1/4 flex flex-col items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75" style={{animationDuration: '2.5s'}}></div>
                      <div className="mt-2 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/10">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-blue-300" />
                          <span className="text-xs font-bold text-white">European Network</span>
                        </div>
                        <div className="mt-1 text-xs text-blue-200">42 distribution centers</div>
                      </div>
                    </div>
                    
                    <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/10 shadow-lg">
                      <div className="flex items-center gap-2">
                        <BarChart size={16} className="text-teal-300" />
                        <span className="text-xs font-bold text-white">98.7% On-time Delivery</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/10 shadow-lg">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-blue-300" />
                        <span className="text-xs font-bold text-white">2000+ Export Specialists</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Steps grid */}
                  <div className="mt-6 grid grid-cols-4 gap-2">
                    <div className="text-center p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                      <div className="text-xs font-bold text-white mb-1">Source</div>
                      <div className="text-xs text-teal-200">Step 1</div>
                    </div>
                    <div className="text-center p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                      <div className="text-xs font-bold text-white mb-1">Ship</div>
                      <div className="text-xs text-teal-200">Step 2</div>
                    </div>
                    <div className="text-center p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                      <div className="text-xs font-bold text-white mb-1">Distribute</div>
                      <div className="text-xs text-teal-200">Step 3</div>
                    </div>
                    <div className="text-center p-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                      <div className="text-xs font-bold text-white mb-1">Deliver</div>
                      <div className="text-xs text-teal-200">Step 4</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      {/* Exporting Products Section */}
      <div className="py-16 bg-gradient-to-br from-white to-blue-50" id=''>
        <ExportingProducts />
      </div>

      <div>
        <WhyChooseUs />
      </div>

      {/* Services Section */}
      <div className="bg-white py-16 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Export Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering Excellence at Every Step of the Export Journey            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${150 * index}ms` }}
              >
                <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div  ref={exportSectionRef} className="relative z-0">
        <GzapAnimation />
      </div>

      
      {/* Testimonials */}
      <div className="bg-gradient-to-br from-teal-50 to-blue-50 py-16 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                style={{ transitionDelay: `${200 * index}ms` }}
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 italic">"{testimonial.content}"</p>
                    <p className="mt-2 font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}