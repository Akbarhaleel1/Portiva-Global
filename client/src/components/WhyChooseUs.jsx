import { Anchor, FileCheck, Shield } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      title: "Global Shipping Illustration 1",
      description: "With strong logistics partnerships in key countries, we ensure your spices, coffee, and tea products are delivered fresh, fast, and securely. Our global network means smooth customs, reliable timelines, and zero hassle.",
      image: "/images/global images.jpg",
      icon: <Anchor className="h-6 w-6 text-teal-600" />
    },
    {
      number: "02",
      title: "Global Shipping Illustration 2",
      description: "From airtight packaging to precise documentation and customs clearance, we handle the full export journey. Our streamlined system ensures your premium products reach global markets without delays.",
      image: "/images/exporting3.jpg",
      icon: <FileCheck className="h-6 w-6 text-teal-600" />
    },
    {
      number: "03",
      title: "Global Shipping Illustration 3",
      description: "We uphold the highest quality standards. Every shipment of spices, coffee, and tea passes strict checks and adheres to international regulations — protecting your brand and satisfying global buyers.",
      image: "/images/hero section 2.jpg",
      icon: <Shield className="h-6 w-6 text-teal-600" />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Why choose us?</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive solutions tailored to your business needs for seamless international expansion
        </p>
      </div>
      
      <div className="flex flex-col space-y-6">
        {reasons.map((reason, index) => (
          <div 
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Fixed aspect ratio container for images */}
            <div className="w-full md:w-1/3 lg:w-1/4 relative h-48 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/30" />
              <img 
                src={reason.image} 
                alt={`Global shipping illustration ${index + 1}`}
                className="absolute h-full w-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md">
                {reason.icon}
              </div>
            </div>
            
            <div className="flex-1 p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                <div className="flex items-center justify-center bg-teal-50 text-teal-700 font-bold text-xl h-10 w-10 rounded-full">
                  {reason.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{reason.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}