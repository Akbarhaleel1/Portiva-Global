
const PortivaHeader = () => {
  return (
    <div className="w-screen bg-black  h-screen relative overflow-hidden">
      {/* Header content with blue glow text */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold tracking-wider text-blue-400 mb-2" style={{
          textShadow: '0 0 10px #5ce1ff, 0 0 20px #5ce1ff'
        }}>
          PORTIVA GLOBAL
        </h1>
        <p className="text-xl tracking-widest text-blue-300" style={{
          textShadow: '0 0 8px #5ce1ff'
        }}>
          INTERNATIONAL EXPORT &amp; IMPORTING
        </p>
      </div>
      
      {/* Spice bowls arranged across the banner */}
      <div className="flex justify-between items-center w-full">
        {/* Left spice bowl - red powder */}
        <div className="w-1/4 relative">
          <div className="w-40 h-32">
            <img 
              src="/api/placeholder/160/128" 
              alt="Red spice powder in wooden bowl" 
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Center spice bowls - two saffron/spices */}
        <div className="w-2/4 flex justify-center gap-4">
          <div className="w-32 h-28">
            <img 
              src="/api/placeholder/128/112" 
              alt="Saffron in wooden bowl" 
              className="object-contain"
            />
          </div>
          <div className="w-32 h-28">
            <img 
              src="/api/placeholder/128/112" 
              alt="Mixed spices in wooden bowl" 
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Right spice bowl - basil/herbs */}
        <div className="w-1/4 flex justify-end">
          <div className="w-48 h-40">
            <img 
              src="/api/placeholder/192/160" 
              alt="Fresh basil in wooden bowl" 
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortivaHeader;