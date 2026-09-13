import Logo from "../assets/logo-text.png"
export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white py-12 text-gray-600">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          
        <div className="md:col-span-2">
            <div className="mb-3 flex items-center gap-2">
            <div>
              <img src={Logo} alt="" />  
                
                </div>  
              
              
            </div>
            
            <p className="mb-6 text-xs text-gray-400 max-w-xs leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
           
            <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
              <a href="#" className="hover:text-gray-900 transition">GitHub</a>
              <a href="#" className="hover:text-gray-900 transition">Twitter</a>
              <a href="#" className="hover:text-gray-900 transition">LinkedIn</a>
            </div>
          </div>


         
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-900">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition">Home</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Projects</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-900">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Careers</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-900">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}