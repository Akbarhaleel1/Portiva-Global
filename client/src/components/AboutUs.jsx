import { useState } from 'react';
import { Globe, Ship, Award, Users, Zap, Gift, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import { User } from 'lucide-react';

export default function AboutUs() {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  
  const onChangeIsProductsDropdownOpen = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500/20 to-blue-500/20">
      <div className="relative overflow-hidden">
        <div className="relative z-50 mt-11">
          <Navbar
            isProductsDropdownOpen={isProductsDropdownOpen} 
            onChangeIsProductsDropdownOpen={onChangeIsProductsDropdownOpen}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-16 pb-20 text-center">
            <h1 className="text-[50px] font-extrabold text-gray-900 tracking-tight mb-4">
              About Portiva Global
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-700">
              Bringing Keralas authentic flavors to the world
            </p>
            <div className="mt-10 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
                >
                  Contact Us
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Story Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 text-gray-600 space-y-6">
                <p>
                  At Portiva Global, we are passionate exporters of the rich and authentic flavors of Kerala—bringing the world premium spices, tea, coffee, and more. With deep roots in Indias spice belt, our mission is to deliver the finest agricultural treasures from Keralas lush landscapes Kitchen cabinets, resolved quality and businesses across the globe.
                </p>
                <p>
                  We take pride in sourcing directly from trusted farmers and cooperatives who practice sustainable farming. Our product range includes world-renowned spices like black pepper, cardamom, clove, cinnamon, as well as aromatic teas and highland coffee beans, handpicked for their quality and freshness.
                </p>
                <p>
                  Our commitment is not just to trade, but to preserve the heritage and purity of Keralas natural produce. Whether you are a retailer, wholesaler, or food brand, we ensure consistency, reliability, and Resolved quality in every shipment.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-span-1">
              <div className="aspect-w-16 aspect-h-9 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center">
                <Ship className="h-32 w-32 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-16 bg-gradient-to-br from-teal-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Vision
              </h2>
              <div className="mt-6 text-gray-600">
                <p>
                  To become a globally recognized name in the export of Keralas finest natural produce, celebrated for integrity, quality, and sustainability.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Mission
              </h2>
              <ul className="mt-6 text-gray-600 space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 text-teal-600">•</span>
                  <span>To connect global markets with Keralas rich agricultural legacy.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 text-teal-600">•</span>
                  <span>To empower local farmers and promote sustainable sourcing practices.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 text-teal-600">•</span>
                  <span>To consistently deliver high-quality, authentic products that exceed customer expectations.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 text-teal-600">•</span>
                  <span>To build long-term relationships based on trust, transparency, and mutual growth.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Principles that guide everything we do
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="inline-flex items-center justify-center p-2 bg-teal-100 rounded-md">
                <Award className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Quality</h3>
              <p className="mt-2 text-gray-600">
                We are committed to delivering only the highest quality products, maintaining precise quality control from farm to shipment.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-md">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Sustainability</h3>
              <p className="mt-2 text-gray-600">
                We partner with farmers who practice sustainable agriculture, ensuring environmental responsibility throughout our supply chain.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="inline-flex items-center justify-center p-2 bg-teal-100 rounded-md">
                <Globe className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Authenticity</h3>
              <p className="mt-2 text-gray-600">
                We preserve the true essence of Keralas flavors, delivering authentic products that maintain their traditional characteristics.
              </p>
            </div>
          </div>
        </div>
      </div>

         <div className="py-16 bg-gradient-to-br from-teal-500/10 to-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Meet the Founder
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-xl text-gray-600">
            The vision behind Portiva Global
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            {/* Small founder image next to name */}
            <div className="relative mr-4">
              <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                {/* Replace with actual image when available */}
                <div className="w-full h-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center">
                  <User className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-teal-500 text-white p-1 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Manoj Surendran</h3>
              <p className="text-lg text-teal-600 font-medium">Founder & Managing Director</p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-6">
            An ex-Civil Engineer turned entrepreneur, Manoj Surendran brings over a decade of international 
            professional experience and a deep passion for Keralas agricultural wealth.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <div className="mb-3">
              <h4 className="font-medium text-gray-900">Education:</h4>
              <p className="text-gray-700">B.tech in Infrastructure Engineer(CIVIL)</p>
            </div>
            
            <div className="mb-3">
              <h4 className="font-medium text-gray-900">Experience:</h4>
              <p className="text-gray-700">Project & construction engineer with 11 years experience.</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900">Previous Role:</h4>
              <p className="text-gray-700">Binladin Contracting Group LLC, Dubai (Saudi Binladin Group)</p>
            </div>
          </div>
          
          <div className="border-l-4 border-teal-500 pl-4 italic text-gray-700">
            Driven by his roots and a desire to promote Keralas world-class produce globally, 
            Manoj founded Portiva Global with the vision of merging traditional values with global trade standards.
          </div>
        </div>
      </div>
    </div>


      {/* Contact Section */}
      <div id="contact" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Ready to Experience Keralas Finest?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Lets discuss how we can bring authentic Kerala flavors to your business
            </p>
          </div>

          <div className="mt-12 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-gray-900">Contact Information</h3>
                <div className="mt-4 space-y-4">
                  <p className="flex items-start text-gray-700">
                    <span className="font-medium mr-2">Address:</span>
                    <span>
                      Portiva Global, Maruthathoor<br />
                      Chaikottukonam P.O, Neyyattinkara<br />
                      Thiruvananthapuram, Kerala
                    </span>
                  </p>
                  <p className="flex items-center text-gray-700">
                    <span className="font-medium mr-2">Email:</span> portivaglobalint@gmail.com
                  </p>
                  <p className="flex items-center text-gray-700">
                    <span className="font-medium mr-2">Phone:</span> +91 99461 80294
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <a href="tel:+919946180294" className="w-full max-w-xs bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Us
                </a>
                <a href="mailto:portivaglobalint@gmail.com" className="w-full max-w-xs bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between md:items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold">Portiva Global</h3>
              <p className="mt-2 text-gray-400">Exporting Keralas authentic flavors worldwide</p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Products</h4>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">Spices</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Tea</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Coffee</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Company</h4>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Our Values</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Portiva Global. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}