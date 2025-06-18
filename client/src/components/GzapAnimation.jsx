import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const GzapAnimation = () => {
  const imageRef = useRef([]);
  const imageContainerRef = useRef();
  const sectionRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const modalRef = useRef();
  const modalContentRef = useRef();

  // Complete product data with detailed descriptions
  const products = [
    {
      id: 1,
      title: "Premium Cardamom",
      description: "8mm+ premium, split, and medium grades of handpicked green cardamom",
      detailedDescription: "Our premium cardamom is sourced from the finest plantations in Guatemala, handpicked at peak ripeness to ensure maximum flavor and aroma",
      image: "/images/product1.jpg",
      badge: "Premium Export",
      specs: [
        "Origin: Guatemala Highlands",
        "Size: 8mm+ pods",
        "Moisture: <10%",
        "Color: Vibrant Green"
      ],
      uses: [
        "Traditional chai tea",
        "Middle Eastern cuisine",
        "Scandinavian baking"
      ]
    },
    {
      id: 2,
      title: "Ceylon Cinnamon",
      description: "Authentic Ceylon cinnamon sticks with intense aroma and delicate flavor",
      detailedDescription: "Genuine Ceylon cinnamon (Cinnamomum verum) from Sri Lanka, prized for its distinctive sweet and delicate flavor.",
      image: "/images/product2.jpg",
      badge: "Grade A",
      specs: [
        "Origin: Kerala, India",
        "Type: Cinnamomum verum",
        "Length: 15-20cm sticks",
        "Diameter: 1-1.5cm",
        "Purity: 100% Ceylon"
      ],
      uses: [
        "Desserts and baking",
        "Hot beverages",
        "Curry powders"
      ]
    },
    {
      id: 3,
      title: "Specialty Coffee Beans",
      description: "Premium Arabica and Robusta beans sourced from high-altitude plantations",
      detailedDescription: "Directly sourced from high-altitude plantations in Ethiopia, Colombia, and Vietnam, our specialty coffee beans are handpicked at peak ripeness.",
      image: "/images/product3.jpg",
      badge: "Single Origin",
      specs: [
        "Origins: Ethiopia, Colombia, Vietnam",
        "Varieties: Arabica (85+), Robusta",
        "Altitude: 1200-2000m",
        "Processing: Washed/Natural",
      ],
      uses: [
        "Specialty coffee brewing",
        "Espresso blends",
        "Cold brew"
      ]
    },
    {
      id: 4,
      title: "Whole Cloves",
      description: "Hand-selected aromatic flower buds with intense flavor profiles",
      detailedDescription: "Our premium whole cloves are hand-selected from the finest Zanzibar and Madagascar harvests. ",
      image: "/images/product4.jpg",
      badge: "Organic",
      specs: [
        "Origin: Zanzibar & Madagascar",
        "Type: Whole flower buds",
        "Eugenol Content: 18-20%",
        "Moisture: <8%",
      ],
      uses: [
        "Spice blends (garam masala)",
        "Mulled wines",
        "Dental applications",
        "Pickling spices"
      ]
    },
    {
      id: 5,
      title: "Black Pepper & Star Anise",
      description: "Bold black peppercorns and distinctive star anise for global cuisine",
      detailedDescription: "Premium Tellicherry black peppercorns from India's Malabar Coast, known for their large size and complex flavor profile with citrusy top notes. ",
      image: "/images/product5.jpg",
      badge: "Premium Quality",
      specs: [
        "Pepper Origin: Malabar, India",
        "Pepper Size: 4.25mm+",
        "Pepper Heat: 50,000-60,000 SHU",
      ],
      uses: [
        "Steak and meat rubs",
        "Chinese five-spice powder",
        "Pho and ramen broths"
      ]
    },
    {
      id: 6,
      title: "Camellia Sinensis",
      description: "Finest tea leaves harvested at peak freshness for exceptional brews",
      detailedDescription: "Premium tea leaves (Camellia sinensis) from renowned growing regions including Darjeeling, Assam, and Uji. ",
      image: "/images/product6.jpg",
      badge: "Limited Harvest",
      specs: [
        "Origins: Darjeeling, Assam, Uji",
        "Types: White, Green, Oolong, Black",
        "Plucking Standard: Two leaves and bud",
        "Oxidation: 0-100% (by type)",
        "Caffeine: 15-60mg/cup",
      ],
      uses: [
        "Premium tea blends",
        "Matcha production",
        "Tea ceremonies",
        "Iced tea",
        "Culinary applications"
      ]
    },
    {
      id: 7,
      title: "Global Logistics",
      description: "Specialized Ocean & Air Freight services for agricultural exports",
      detailedDescription: "Our comprehensive logistics solutions ensure your agricultural products arrive in perfect condition, anywhere in the world. ",
      image: "/images/product7.jpg",
      badge: "Worldwide Service",
      specs: [
        "Modes: Ocean, Air, Land",
        "Temp Control: -25°C to +25°C",
        "Container Types: Dry, Reefer, Flexitank",
      ],
      uses: [
        "Bulk commodity shipping",
        "Time-sensitive deliveries",
        "Perishable goods transport"
      ]
    }
  ];

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      direction: 'horizontal',
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        xPercent: -100 * (imageRef.current.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + (imageContainerRef.current.offsetWidth - window.innerWidth),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          snap: 1 / (imageRef.current.length - 1),
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const newIndex = Math.round(self.progress * (products.length - 1));
            setActiveIndex(newIndex);
          }
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
    
    // Animate modal in
    gsap.fromTo(modalRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );
  };

  const closeModal = () => {
    // Animate modal out
    gsap.to(modalRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setSelectedProduct(null);
        document.body.style.overflow = 'auto';
      }
    });
  };

  // Close modal when clicking outside content
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalContentRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <>
      <style jsx global>{`
        /* Custom scrollbar styles */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .modal-content {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05);
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative bg-black w-full h-screen overflow-hidden"
      >
        <div className="h-screen flex items-center px-10 sticky top-0">
          <div
            className="flex flex-row gap-6"
            ref={imageContainerRef}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="w-[80vh] h-[80vh] shrink-0 rounded-3xl overflow-hidden bg-gray-800 relative group"
                ref={(ref) => (imageRef.current[index] = ref)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-10">
                  <div className="mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="bg-amber-600 text-white text-sm font-medium px-3 py-1 rounded-full">{product.badge}</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{product.title}</h2>
                  <p className="text-lg text-gray-200 max-w-lg transform translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">{product.description}</p>
                  <div className="mt-5 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <button 
                      onClick={() => openModal(product)}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-6 py-2 rounded-full font-medium transition-all duration-300"
                    >
                      Explore Details
                    </button>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-10 right-10">
                      <div className="w-20 h-20 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-white text-4xl">+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex space-x-2">
            {products.map((_, index) => (
              <div 
                key={index} 
                // className={`h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-white w-10' : 'bg-white/30 w-3'}`}
                className={`h-3 rounded-full transition-all duration-300 }`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={handleOutsideClick}
        >
          <div 
            ref={modalRef}
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700 relative"
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-gray-800 z-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div 
              ref={modalContentRef}
              className="grid md:grid-cols-2 gap-8 h-full custom-scrollbar overflow-y-auto max-h-[90vh]"
            >
              <div className="h-[300px] md:h-full sticky top-0">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none"
                />
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <span className="bg-amber-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {selectedProduct.badge}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4">
                  {selectedProduct.title}
                </h2>
                
                <p className="text-gray-300 mb-6">
                  {selectedProduct.detailedDescription}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Product Specifications</h3>
                  <ul className="space-y-2">
                    {selectedProduct.specs.map((spec, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProduct.uses && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Common Uses</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.uses.map((use, i) => (
                        <span key={i} className="bg-gray-800 text-amber-400 px-3 py-1 rounded-full text-sm">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GzapAnimation;