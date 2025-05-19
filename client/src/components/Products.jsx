
const Products = ({products}) => {
  // Sample product data

  return (
    <div className="w-full p-8 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Left card - tall card with spice scattered below */}
        <div className="border border-amber-200 rounded-lg shadow-lg bg-white p-6">
          <div className="flex flex-col items-center h-full">
            <img 
              src={products[0].image} 
              alt={products[0].name} 
              className="w-60 h-[400px] object-contain mb-12" 
            />
       
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{products[0].name}</h2>
            <p className="text-gray-600 text-center">
              {products[0].description}
            </p>
          </div>
        </div>
        
        {/* Middle column with two cards stacked */}
        <div className="flex flex-col gap-8">
          {/* Top middle card */}
          <div className="border border-amber-200 rounded-lg shadow-lg bg-white p-6">
            <div className="flex flex-col items-center">
              <img 
                src={products[1].image} 
                alt={products[1].name} 
                className="w-48 h-48 object-contain mb-6" 
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{products[1].name}</h2>
              <p className="text-gray-600 text-center">
                {products[1].description}
              </p>
            </div>
          </div>
          
          {/* Bottom middle card */}
          <div className="border border-amber-200 rounded-lg shadow-lg bg-white p-6">
            <div className="flex flex-col items-center">
              <img 
                src={products[2].image} 
                alt={products[2].name} 
                className="w-48 h-48 object-contain mb-6" 
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{products[2].name}</h2>
              <p className="text-gray-600 text-center">
                {products[2].description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Right card - tall card with spice scattered below */}
        <div className="border border-amber-200 rounded-lg shadow-lg bg-white p-6">
          <div className="flex flex-col items-center h-full">
            <img 
              src={products[3].image} 
              alt={products[3].name} 
              className="w-60 h-[400px] object-contain mb-12" 
            />
     
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{products[3].name}</h2>
            <p className="text-gray-600 text-center">
              {products[3].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;