const TypographyShowcase = () => {
  return (
    <div className="relative w-full py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center overflow-hidden">
      {/* Small red spice/chili in top left */}
      <div className="absolute top-4 md:top-6 lg:top-8 left-4 md:left-6 lg:left-12">
        <div className="w-6 md:w-7 lg:w-8 h-6 md:h-7 lg:h-8 bg-red-500 rounded-full"></div>
      </div>

      {/* Green leaf in top right */}
      <div className="absolute top-4 md:top-6 lg:top-8 right-4 md:right-6 lg:right-12">
        <div className="w-8 md:w-10 lg:w-12 h-10 md:h-14 lg:h-16 rounded-full">  
          <img 
            src="src/assets/images/leaf.png"
            alt="Assorted spices in a bowl" 
            className="w-full h-full object-contain" 
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-4 md:gap-6 lg:gap-8 md:ml-12 lg:ml-56">
        {/* Typography section */}
        <div className="w-full lg:w-1/2 px-2 text-center lg:text-left order-2 md:order-1">
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              spices uses <span className="text-red-500">gilroy</span>
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              for headlines <span className="font-light"> body copy.</span>
            </p>
          </div>
          
          <div className="mt-2 md:mt-4">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">
              and <span className="font-bold">bodoni</span> typeface with a humanist touch
            </p>
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-light">
              chosen to help create a friendly brand.
            </p>
          </div>
        </div>
        
        {/* Spices image container */}
        <div className="w-full sm:w-2/3 lg:w-1/3 xl:w-1/4 flex justify-center order-1 md:order-2 lg:mr-12 xl:mr-60"> 
          <div className="w-48 sm:w-64 md:w-72 lg:w-64 xl:w-80 h-36 sm:h-48 md:h-56 lg:h-64 xl:h-72 rounded-full overflow-hidden relative mx-auto ">
            <img 
              src="src/assets/images/cinamons.png" 
              alt="Assorted spices in a bowl" 
              className="absolute w-full h-[90%] object-cover top-1/2 left-1/2 sm:left-1/2 md:left-28 lg:left-32 xl:left-36 transform -translate-x-1/2 -translate-y-1/2" 
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyShowcase;