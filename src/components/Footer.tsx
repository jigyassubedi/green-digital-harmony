
import React from 'react';
import { Leaf, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          <div>
            <div className="flex items-center text-white mb-4">
              <Leaf className="w-6 h-6 mr-2" strokeWidth={2.5} />
              <span className="text-xl font-bold">GreenIT</span>
            </div>
            <p className="text-white/70 mb-6">
              Leading the transformation to a sustainable digital future through innovative IT solutions powered by clean energy.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-primary"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-primary"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-primary"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Works', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/70 transition-colors hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Green Data Centers', 
                'Cloud Computing', 
                'IT Infrastructure', 
                'AI & Automation', 
                'Cybersecurity'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-white/70 transition-colors hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-white/70 space-y-3">
              <p>123 Green Avenue, Eco Park</p>
              <p>San Francisco, CA 94107</p>
              <p>info@greenit.com</p>
              <p>+1 (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} GreenIT. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 text-sm hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-white/70 text-sm hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop} 
        className="fixed right-8 bottom-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg transition-all hover:bg-primary/90 hover:-translate-y-1 focus:outline-none z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
