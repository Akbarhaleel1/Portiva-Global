// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Calendar, Clock, MessageSquare, Share2, ExternalLink, Send, User, Building } from 'lucide-react';
// import Navbar from './Navbar';
// import ProducstListingModal from "./ProducstListingModal";
// import Footer from './Footer';

// const Contact = () => {
//   const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     department: 'general',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState('');

//   const onChangeIsProductsDropdownOpen = () => {
//     setIsProductsDropdownOpen(!isProductsDropdownOpen);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitMessage('Thank you for your inquiry! We will get back to you within 24 hours.');
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         company: '',
//         department: 'general',
//         subject: '',
//         message: ''
//       });
      
//       // Clear success message after 5 seconds
//       setTimeout(() => setSubmitMessage(''), 5000);
//     }, 1500);
//   };
  
//   const departments = [
//     { value: 'general', label: 'General Inquiries' },
//     { value: 'orders', label: 'Orders & Shipping' },
//     { value: 'products', label: 'Product Information' },
//     { value: 'partnerships', label: 'Business Partnerships' },
//     { value: 'support', label: 'Customer Support' }
//   ];
  
//   const officeLocations = [
//     {
//       name: 'Head Office',
//       address: 'Kunninpuram Veedu, Maruthathoor, Chaikottukonam P.O, Neyyattinkara, Thiruvananthapuram, Kerala',
//       hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
//       phone: '+91 99461 80294'
//     }
//   ];
  
//   const faqItems = [
//     {
//       question: 'What are your business hours?',
//       answer: 'Our office is open Monday through Friday from 9:00 AM to 6:00 PM IST. We are closed on weekends and major Indian holidays.'
//     },
//     {
//       question: 'How quickly do you respond to inquiries?',
//       answer: 'We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly.'
//     },
//     {
//       question: 'What products do you export?',
//       answer: 'We specialize in exporting premium Kerala spices (black pepper, cardamom, clove, cinnamon), teas, and coffee beans. Visit our products page for full details.'
//     },
//     {
//       question: 'Do you offer wholesale pricing?',
//       answer: 'Yes, we offer competitive wholesale pricing for bulk orders. Please contact our partnerships department for more information.'
//     }
//   ];
  
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-teal-500/20 to-blue-500/20 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="relative z-50 mt-[-3px] ml-[-32px]">
//         <Navbar
//           isProductsDropdownOpen={isProductsDropdownOpen} 
//           onChangeIsProductsDropdownOpen={onChangeIsProductsDropdownOpen}
//         />
//       </div>
      
//       {/* {isProductsDropdownOpen && (<ProducstListingModal/>)} */}
      
//       <div className="max-w-7xl mx-auto mt-14">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-[50px] font-bold text-gray-800 mb-6">Contact Portiva Global</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             We are here to help with any questions about our premium Kerala products. Reach out through any of our communication channels.
//           </p>
//         </div>
        
//         {/* Quick Connect Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
//             <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4">
//               <Phone className="h-8 w-8 text-white mx-auto" />
//             </div>
//             <div className="p-6 text-center">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
//               <p className="text-gray-600 mb-4">Speak directly with our team</p>
//               <p className="text-lg font-medium text-teal-600">+91 99461 80294</p>
//               <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9AM - 6PM IST</p>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
//             <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4">
//               <Mail className="h-8 w-8 text-white mx-auto" />
//             </div>
//             <div className="p-6 text-center">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
//               <p className="text-gray-600 mb-4">Get a response within 24 hours</p>
//               <p className="text-lg font-medium text-teal-600">portivaglobalint@gmail.com</p>
//               <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
//             <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4">
//               <MapPin className="h-8 w-8 text-white mx-auto" />
//             </div>
//             <div className="p-6 text-center">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
//               <p className="text-gray-600 mb-4">Our office in Kerala</p>
//               <p className="text-sm text-gray-700">Kunninpuram Veedu, Maruthathoor</p>
//               <p className="text-sm text-gray-700">Chaikottukonam P.O, Neyyattinkara</p>
//               <p className="text-sm text-gray-500 mt-2">By appointment only</p>
//             </div>
//           </div>
//         </div>
        
//         {/* Query Form */}
//         <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
//           <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Send Us Your Query</h2>
//           <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
//             Fill out the form below and we will get back to you within 24 hours. For urgent matters, please call us directly.
//           </p>
          
//           {submitMessage && (
//             <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
//               {submitMessage}
//             </div>
//           )}
          
//           <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               {/* Name Field */}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                   Full Name *
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <User className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
//                     placeholder="Enter your full name"
//                   />
//                 </div>
//               </div>
              
//               {/* Email Field */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address *
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Mail className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
//                     placeholder="Enter your email address"
//                   />
//                 </div>
//               </div>
              
//               {/* Phone Field */}
//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                   Phone Number
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Phone className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
//                     placeholder="Enter your phone number"
//                   />
//                 </div>
//               </div>
              
//               {/* Company Field */}
//               <div>
//                 <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
//                   Company Name
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Building className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleInputChange}
//                     className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
//                     placeholder="Enter your company name"
//                   />
//                 </div>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               {/* Department Selection */}
//               <div>
//                 <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
//                   Department *
//                 </label>
//                 <select
//                   id="department"
//                   name="department"
//                   required
//                   value={formData.department}
//                   onChange={handleInputChange}
//                   className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
//                 >
//                   {departments.map(dept => (
//                     <option key={dept.value} value={dept.value}>
//                       {dept.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
              
//               {/* Subject Field */}
//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                   Subject *
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   required
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
//                   placeholder="Brief subject of your inquiry"
//                 />
//               </div>
//             </div>
            
//             {/* Message Field */}
//             <div className="mb-8">
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                 Message *
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 required
//                 rows={6}
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-vertical"
//                 placeholder="Please provide detailed information about your inquiry..."
//               ></textarea>
//             </div>
            
//             {/* Submit Button */}
//             <div className="text-center">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-white transition-all duration-200 ${
//                   isSubmitting 
//                     ? 'bg-gray-400 cursor-not-allowed' 
//                     : 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 hover:shadow-lg transform hover:scale-105'
//                 }`}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     <Send className="h-5 w-5 mr-2" />
//                     Send Message
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
        
//         {/* Office Locations */}
//         <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
//           <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Location</h2>
          
//           <div className="grid grid-cols-1 gap-8">
//             {officeLocations.map((office, index) => (
//               <div key={index} className="bg-gray-50 rounded-lg p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-4">{office.name}</h3>
                
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 bg-teal-100 p-3 rounded-full">
//                       <MapPin className="h-6 w-6 text-teal-600" />
//                     </div>
//                     <div className="ml-4">
//                       <p className="text-sm text-gray-500">Address</p>
//                       <p className="text-gray-800">{office.address}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
//                       <Clock className="h-6 w-6 text-blue-600" />
//                     </div>
//                     <div className="ml-4">
//                       <p className="text-sm text-gray-500">Business Hours</p>
//                       <p className="text-gray-800">{office.hours}</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
//                       <Phone className="h-6 w-6 text-purple-600" />
//                     </div>
//                     <div className="ml-4">
//                       <p className="text-sm text-gray-500">Phone</p>
//                       <p className="text-gray-800">{office.phone}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* FAQ Section */}
//         <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
//           <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          
//           <div className="max-w-4xl mx-auto divide-y divide-gray-200">
//             {faqItems.map((item, index) => (
//               <div key={index} className="py-6">
//                 <h3 className="text-xl font-medium text-gray-800 mb-3">{item.question}</h3>
//                 <p className="text-gray-600">{item.answer}</p>
//               </div>
//             ))}
//           </div>
          
         
//         </div>
        
//         {/* Social Media Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Connect With Us</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
//             Follow us on social media to stay updated with our latest products and news from Kerala.
//           </p>
          
//           <div className="flex justify-center space-x-6">
//             <a href="#" className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
//               <svg className="h-8 w-8 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
//               </svg>
//             </a>
            
//             <a href="#" className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
//               <svg className="h-8 w-8 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//               </svg>
//             </a>
            
//             <a href="#" className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
//               <svg className="h-8 w-8 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 21c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 7c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zM12 17c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//               </svg>
//             </a>
            
//             <a href="#" className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
//               <svg className="h-8 w-8 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//               </svg>
//             </a>
//           </div>
//         </div>
        

//       </div>
 
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, MessageSquare, Share2, ExternalLink, Send, User, Building } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar';
import ProducstListingModal from "./ProducstListingModal";
import Footer from './Footer';

const Contact = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    department: 'general',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: '', type: '' });

  const onChangeIsProductsDropdownOpen = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_l1xthut',
        'template_ytmgviw',
        formData,
        'mF0b-mfwXiXB_fqnG'
      );
      
      setSubmitMessage({
        text: 'Thank you for your inquiry! We will get back to you within 24 hours.',
        type: 'success'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        department: 'general',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitMessage({
        text: 'Failed to send your message. Please try again or contact us directly.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage({ text: '', type: '' }), 5000);
    }
  };
  
  const departments = [
    { value: 'general', label: 'General Inquiries' },
    { value: 'orders', label: 'Orders & Shipping' },
    { value: 'products', label: 'Product Information' },
    { value: 'partnerships', label: 'Business Partnerships' },
    { value: 'support', label: 'Customer Support' }
  ];
  
  const officeLocations = [
    {
      name: 'Head Office',
      address: 'Kunninpuram Veedu, Maruthathoor, Chaikottukonam P.O, Neyyattinkara, Thiruvananthapuram, Kerala',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM',
      phone: '+91 99461 80294'
    }
  ];
  
  const faqItems = [
    {
      question: 'What are your business hours?',
      answer: 'Our office is open Monday through Friday from 9:00 AM to 6:00 PM IST. We are closed on weekends and major Indian holidays.'
    },
    {
      question: 'How quickly do you respond to inquiries?',
      answer: 'We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly.'
    },
    {
      question: 'What products do you export?',
      answer: 'We specialize in exporting premium Kerala spices (black pepper, cardamom, clove, cinnamon), teas, and coffee beans. Visit our products page for full details.'
    },
    {
      question: 'Do you offer wholesale pricing?',
      answer: 'Yes, we offer competitive wholesale pricing for bulk orders. Please contact our partnerships department for more information.'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500/20 to-blue-500/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative z-50 mt-[-3px] ml-[-32px]">
        <Navbar
          isProductsDropdownOpen={isProductsDropdownOpen} 
          onChangeIsProductsDropdownOpen={onChangeIsProductsDropdownOpen}
        />
      </div>
      
      <div className="max-w-7xl mx-auto mt-14">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[50px] font-bold text-gray-800 mb-6">Contact Portiva Global</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are here to help with any questions about our premium Kerala products. Reach out through any of our communication channels.
          </p>
        </div>
        
        {/* Quick Connect Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4">
              <Phone className="h-8 w-8 text-white mx-auto" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <p className="text-lg font-medium text-teal-600">+91 99461 80294</p>
              <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9AM - 6PM IST</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4">
              <Mail className="h-8 w-8 text-white mx-auto" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get a response within 24 hours</p>
              <p className="text-lg font-medium text-teal-600">portivaglobalint@gmail.com</p>
              <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4">
              <MapPin className="h-8 w-8 text-white mx-auto" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Our office in Kerala</p>
              <p className="text-sm text-gray-700">Near Govt. KNM College </p>
              <p className="text-sm text-gray-700">Kanjiramkulam Kanjiramkulam P.O - 695524</p>
              <p className="text-sm text-gray-500 mt-2">By appointment only</p>
            </div>
          </div>
        </div>
        
        {/* Query Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Send Us Your Query</h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Fill out the form below and we will get back to you within 24 hours. For urgent matters, please call us directly.
          </p>
          
          {submitMessage.text && (
            <div className={`mb-6 p-4 rounded-lg ${
              submitMessage.type === 'success' 
                ? 'bg-green-100 border border-green-400 text-green-700' 
                : 'bg-red-100 border border-red-400 text-red-700'
            }`}>
              {submitMessage.text}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Department Selection */}
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                  Department *
                </label>
                <select
                  id="department"
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                >
                  {departments.map(dept => (
                    <option key={dept.value} value={dept.value}>
                      {dept.label}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  placeholder="Brief subject of your inquiry"
                />
              </div>
            </div>
            
            {/* Message Field */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-vertical"
                placeholder="Please provide detailed information about your inquiry..."
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-white transition-all duration-200 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 hover:shadow-lg transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
        
        {/* Office Locations */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Location</h2>
          
          <div className="grid grid-cols-1 gap-8">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{office.name}</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="text-gray-800">{office.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Business Hours</p>
                      <p className="text-gray-800">{office.hours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-800">{office.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto divide-y divide-gray-200">
            {faqItems.map((item, index) => (
              <div key={index} className="py-6">
                <h3 className="text-xl font-medium text-gray-800 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Social Media Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Connect With Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Follow us on social media to stay updated with our latest products and news from Kerala.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <svg className="h-8 w-8 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            
            <a href="#" className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <svg className="h-8 w-8 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            
            <a href="https://www.instagram.com/portiva_global?igsh=MXFkYmxpMDdlbWsycg==" className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <svg className="h-8 w-8 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 21c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 7c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zM12 17c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            
            <a href="#" className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <svg className="h-8 w-8 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;