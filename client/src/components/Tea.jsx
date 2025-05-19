import React, { useState } from 'react';
import { Leaf, Heart, Coffee, Droplets } from 'lucide-react';

const Tea = () => {
    const [activeTeaId, setActiveTeaId] = useState(null);

    return (
        <div className="py-16 bg-gradient-to-b from-amber-50 to-emerald-50 overflow-hidden">
            {/* Tea Section Header */}
            <div className="container mx-auto px-4 mb-12">
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="relative">
                        <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4 relative z-10">
                            Our Tea Collection
                        </h2>
                        <div className="absolute -bottom-2 left-0 w-full h-3 bg-emerald-200 opacity-60 rounded-full transform -rotate-1"></div>
                    </div>
                    <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
                        Experience the finest tea varieties sourced from legendary tea gardens around the world.
                        Each leaf is carefully selected to ensure exceptional quality and flavor.
                    </p>
                </div>
            </div>

            {/* Component 1: Left Image, Right Content */}
            <div className="container mx-auto px-4 mb-16">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        {/* Left side - Image */}
                        <div className="md:w-1/2 bg-emerald-100 relative h-64 md:h-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-transparent"></div>
                            <img
                                src="src/assets/images/tea"
                                alt="Tea Ceremony"
                                className="w-full h-[520px] object-cover"
                                onError={(e) => {
                                    e.target.src = "src/assets/images/teaLeaf.jpg";
                                }}
                            />
                            <div className="absolute bottom-4 left-4 bg-emerald-800/80 text-white px-3 py-1 rounded-lg text-sm">
                                Premium Indian Tea
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="md:w-1/2 p-8 md:p-12">
                            <h3 className="text-2xl font-bold text-emerald-800 mb-4">Camellia Sinensis Tea Leaf</h3>
                            <div className="w-16 h-1 bg-emerald-600 mb-6"></div>
                            <h4 className="font-semibold text-emerald-700 mb-3">Premium Indian Tea for Global Taste</h4>
                            <p className="text-emerald-700 mb-6">
                                Discover the rich heritage and natural purity of Indias finest tea with our 
                                <span className="font-medium"> Camellia Sinensis Tea Leaves</span>, carefully sourced 
                                from the lush tea gardens of Assam, Darjeeling, and the Nilgiris. These tea leaves 
                                form the base of all traditional teas black, green, white, and oolong offering 
                                a versatile and refined flavor profile cherished around the world.
                            </p>

                            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 mb-6">
                                <div className="flex items-center mb-2">
                                    <Leaf size={18} className="text-emerald-600 mr-2" />
                                    <p className="text-emerald-800 font-medium">Origin Regions:</p>
                                </div>
                                <div className="flex flex-wrap gap-2 ml-6">
                                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">Assam</span>
                                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">Darjeeling</span>
                                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">Nilgiris</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Component 2: Left Content, Right Image */}
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex flex-row-reverse">
                        {/* Right side - Image */}
                        <div className="md:w-1/2 bg-amber-100 relative h-64 md:h-auto">
                            <div className="absolute inset-0 bg-gradient-to-l from-amber-600/20 to-transparent"></div>
                            <img
                                src="src/assets/images/4.jpg"
                                alt="Tea Brewing"
                                className="w-full h-[520px] object-cover"
                                onError={(e) => {
                                    e.target.src = "src/assets/images/tea-placeholder.jpg";
                                }}
                            />
                            <div className="absolute bottom-4 right-4 bg-amber-800/80 text-white px-3 py-1 rounded-lg text-sm">
                                Quality Guaranteed
                            </div>
                        </div>

                        {/* Left side - Content */}
                        <div className="md:w-1/2 p-8 md:p-12">
                            <h3 className="text-2xl font-bold text-amber-800 mb-4">Why Choose Our Camellia Sinensis Tea Leaves?</h3>
                            <div className="w-16 h-1 bg-amber-600 mb-6"></div>
                            <p className="text-amber-700 mb-6">
                                Our premium tea leaves are crafted with care to deliver an exceptional tea experience
                                that stands apart from ordinary varieties. Each leaf carries the essence of Indias
                                finest tea-growing regions and centuries of tea cultivation tradition.
                            </p>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-start">
                                    <div className="bg-amber-100 p-2 rounded-full mr-3">
                                        <Leaf size={18} className="text-amber-600" />
                                    </div>
                                    <div>
                                        <p className="text-amber-700">Handpicked from high-altitude tea gardens</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-amber-100 p-2 rounded-full mr-3">
                                        <Heart size={18} className="text-amber-600" />
                                    </div>
                                    <div>
                                        <p className="text-amber-700">Naturally rich in antioxidants and essential nutrients</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-amber-100 p-2 rounded-full mr-3">
                                        <Coffee size={18} className="text-amber-600" />
                                    </div>
                                    <div>
                                        <p className="text-amber-700">Hygienically processed and carefully packed to preserve freshness</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-amber-100 p-2 rounded-full mr-3">
                                        <Droplets size={18} className="text-amber-600" />
                                    </div>
                                    <div>
                                        <p className="text-amber-700">Compliant with international food safety and quality standards</p>
                                    </div>
                                </div>
                            </div>
                            
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tea;