// import { useState } from "react";
// import { Mail, Phone, MapPin, Send } from "lucide-react";

// export default function Footer() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     // Here you would typically send the data to your backend
//     console.log("Form submitted:", formData);
//     setIsSubmitted(true);
//     setFormData({ name: "", email: "", message: "" });

//     // Reset the submission status after 3 seconds
//     setTimeout(() => {
//       setIsSubmitted(false);
//     }, 3000);
//   };

//   return (
//     <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 overflow-hidden relative z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Company Info Column */}
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
//                 Portiva Global
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 International Export & Importing Solutions
//               </p>
//             </div>

//             <div className="space-y-4">
//               <div className="flex items-start space-x-3">
//                 <MapPin className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
//                 <p className="text-gray-300">
//                   Near Govt. KNM College Kanjiramkulam Kanjiramkulam P.O -
//                   695524
//                 </p>
//               </div>

//               <div className="flex items-center space-x-3">
//                 <Phone className="h-5 w-5 text-teal-400 flex-shrink-0" />
//                 <p className="text-gray-300">+91 9946180294</p>
//               </div>

//               <div className="flex items-center space-x-3">
//                 <Mail className="h-5 w-5 text-teal-400 flex-shrink-0" />
//                 <p className="text-gray-300">Portivaglobalint@gmail.com</p>
//               </div>
//             </div>

//             <div className="pt-4">
//               <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
//               <div className="flex space-x-4">
//                 {/* Social media icons */}
//                 <a
//                   href="#"
//                   className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                   >
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links Column */}
//           <div>
//             <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <ul className="space-y-3">
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-300 hover:text-teal-400 transition-colors"
//                     >
//                       About Us
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-300 hover:text-teal-400 transition-colors"
//                     >
//                       Services
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-300 hover:text-teal-400 transition-colors"
//                     >
//                       Our Team
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-300 hover:text-teal-400 transition-colors"
//                     >
//                       Portfolio
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-300 hover:text-teal-400 transition-colors"
//                     >
//                       Testimonials
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <ul className="space-y-3">
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-300 hover:text-teal-400 transition-colors"
//                     >
//                       FAQ
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-300 hover:text-teal-400 transition-colors"
//                     >
//                       Resources
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-300 hover:text-teal-400 transition-colors"
//                     >
//                       Blog
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-300 hover:text-teal-400 transition-colors"
//                     >
//                       Privacy Policy
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="text-gray-300 hover:text-teal-400 transition-colors"
//                     >
//                       Terms of Service
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Inquiry Form Column */}
//           <div>
//             <h4 className="text-xl font-semibold mb-6">Send Us an Inquiry</h4>
//             {isSubmitted ? (
//               <div className="bg-teal-900/50 border border-teal-500 text-teal-200 p-4 rounded-lg mb-4 flex items-center">
//                 <svg
//                   className="w-5 h-5 mr-2"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   ></path>
//                 </svg>
//                 <span>Thank you! We'll get back to you shortly.</span>
//               </div>
//             ) : null}

//             <div className="space-y-4">
//               <div>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Your Name"
//                     className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white pl-4"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <div className="relative">
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Your Email"
//                     className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white pl-4"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <div className="relative">
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows="4"
//                     placeholder="Your Message"
//                     className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white pl-4 resize-none"
//                   ></textarea>
//                 </div>
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 className="w-full flex items-center justify-center bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
//               >
//                 <Send className="h-4 w-4 mr-2" />
//                 Send Message
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
//           <p className="text-gray-400 mb-4 sm:mb-0">
//             © 2025 Portiva Global. All rights reserved.
//           </p>
//           <div className="flex space-x-6">
//             <a
//               href="#"
//               className="text-gray-400 hover:text-teal-400 transition-colors"
//             >
//               Privacy
//             </a>
//             <a
//               href="#"
//               className="text-gray-400 hover:text-teal-400 transition-colors"
//             >
//               Terms
//             </a>
//             <a
//               href="#"
//               className="text-gray-400 hover:text-teal-400 transition-colors"
//             >
//               Contact
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill all fields");
      return;
    }

    if (!formData.email.includes('@')) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        'service_l1xthut',
        'template_ytmgviw',
        formData,
        'mF0b-mfwXiXB_fqnG'
      );
      
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      console.error('Failed to send email:', err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 overflow-hidden relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Portiva Global
              </h3>
              <p className="text-gray-400 mt-2">
                International Export & Importing Solutions
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Near Govt. KNM College, Kanjiramkulam P.O, Thiruvananthapuram, Kerala – 695524
                </p>
               
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
Portiva Global Logistics LLC  
Dubai Investment Park (DIP)  
United Arab Emirates, Dubai  
                </p>
               
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <p className="text-gray-300">+91 9946180294</p>
                <p className="text-gray-300">+971 503053576</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <p className="text-gray-300">Portivaglobalint@gmail.com</p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/portiva_global?igsh=MXFkYmxpMDdlbWsycg=="
                  className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-teal-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                      Resources
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Send Us an Inquiry</h4>
            {isSubmitted ? (
              <div className="bg-teal-900/50 border border-teal-500 text-teal-200 p-4 rounded-lg mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Thank you! We'll get back to you shortly.</span>
              </div>
            ) : null}

            {error && (
              <div className="bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-lg mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                  disabled={isLoading}
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
                  disabled={isLoading}
                  required
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white resize-none"
                  disabled={isLoading}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex items-center justify-center bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all shadow-lg ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:from-teal-600 hover:to-blue-600 hover:shadow-xl'
                }`}
              >
                {isLoading ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 sm:mb-0">
            © 2025 Portiva Global. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}