import { useState } from 'react';
import { X, ArrowRight, Coffee, Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductsListingModal = ({ onClose }) => {
  // State to manage modal visibility
  const [isOpen, setIsOpen] = useState(true);

  // Use React Router's navigate function
  const navigate = useNavigate();
  
  const navigateToPage = (page) => {
    navigate(`/${page}`);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
    // If a parent component is controlling the state via props
    if (onClose) {
      onClose();
    }
  };

  // Don't render anything if modal is closed
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto z-50">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity" 
          aria-hidden="true"
          onClick={closeModal} // Close modal when clicking on background
        >
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          {/* Modal header */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 sm:px-6 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-800">Explore Our Products</h3>
            <button 
              onClick={closeModal} 
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Modal content */}
          <div className="bg-white px-6 py-8 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Spices Card */}
              <div 
                onClick={() => {
                  navigateToPage('spices');
                  closeModal();
                }}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-90"></div>
                <div className="absolute inset-0 bg-cover bg-center opacity-30" 
                     style={{backgroundImage: "url('/api/placeholder/800/500')"}}></div>
                
                <div className="relative p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Flame className="text-white mr-3" size={28} />
                    <h3 className="text-2xl font-bold text-white">Spices</h3>
                  </div>
                  
                  <p className="text-white text-opacity-90 mb-4">
                    Discover our premium collection of exotic spices sourced from around the world.
                    Elevate your culinary creations with authentic flavors.
                  </p>
                  
                  <div className="mt-auto flex items-center">
                    <span className="text-white font-medium group-hover:underline">Browse All Spices</span>
                    <ArrowRight className="ml-2 text-white transform group-hover:translate-x-1 transition-transform" size={18} />
                  </div>
                </div>
              </div>
              
              {/* Tea Card */}
              <div 
                onClick={() => {
                  navigateToPage('drinks');
                  closeModal();
                }}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-90"></div>
                <div className="absolute inset-0 bg-cover bg-center opacity-30" 
                     style={{backgroundImage: "url('/api/placeholder/800/500')"}}></div>
                
                <div className="relative p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Coffee className="text-white mr-3" size={28} />
                    <h3 className="text-2xl font-bold text-white">Coffee</h3>
                  </div>
                  
                  <p className="text-white text-opacity-90 mb-4">
                    Indulge in our selection of premium beverages crafted for the discerning palate.
                    From artisanal coffees to exotic teas.
                  </p>
                  
                  <div className="mt-auto flex items-center">
                    <span className="text-white font-medium group-hover:underline">Browse All Drinks</span>
                    <ArrowRight className="ml-2 text-white transform group-hover:translate-x-1 transition-transform" size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Modal footer */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 hover:bg-gray-700 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsListingModal;