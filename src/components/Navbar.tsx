
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Leaf, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Handle scroll event to update navbar styles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  // Close mobile menu when clicking a nav item
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-md" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center text-primary font-bold text-xl"
          >
            <Leaf className="w-6 h-6 mr-2" strokeWidth={2.5} />
            <span>GreenIT</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out transform pt-20",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ opacity: isMenuOpen ? 1 : 0, visibility: isMenuOpen ? 'visible' : 'hidden' }}
      >
        <nav className="flex flex-col items-center space-y-6 p-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
