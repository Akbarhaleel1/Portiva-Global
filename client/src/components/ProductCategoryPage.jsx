import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { categoriesData } from '../data/categories';
import { ArrowLeft } from 'lucide-react';

// Dairy products assets imports
import milkCollectionImg from '../assets/milkcollection.jpg';
import organicDairyImg from '../assets/organic dairy collection.jpg';
import cheeseImg from '../assets/cheeseimg.jpg';
import bulkDairyImg from '../assets/bilkmilksupplu.jpg';
import creamButterImg from '../assets/Creamandbutter.jpg';
import milkPowderImg from '../assets/milkpowderimg.jpg';
import dairyCvrImg from '../assets/Dairycvr.png';

// Fats and Oils assets imports
import refinedOilImg from '../assets/refinedoil.jpg';
import margarineImg from '../assets/margarine.jpg';
import butterBlendImg from '../assets/butterblend.jpg';
import emulsionsImg from '../assets/emulusions.jpg';
import bakeryFatsImg from '../assets/bakery fats.jpg';
import bulkOilImg from '../assets/bulkoil.jpg';

// Fruits and Vegetables assets imports
import freshProduceImg from '../assets/freshproduce.jpg';
import frozenFoodImg from '../assets/frozen.jpg';
import driedFruitImg from '../assets/Dried.jpg';
import processedVeggiesImg from '../assets/Processedveggis.jpg';
import premiumNutsImg from '../assets/premiumnuts.jpg';
import bulkAgriImg from '../assets/bulkagri.jpg';

// Cereals and Products assets imports
import floursImg from '../assets/flours.jpg';
import artisanProductsImg from '../assets/artisanproducts.jpg';
import pastaImg from '../assets/pasta.jpg';
import readyToEatImg from '../assets/readytoeat.jpg';
import wholeGrainImg from '../assets/wholegrain.jpg';
import bulkGrainsImg from '../assets/blukgrains.jpg';
import cerealsCvrImg from '../assets/Ceralscvr img.jpg';

// Bakery Products assets imports
import freshBreadImg from '../assets/freshbread.jpg';
import premiumBiscuitImg from '../assets/Premiumbiscut.jpg';
import artisanCakesImg from '../assets/artisan cakes.jpg';
import cookiesImg from '../assets/cookies.jpg';
import frozenBakeryImg from '../assets/FrozenBakery.jpg';
import bulkBakeryImg from '../assets/bulkbakery.jpg';
import bakeryCvrImg from '../assets/bakerycvr.jpg';

// Meat Products assets imports
import poultrySupplyImg from '../assets/poultry supply.jpg';
import frozenMeatImg from '../assets/frozen-meat.jpg';
import premiumSeafoodImg from '../assets/premiumseafood.jpg';
import processedMeatImg from '../assets/Processed-meat.jpg';
import coldChainImg from '../assets/cold chain.jpg';
import bulkMeatImg from '../assets/bulkmeat.png';

// Fish Products assets imports
import freshFinfishImg from '../assets/fresh_finfish.png';
import shellfishCollectionImg from '../assets/shellfish_collection.png';
import premiumCrustaceansImg from '../assets/premium_crustaceans.png';
import frozenSeafoodImg from '../assets/frozen_seafood.png';
import marinePackagingImg from '../assets/marine_packaging.png';
import bulkSeafoodImg from '../assets/bulk_seafood.png';

// Eggs and Egg Products assets imports
import freshEggsImg from '../assets/fresh_eggs.png';
import processedEggsImg from '../assets/processed_eggs.png';
import nutritionalEggsImg from '../assets/nutritional_eggs.png';
import eggColdStorageImg from '../assets/egg_cold_storage.png';
import eggPackagingImg from '../assets/egg_packaging.png';
import bulkEggsImg from '../assets/bulk_eggs.png';

// Sweeteners assets imports
import naturalHoneyImg from '../assets/natural_honey.png';
import sugarSubstitutesImg from '../assets/sugar_substitutes.png';
import organicSweetenersImg from '../assets/organic_sweeteners.png';
import industrySweetenersImg from '../assets/industry_sweeteners.png';
import sweetenerPackagingImg from '../assets/sweetener_packaging.png';

// Millets assets imports
import milletCoverImg from '../assets/millet_cover.png';
import milletAncientImg from '../assets/millet_ancient.png';
import milletOrganicImg from '../assets/millet_organic.png';
import milletHealthyImg from '../assets/millet_healthy.png';
import milletRetailImg from '../assets/millet_retail.png';
import milletNutritionalImg from '../assets/millet_nutritional.png';
import milletBulkImg from '../assets/millet_bulk.png';

// Coconut products assets imports
import coconutCoverImg from '../assets/coconut_cover.png';
import coconutFreshImg from '../assets/coconut_fresh.png';
import coconutDesiccatedImg from '../assets/coconut_desiccated.png';
import coconutIngredientsImg from '../assets/coconut_ingredients.png';
import coconutOrganicImg from '../assets/coconut_organic.png';
import coconutRetailImg from '../assets/coconut_retail.png';
import coconutBulkImg from '../assets/coconut_bulk.png';

// Coconut oil assets imports
import oilCoverImg from '../assets/oil_cover.png';
import oilColdPressedImg from '../assets/oil_coldpressed.png';
import oilRefinedImg from '../assets/oil_refined.png';
import oilOrganicImg from '../assets/oil_organic.png';
import oilWellnessImg from '../assets/oil_wellness.png';
import oilRetailImg from '../assets/oil_retail.png';
import oilBulkImg from '../assets/oil_bulk.png';

// Agro products assets imports
import agroCoverImg from '../assets/agro_cover.png';
import agroCommodityImg from '../assets/agro_commodity.png';
import agroFreshImg from '../assets/agro_fresh.png';
import agroProcessedImg from '../assets/agro_processed.png';
import agroSustainableImg from '../assets/agro_sustainable.png';
import agroPackagingImg from '../assets/agro_packaging.png';
import agroBulkImg from '../assets/agro_bulk.png';










const ProductCategoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [logoHide, setLogoHide] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  useEffect(() => {
    if (slug === 'coffee-tea') {
      navigate('/coffee-tea', { replace: true });
    } else if (slug === 'spices-and-sauces') {
      navigate('/spices', { replace: true });
    }
  }, [slug, navigate]);

  const handleLogoToggle = () => {
    setLogoHide(!logoHide);
  };

  const onChangeIsProductsDropdownOpen = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  // Find the matching category data based on the slug
  const category = categoriesData.find(cat => cat.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Category Not Found</h1>
        <Link to="/" className="text-teal-600 hover:text-teal-800 flex items-center">
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  const customCategoryContent = {
    'dairy-products': {
      title: 'DAIRY PRODUCTS',
      description: 'Premium dairy exports including fresh milk, cream, cheese, butter, yogurt, and milk powders. Carefully sourced from certified farms with strict international quality standards and cold-chain logistics for global delivery.',
      ctaText: 'Request Export Catalogue',
      coverImage: dairyCvrImg,
      products: [
        {
          id: 1,
          name: "Premium Milk Collection",
          description: "Fresh farm-sourced milk products processed under international hygiene standards for global export markets.",
          image: milkCollectionImg
        },
        {
          id: 2,
          name: "Organic Dairy Selection",
          description: "Naturally produced dairy goods free from harmful additives and crafted for premium consumers worldwide.",
          image: organicDairyImg
        },
        {
          id: 3,
          name: "Artisan Cheese Products",
          description: "Handcrafted cheese varieties with rich texture and authentic flavor profiles for luxury food distributors.",
          image: cheeseImg
        },
        {
          id: 4,
          name: "Bulk Dairy Supply",
          description: "Large-scale export packaging solutions designed for hotels, supermarkets, and wholesale distribution.",
          image: bulkDairyImg
        },
        {
          id: 5,
          name: "Cream & Butter Range",
          description: "High-quality cream and butter products with superior freshness and controlled cold storage handling.",
          image: creamButterImg
        },
        {
          id: 6,
          name: "Milk Powder Exports",
          description: "Premium export-grade milk powders optimized for long shelf life and international shipment standards.",
          image: milkPowderImg
        }
      ]
    },
    'fats-and-oils': {
      title: 'FATS & OILS',
      description: 'Premium-quality fats and oils including margarine, butter blends, refined oils, and specialty emulsions. Processed with international food safety standards for consistent quality and reliable global export supply.',
      ctaText: 'Request Export Catalogue',
      products: [
        {
          id: 1,
          name: "Refined Cooking Oils",
          description: "High-purity edible oils processed for superior taste, stability, and international food-grade compliance.",
          image: refinedOilImg
        },
        {
          id: 2,
          name: "Premium Margarine Range",
          description: "Smooth-textured margarine products crafted for bakery, retail, and commercial food applications.",
          image: margarineImg
        },
        {
          id: 3,
          name: "Butter Blend Solutions",
          description: "Rich and creamy butter mixtures designed for food manufacturers and premium culinary use.",
          image: butterBlendImg
        },
        {
          id: 4,
          name: "Industrial Fat Emulsions",
          description: "Specialized fat emulsions optimized for large-scale food production and export distribution.",
          image: emulsionsImg
        },
        {
          id: 5,
          name: "Bakery Fat Products",
          description: "Consistent-performance fats developed specifically for confectionery and professional baking industries.",
          image: bakeryFatsImg
        },
        {
          id: 6,
          name: "Bulk Export Oil Supply",
          description: "Large-volume oil packaging solutions with secure logistics and long-distance shipment reliability.",
          image: bulkOilImg
        }
      ]
    },
    'fruits-and-vegetables': {
      title: 'FRUITS & VEGETABLES',
      description: 'Fresh, frozen, dried, and processed fruits, vegetables, and nuts sourced from trusted farms and export-certified suppliers. Carefully packed to preserve freshness, nutrition, and premium international quality standards.',
      ctaText: 'Request Export Catalogue',
      products: [
        {
          id: 1,
          name: "Fresh Farm Produce",
          description: "Carefully harvested fruits and vegetables delivered with maximum freshness and export-grade quality assurance.",
          image: freshProduceImg
        },
        {
          id: 2,
          name: "Frozen Food Selection",
          description: "Premium frozen fruits and vegetables preserved with advanced cold-chain processing for global distribution.",
          image: frozenFoodImg
        },
        {
          id: 3,
          name: "Dried Fruit Collection",
          description: "Naturally dried fruits and nuts prepared for long shelf life while maintaining rich flavor and nutrition.",
          image: driedFruitImg
        },
        {
          id: 4,
          name: "Processed Vegetable Products",
          description: "Cleaned, cut, and packaged vegetable solutions optimized for retail, horeca, and food manufacturing sectors.",
          image: processedVeggiesImg
        },
        {
          id: 5,
          name: "Premium Nut Exports",
          description: "High-quality almonds, cashews, pistachios, and mixed nuts sourced for international wholesale markets.",
          image: premiumNutsImg
        },
        {
          id: 6,
          name: "Bulk Agricultural Supply",
          description: "Large-scale packaging and export logistics designed for supermarkets, distributors, and commercial buyers.",
          image: bulkAgriImg
        }
      ]
    },
    'cereals-and-products': {
      title: 'CEREALS & PRODUCTS',
      description: 'Premium cereals and grain-based products including flour, pasta, bakery items, and ready-to-eat cereals. Manufactured with strict quality control and export-ready packaging for international food markets.',
      ctaText: 'Request Export Catalogue',
      coverImage: cerealsCvrImg,
      products: [
        {
          id: 1,
          name: "Premium Flour Range",
          description: "Finely processed wheat and grain flours designed for bakery, industrial, and retail food applications.",
          image: floursImg
        },
        {
          id: 2,
          name: "Artisan Bakery Products",
          description: "Fresh and packaged bakery selections crafted with premium ingredients and international quality standards.",
          image: artisanProductsImg
        },
        {
          id: 3,
          name: "Pasta & Grain Products",
          description: "High-quality pasta varieties and grain-based foods optimized for global retail and horeca distribution.",
          image: pastaImg
        },
        {
          id: 4,
          name: "Ready-to-Eat Cereals",
          description: "Nutritious breakfast cereals developed for convenience, taste, and long shelf-life export supply.",
          image: readyToEatImg
        },
        {
          id: 5,
          name: "Whole Grain Collection",
          description: "Healthy whole-grain products sourced from trusted agricultural networks for premium food markets.",
          image: wholeGrainImg
        },
        {
          id: 6,
          name: "Bulk Cereal Exports",
          description: "Large-scale cereal and grain packaging solutions designed for wholesalers and international distributors.",
          image: bulkGrainsImg
        }
      ]
    },
    'bakery-products': {
      title: 'BAKERY PRODUCTS',
      description: 'Premium bakery products including bread, biscuits, cakes, and cookies crafted with high-quality ingredients and international food safety standards. Carefully packaged for freshness, taste, and reliable global export delivery.',
      ctaText: 'Request Export Catalogue',
      coverImage: bakeryCvrImg,
      products: [
        {
          id: 1,
          name: "Fresh Bread Collection",
          description: "Soft and freshly baked bread varieties prepared for retail, hospitality, and international food distribution.",
          image: freshBreadImg
        },
        {
          id: 2,
          name: "Premium Biscuit Range",
          description: "Crispy and flavorful biscuits crafted with premium ingredients for everyday and luxury snack markets.",
          image: premiumBiscuitImg
        },
        {
          id: 3,
          name: "Artisan Cake Products",
          description: "Delicious cake selections designed with rich textures and premium-quality baking standards.",
          image: artisanCakesImg
        },
        {
          id: 4,
          name: "Luxury Cookie Selection",
          description: "Handcrafted cookies with balanced sweetness and premium flavors tailored for global consumers.",
          image: cookiesImg
        },
        {
          id: 5,
          name: "Frozen Bakery Supply",
          description: "Ready-to-serve frozen bakery products optimized for freshness retention and export logistics.",
          image: frozenBakeryImg
        },
        {
          id: 6,
          name: "Bulk Bakery Exports",
          description: "Large-scale bakery packaging solutions designed for supermarkets, wholesalers, and horeca supply chains.",
          image: bulkBakeryImg
        }
      ]
    },
    'meat-products': {
      title: 'MEAT PRODUCTS',
      description: 'Premium fresh, frozen, and processed meat products including poultry, seafood, and specialty meat selections. Hygienically processed with strict international quality and cold-chain export standards.',
      ctaText: 'Request Export Catalogue',
      products: [
        {
          id: 1,
          name: "Fresh Poultry Supply",
          description: "High-quality poultry products sourced and processed under certified hygienic conditions.",
          image: poultrySupplyImg
        },
        {
          id: 2,
          name: "Frozen Meat Selection",
          description: "Carefully preserved frozen meat products designed for long-distance export logistics.",
          image: frozenMeatImg
        },
        {
          id: 3,
          name: "Premium Seafood Range",
          description: "Fresh and processed seafood products prepared for international retail and horeca markets.",
          image: premiumSeafoodImg
        },
        {
          id: 4,
          name: "Processed Meat Products",
          description: "Ready-to-cook meat solutions optimized for quality, flavor, and convenience.",
          image: processedMeatImg
        },
        {
          id: 5,
          name: "Cold Chain Export Supply",
          description: "Temperature-controlled packaging and shipment systems ensuring maximum freshness.",
          image: coldChainImg
        },
        {
          id: 6,
          name: "Bulk Meat Distribution",
          description: "Large-scale export packaging solutions for wholesalers and global distributors.",
          image: bulkMeatImg
        }
      ]
    },
    'fish-products': {
      title: 'FISH PRODUCTS',
      description: 'Premium finfish, shellfish, molluscs, and crustaceans sourced from trusted fisheries and processed with international seafood export standards.',
      ctaText: 'Request Export Catalogue',
      products: [
        {
          id: 1,
          name: "Fresh Finfish Selection",
          description: "Export-quality finfish processed for freshness, texture, and premium seafood markets.",
          image: freshFinfishImg
        },
        {
          id: 2,
          name: "Shellfish Collection",
          description: "Carefully handled shellfish products prepared with strict hygiene and quality standards.",
          image: shellfishCollectionImg
        },
        {
          id: 3,
          name: "Premium Crustaceans",
          description: "High-grade prawns, crabs, and lobster products optimized for global seafood supply chains.",
          image: premiumCrustaceansImg
        },
        {
          id: 4,
          name: "Frozen Seafood Range",
          description: "Advanced frozen seafood processing for long shelf life and international shipping.",
          image: frozenSeafoodImg
        },
        {
          id: 5,
          name: "Marine Export Packaging",
          description: "Specialized seafood packaging solutions maintaining freshness during transit.",
          image: marinePackagingImg
        },
        {
          id: 6,
          name: "Bulk Seafood Supply",
          description: "Large-scale seafood export logistics for distributors and hospitality industries.",
          image: bulkSeafoodImg
        }
      ]
    },
    'eggs-and-egg-products': {
      title: 'EGGS & EGG PRODUCTS',
      description: 'Fresh and processed egg products sourced from certified farms with advanced hygiene standards and reliable export packaging solutions.',
      ctaText: 'Request Export Catalogue',
      products: [
        {
          id: 1,
          name: "Farm Fresh Eggs",
          description: "Premium quality eggs supplied with freshness assurance and export-grade handling.",
          image: freshEggsImg
        },
        {
          id: 2,
          name: "Processed Egg Products",
          description: "Liquid, powdered, and processed egg solutions for food manufacturing industries.",
          image: processedEggsImg
        },
        {
          id: 3,
          name: "Nutritional Egg Supply",
          description: "Protein-rich egg products optimized for health-conscious food markets.",
          image: nutritionalEggsImg
        },
        {
          id: 4,
          name: "Cold Storage Handling",
          description: "Temperature-controlled logistics ensuring safe and fresh international delivery.",
          image: eggColdStorageImg
        },
        {
          id: 5,
          name: "Retail Egg Packaging",
          description: "Secure and premium packaging designed for supermarkets and food retailers.",
          image: eggPackagingImg
        },
        {
          id: 6,
          name: "Bulk Egg Exports",
          description: "Large-scale export supply solutions for horeca and wholesale markets.",
          image: bulkEggsImg
        }
      ]
    },
    'sweeteners': {
      title: 'SWEETENERS',
      description: 'Premium sweetening solutions including honey, natural sweeteners, and sugar substitutes processed for global food and beverage industries.',
      ctaText: 'Request Export Catalogue',
      coverImage: naturalHoneyImg,
      products: [
        {
          id: 1,
          name: "Natural Honey Products",
          description: "Pure honey varieties sourced from trusted producers with premium export quality.",
          image: naturalHoneyImg
        },
        {
          id: 2,
          name: "Sugar Substitute Range",
          description: "Advanced low-calorie sweeteners developed for modern health-conscious markets.",
          image: sugarSubstitutesImg
        },
        {
          id: 3,
          name: "Organic Sweetening Solutions",
          description: "Naturally processed sweeteners free from artificial additives and impurities.",
          image: organicSweetenersImg
        },
        {
          id: 4,
          name: "Food Industry Applications",
          description: "Sweetening products optimized for bakery, beverages, and processed foods.",
          image: industrySweetenersImg
        },
        {
          id: 5,
          name: "Retail Packaging Supply",
          description: "Elegant export-ready packaging for supermarkets and premium retailers.",
          image: sweetenerPackagingImg
        },
        {
          id: 6,
          name: "Bulk Sweetener Exports",
          description: "Large-scale sweetener supply solutions for international distribution.",
          image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    'spices-and-sauces': {
      title: 'SPICES & SAUCES',
      description: 'Premium condiments, spices, salts, sauces, and soup mixes crafted with authentic flavors and international export quality standards.',
      ctaText: 'Request Export Catalogue',
      coverImage: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
      products: [
        {
          id: 1,
          name: "Authentic Spice Collection",
          description: "Rich and aromatic spices sourced from trusted agricultural regions.",
          image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          name: "Premium Sauce Range",
          description: "Flavorful sauces crafted for retail, horeca, and food manufacturing industries.",
          image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          name: "Condiment Products",
          description: "Mustards, seasonings, and specialty condiments designed for global food markets.",
          image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 4,
          name: "Soup Mix Solutions",
          description: "Ready-to-use soup and seasoning mixes with premium ingredient quality.",
          image: "https://images.unsplash.com/photo-1547592165-e1d17fed6006?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 5,
          name: "Export Packaging Supply",
          description: "Durable and attractive packaging optimized for international distribution.",
          image: "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 6,
          name: "Bulk Spice Exports",
          description: "Large-scale spice and sauce supply for wholesalers and global retailers.",
          image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    'nutritional-foods': {
      title: 'NUTRITIONAL FOODS',
      description: 'High-quality baby foods, dietary supplements, and therapeutic nutritional products developed with advanced food safety and healthcare standards.',
      ctaText: 'Request Export Catalogue',
      coverImage: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800",
      products: [
        {
          id: 1,
          name: "Premium Baby Foods",
          description: "Nutritious baby food products crafted with safe and balanced ingredients.",
          image: "https://images.unsplash.com/photo-1596263576925-d90d63691097?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          name: "Dietary Supplement Range",
          description: "Health-focused nutritional supplements optimized for modern wellness markets.",
          image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          name: "Therapeutic Nutrition Products",
          description: "Specialized nutritional solutions developed for healthcare and recovery support.",
          image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 4,
          name: "Protein & Wellness Supply",
          description: "Advanced nutrition products designed for active and health-conscious consumers.",
          image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 5,
          name: "Retail Health Packaging",
          description: "Modern export-ready packaging tailored for pharmacies and supermarkets.",
          image: "https://images.unsplash.com/photo-1607619056574-7b8f304b3b8a?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 6,
          name: "Bulk Nutrition Exports",
          description: "Large-scale nutritional product supply for international distributors.",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    'beverages': {
      title: 'BEVERAGES',
      description: 'Premium beverages including tea, coffee, fruit juices, soft drinks, and specialty drink products crafted for global markets.',
      ctaText: 'Request Export Catalogue',
      coverImage: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=800",
      products: [
        {
          id: 1,
          name: "Premium Tea Selection",
          description: "Carefully sourced tea products with authentic aroma and international export quality.",
          image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          name: "Specialty Coffee Range",
          description: "Rich coffee blends processed for premium retail and hospitality industries.",
          image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          name: "Fruit Juice Products",
          description: "Refreshing fruit-based beverages prepared with natural ingredients and modern processing.",
          image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 4,
          name: "Soft Drink Solutions",
          description: "Carbonated and flavored beverages developed for global consumer markets.",
          image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 5,
          name: "Beverage Export Packaging",
          description: "Durable and attractive packaging for retail and large-scale beverage distribution.",
          image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 6,
          name: "Bulk Beverage Supply",
          description: "Large-volume beverage export solutions for international wholesalers.",
          image: "https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    'ready-to-eat-savouries': {
      title: 'READY-TO-EAT SAVOURIES',
      description: 'Traditional and modern snack products including bhujia, papads, namkeen mixes, and ready-to-eat savory foods prepared for international markets.',
      ctaText: 'Request Export Catalogue',
      coverImage: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=800",
      products: [
        {
          id: 1,
          name: "Traditional Snack Collection",
          description: "Authentic savory snacks crafted with premium ingredients and rich flavors.",
          image: artisanProductsImg
        },
        {
          id: 2,
          name: "Bhujia & Namkeen Range",
          description: "Crispy and flavorful namkeen products optimized for global snack markets.",
          image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          name: "Premium Papad Products",
          description: "Traditional papads processed with export-grade quality and freshness standards.",
          image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 4,
          name: "Ready Snack Solutions",
          description: "Convenient ready-to-eat products tailored for retail and horeca industries.",
          image: premiumNutsImg
        },
        {
          id: 5,
          name: "Modern Snack Packaging",
          description: "Stylish export packaging ensuring freshness and shelf-life stability."
        },
        {
          id: 6,
          name: "Bulk Savoury Exports",
          description: "Large-scale snack export solutions for wholesalers and retailers worldwide.",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    'millets': {
      title: 'MILLETS',
      description: 'Premium nutritional millets and ancient grains sourced from trusted farms and processed for health-focused international food markets.',
      ctaText: 'Request Export Catalogue',
      coverImage: milletCoverImg,
      products: [
        {
          id: 1,
          name: "Ancient Grain Collection",
          description: "High-quality millets and grains selected for nutrition and premium food applications.",
          image: milletAncientImg
        },
        {
          id: 2,
          name: "Organic Millet Products",
          description: "Naturally cultivated millet products processed with modern food safety standards.",
          image: milletOrganicImg
        },
        {
          id: 3,
          name: "Healthy Grain Solutions",
          description: "Fiber-rich and protein-packed grain products tailored for wellness markets.",
          image: milletHealthyImg
        },
        {
          id: 4,
          name: "Retail Millet Packaging",
          description: "Modern export-ready grain packaging designed for supermarkets and retail chains.",
          image: milletRetailImg
        },
        {
          id: 5,
          name: "Nutritional Food Supply",
          description: "Millet products optimized for healthy diets and functional food industries.",
          image: milletNutritionalImg
        },
        {
          id: 6,
          name: "Bulk Millet Exports",
          description: "Large-scale grain export logistics for wholesalers and international distributors.",
          image: milletBulkImg
        }
      ]
    },
    'coconut-products': {
      title: 'COCONUT PRODUCTS',
      description: 'Premium coconut products including fresh coconuts, desiccated coconut, and allied coconut-based food solutions for international markets.',
      ctaText: 'Request Export Catalogue',
      coverImage: coconutCoverImg,
      products: [
        {
          id: 1,
          name: "Fresh Coconut Supply",
          description: "Naturally harvested coconuts processed for freshness and export-grade quality.",
          image: coconutFreshImg
        },
        {
          id: 2,
          name: "Desiccated Coconut Range",
          description: "Premium dried coconut products optimized for bakery and food manufacturing industries.",
          image: coconutDesiccatedImg
        },
        {
          id: 3,
          name: "Coconut Food Ingredients",
          description: "Versatile coconut-based ingredients tailored for modern food applications.",
          image: coconutIngredientsImg
        },
        {
          id: 4,
          name: "Organic Coconut Products",
          description: "Naturally processed coconut selections free from harmful additives.",
          image: coconutOrganicImg
        },
        {
          id: 5,
          name: "Retail Coconut Packaging",
          description: "Modern packaging solutions preserving freshness and product quality.",
          image: coconutRetailImg
        },
        {
          id: 6,
          name: "Bulk Coconut Exports",
          description: "Large-scale coconut export supply for global distributors and wholesalers.",
          image: coconutBulkImg
        }
      ]
    },
    'coconut-oil': {
      title: 'COCONUT OIL',
      description: 'Pure cold-pressed and refined coconut oils processed with advanced extraction methods and international export quality standards.',
      ctaText: 'Request Export Catalogue',
      coverImage: oilCoverImg,
      products: [
        {
          id: 1,
          name: "Cold-Pressed Coconut Oil",
          description: "Naturally extracted coconut oil preserving aroma, purity, and nutritional value.",
          image: oilColdPressedImg
        },
        {
          id: 2,
          name: "Refined Oil Products",
          description: "Premium refined coconut oils optimized for food and wellness industries.",
          image: oilRefinedImg
        },
        {
          id: 3,
          name: "Organic Oil Selection",
          description: "High-quality organic coconut oils crafted for health-conscious consumers.",
          image: oilOrganicImg
        },
        {
          id: 4,
          name: "Wellness & Beauty Applications",
          description: "Versatile coconut oil products designed for culinary and cosmetic use.",
          image: oilWellnessImg
        },
        {
          id: 5,
          name: "Premium Oil Packaging",
          description: "Elegant export-ready packaging maintaining freshness and product integrity.",
          image: oilRetailImg
        },
        {
          id: 6,
          name: "Bulk Oil Export Supply",
          description: "Large-scale coconut oil distribution solutions for global markets.",
          image: oilBulkImg
        }
      ]
    },
    'agro-products': {
      title: 'AGRO PRODUCTS',
      description: 'High-quality agricultural commodities and agro products sourced from trusted farming networks and processed for reliable global export supply.',
      ctaText: 'Request Export Catalogue',
      coverImage: agroCoverImg,
      products: [
        {
          id: 1,
          name: "Agricultural Commodity Supply",
          description: "Premium farm-sourced agro commodities prepared for international trade standards.",
          image: agroCommodityImg
        },
        {
          id: 2,
          name: "Fresh Farm Produce",
          description: "Carefully selected agricultural products maintaining freshness and consistent quality.",
          image: agroFreshImg
        },
        {
          id: 3,
          name: "Processed Agro Solutions",
          description: "Value-added agricultural products optimized for retail and industrial markets.",
          image: agroProcessedImg
        },
        {
          id: 4,
          name: "Sustainable Farming Network",
          description: "Products sourced from trusted farms focused on quality and sustainability.",
          image: agroSustainableImg
        },
        {
          id: 5,
          name: "Export Packaging Systems",
          description: "Secure and efficient packaging designed for long-distance agricultural logistics.",
          image: agroPackagingImg
        },
        {
          id: 6,
          name: "Bulk Agro Exports",
          description: "Large-scale agro product supply for wholesalers and international distributors.",
          image: agroBulkImg
        }
      ]
    }
  };

  const customContent = customCategoryContent[category.slug];

  const coverImage = (customContent && customContent.coverImage) ? customContent.coverImage : category.image;

  const mainTitle = customContent ? customContent.title : category.title;
  
  const mainDescription = customContent 
    ? customContent.description 
    : `${category.description} Sourced directly from our premium networks, ensuring high-end quality compliance, standard safety protocols, and robust logistics delivery globally.`;

  const ctaText = customContent ? customContent.ctaText : 'Request a Custom Quote';

  // Generate 6 premium mock sub-products dynamically based on the category
  const categoryProducts = customContent 
    ? customContent.products.map(p => ({ ...p, image: p.image || coverImage }))
    : [
        {
          id: 1,
          name: `Premium ${category.title} Grade-A`,
          description: `Premium selection certified under strict international quality guidelines.`,
          image: category.image
        },
        {
          id: 2,
          name: `Organic ${category.title}`,
          description: `100% natural, pesticide-free, sustainably cultivated under soil compliance.`,
          image: category.image
        },
        {
          id: 3,
          name: `Artisanal Hand-Picked ${category.title}`,
          description: `Hand-selected batch refined specifically for commercial requirements.`,
          image: category.image
        },
        {
          id: 4,
          name: `Bulk Export ${category.title}`,
          description: `Wholesale packaging option optimised for safe international cargo shipping.`,
          image: category.image
        },
        {
          id: 5,
          name: `Select Reserve ${category.title}`,
          description: `A gourmet grade product line targeted at high-end consumer demands.`,
          image: category.image
        },
        {
          id: 6,
          name: `Direct Source ${category.title}`,
          description: `Direct farm-to-warehouse supply ensuring trace verification and freshness.`,
          image: category.image
        }
      ];

  return (
    <div className="bg-white min-h-screen relative flex flex-col text-slate-800 font-sans">
      {/* Background image overlay with radial blur */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 via-white/95 to-slate-50/90 z-10"></div>
        <img
          src={coverImage}
          alt={category.title}
          className="w-full h-full object-cover opacity-10 blur-md transform scale-105"
        />
      </div>

      {/* Compact Navbar */}
      <div className="relative z-50 h-16 flex-shrink-0">
        <Navbar
          isProductsDropdownOpen={isProductsDropdownOpen}
          onChangeIsProductsDropdownOpen={onChangeIsProductsDropdownOpen}
          onToggleLogo={handleLogoToggle}
        />
      </div>

      {/* Main presentation workspace */}
      <div className="relative z-20 flex-grow flex items-center justify-center p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full md:h-[calc(100vh-4rem)] md:max-h-[calc(100vh-4rem)]">
        {/* Luxury unified slide card */}
        <div className="bg-slate-100/90 backdrop-blur-2xl rounded-[32px] border border-slate-200/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col md:flex-row w-full h-auto md:h-full max-h-none md:max-h-[660px] lg:max-h-[720px]">

          {/* Left Side: Large Premium Category Banner */}
          <div className="w-full md:w-[42%] h-64 md:h-full relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-10 flex-shrink-0">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={coverImage}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/80"></div>
            </div>

            {/* Top items: Back Button */}
            <div className="relative z-10 flex items-center">
              <Link
                to="/#explore"
                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors bg-slate-950/40 hover:bg-slate-950/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-slate-800/50 hover:scale-105 transform duration-200"
              >
                <ArrowLeft size={14} />
                <span className="font-semibold text-[10px] uppercase tracking-wider">Back to categories</span>
              </Link>
            </div>

            {/* Bottom info: Title, description, request quote button */}
            <div className="relative z-10 mt-auto flex flex-col gap-4 sm:gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tight">
                  {mainTitle}
                </h1>
                <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mt-3"></div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light line-clamp-3 md:line-clamp-4 font-sans">
                {mainDescription}
              </p>

              <Link
                to="/contactUs"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-xs font-bold rounded-xl text-slate-950 bg-teal-400 hover:bg-teal-300 shadow-[0_4px_20px_rgba(20,184,166,0.25)] hover:shadow-[0_4px_25px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-[1.02] transform"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          {/* Right Side: Product Showcase Grid */}
          <div className="w-full md:w-[58%] h-auto md:h-full flex flex-col justify-between p-6 sm:p-8 bg-white relative">
            
            {/* Grid of cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow content-center">
              {categoryProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="group relative bg-slate-50 hover:bg-slate-100/80 rounded-2xl p-3 border border-slate-200/60 shadow-sm hover:shadow-[0_15px_30px_-5px_rgba(20,184,166,0.12)] transition-all duration-300 flex items-center gap-3.5 hover:-translate-y-1 transform cursor-pointer overflow-hidden"
                >
                  {/* Subtle hover glow accent border */}
                  <div className="absolute inset-0 border border-teal-400/0 group-hover:border-teal-400/40 rounded-2xl transition-all duration-300"></div>

                  {/* Thumbnail Image */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 bg-slate-200 relative">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col justify-center flex-grow">
                    <h3 className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-teal-600 transition-colors leading-tight">
                      {prod.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                      {prod.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="relative z-20 mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ProductCategoryPage;
