import { useState, useEffect, useRef } from "react";
import { Globe, TrendingUp, Shield, Clock } from "lucide-react";
import WhyChooseUs from "./WhyChooseUs";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GzapAnimation from "./GzapAnimation";
import ExportingProducts from "./ExportingProducts";

export default function ExportServicesUI() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);


  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Globe className="text-teal-600" size={28} />,
      title: "Global Reach",
      description: "Connect with over 150+ international markets across 6 continents"
    },
    {
      icon: <TrendingUp className="text-teal-600" size={28} />,
      title: "Growth Strategy",
      description: "Tailored export solutions to expand your market presence"
    },
    {
      icon: <Shield className="text-teal-600" size={28} />,
      title: "Secure Transactions",
      description: "End-to-end encrypted logistics and payment processing"
    },
    {
      icon: <Clock className="text-teal-600" size={28} />,
      title: "Fast Delivery",
      description: "Optimized shipping routes for quicker market entry"
    }
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
    <div className="font-sans bg-gradient-to-br from-white to-blue-50 min-h-screen" ref={containerRef} >

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-500/20 z-0"></div>
        <div className="relative z-50 mt-11">
          <Navbar
            isProductsDropdownOpen={isProductsDropdownOpen}
            onChangeIsProductsDropdownOpen={onChangeIsProductsDropdownOpen}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center py-12 md:py-24">
            {/* Hero Text */}
            <div className={`md:w-1/2 md:pr-8 mb-8 md:mb-0 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-800">
                  Connecting global markets
                </span>
                <span className="block text-2xl md:text-3xl mt-2">
                  through reliable export solutions
                </span>
              </h1>

              <p className="text-lg text-gray-700 mb-8">
                Portiva Global International Export & Importing enables businesses to expand
                internationally by providing efficient, transparent, and secure export services
                — helping products reach new markets with confidence and speed.
              </p>

              <div className="flex flex-wrap gap-4">
              
                <button className="px-6 py-3 bg-white text-teal-600 font-medium rounded-lg shadow-md border border-teal-200 hover:bg-teal-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Image with Video */}
            <div className={`md:w-1/2 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <div className="relative h-96 md:h-96 overflow-hidden rounded-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-900/30 z-10"></div>

                {/* Video Element */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                >
                  <source src="/video/Hero_Section_Video.mp4" type="video/mp4" />
                  <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('fallback-image.jpg')" }}></div>
                </video>


              </div>
            </div>
          </div>
        </div>
      </div>

        {/* <div className="overflow-y-auto h-screen">
        <ExportingProducts ref={containerRef} />
      </div> */}
      <div>
        <WhyChooseUs />
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Export Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs for seamless international expansion
            </p>
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

      <div className="relative z-0">
        <GzapAnimation />
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
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