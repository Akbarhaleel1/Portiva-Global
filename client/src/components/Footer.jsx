
export default function Footer() {
  return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Portiva Global</h3>
            <p className="text-gray-400">International Export & Importing Solutions</p>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2025 Portiva Global. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
  );
}