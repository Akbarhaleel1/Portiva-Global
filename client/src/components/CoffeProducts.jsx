const CoffeeProducts = ({ products }) => {
  console.log('products', products)
  return (
    <div className="w-full p-8 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((category) => (
          <div 
            key={category.id}
            className="border border-amber-200 rounded-lg shadow-lg bg-white p-6"
          >
            <div className="flex flex-col items-center h-full">
              {/* Round image container with overflow-hidden */}
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 bg-amber-100 flex items-center justify-center">
                {category.image ? (
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover"  // Changed to object-cover for better round appearance
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <span className="text-amber-800 text-4xl">☕</span>  // Increased emoji size
                )}
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {category.name}
              </h2>
              
              <p className="text-gray-600 text-center mb-4">
                {category.description}
              </p>
              
              <div className="w-full">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">
                  Grades/Varieties:
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  {category.grades?.map((grade, index) => (
                    <li key={`${category.id}-${index}`} className="text-gray-700">
                      {grade}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeProducts;