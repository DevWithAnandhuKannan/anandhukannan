import { Github, Linkedin, Mail, Instagram, Send, MapPin, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black px-6 sm:px-12 lg:px-40 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">

        {/* Profile Info */}
        <div>
          <h2 className="font-semibold text-xl mb-2">Anandhu Kannan</h2>
          <p className="text-gray-600 leading-relaxed">
            Full Stack Developer, Designer, AI/ML Enthusiast, Mobile App Builder
          </p>
          <div className="flex items-center text-gray-600 mt-2">
            <MapPin size={16} className="mr-1" /> Kerala, India
          </div>
          <p className="text-gray-500 mt-4 text-xs">© {new Date().getFullYear()} All rights reserved.</p>
          <p className="text-xs text-gray-400 mt-1">Crafted with 💻 by Anandhu Kannan</p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Navigation</h2>
          <ul className="space-y-1 text-gray-600">
            <li><a href="#about" className="hover:text-black transition">About</a></li>
            <li><a href="#services" className="hover:text-black transition">Services</a></li>
            <li><a href="#projects" className="hover:text-black transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-black transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Connect</h2>
          <div className="flex flex-wrap gap-4 mt-3">
            <a href="https://github.com/DevWithAnandhuKannan" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/anandhu-kannan-b39845272/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com/Kneazllle" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <Instagram size={20} />
            </a>
            <a href="mailto:connect.Anandhukannan@proton.me" className="text-gray-600 hover:text-black">
              <Mail size={20} />
            </a>
            <a href="#" title="Discord: kneazllle" className="text-gray-600 hover:text-black">
              <Send size={20} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Contact</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Email: <a href="mailto:connect.Anandhukannan@proton.me" className="hover:text-black">connect.Anandhukannan@proton.me</a>
            <br />
            Discord: <span className="text-black font-medium">kneazllle</span>
          </p>
        </div>

        {/* Buy Me a Coffee / UPI Support */}
        <div className="text-center">
          <h2 className="font-semibold text-lg mb-2 flex items-center justify-center gap-1">
            <Coffee size={18} /> Buy Me a Coffee
          </h2>
          <img 
            src="/src/assets/anandhu_upi_qr.png" 
            alt="Scan UPI QR" 
            className="w-24 h-24 mx-auto object-contain border rounded-md mb-2"
          />
          <p className="text-xs text-gray-500">Scan UPI to support</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
