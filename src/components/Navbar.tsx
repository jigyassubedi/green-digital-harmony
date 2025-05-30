
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  // Handle scroll event to update navbar styles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isMobile]);

  // Smooth scrolling function with dynamic offset based on device
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only use custom scroll for hash links (on the same page)
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1); // Remove the # character
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navbarHeight = isMobile ? 40 : 60; // Adjusted for mobile and desktop height
        const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
      
      setIsMenuOpen(false); // Close menu after clicking
    } else {
      // For regular links, just close the menu
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3",
        isScrolled 
          ? "bg-white shadow-lg" // Add shadow when scrolled
          : "bg-transparent",
        isMobile && "py-2" // Reduced padding for mobile view
      )}
    >
      {/* Gradient background (for non-sticky state) */}
      <div className={cn(
        "absolute inset-0 overflow-hidden ",
        isScrolled && "hidden" // Hide the gradient when scrolled
      )} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center text-primary font-bold text-xl"
          >
            <img 
              src="/qpr-logo-nav.png" 
              alt="Company Logo" 
              className={cn(
                "mr-2",
                isMobile ? "w-12 h-12" : "w-16 h-16" // Smaller logo for mobile
              )} 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a
                  key={item.label}
                  href={item.href.substring(1)}
                  className="text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                  onClick={(e) => handleNavClick(e, item.href.substring(1))}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2 z-[100] relative"
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
          "md:hidden fixed top-0 right-0 z-[60] h-full bg-white shadow-lg transition-all duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
          "w-[50%]" // Increased width to almost half of screen
        )}
      >
        <div className="pt-24 px-4">
          <nav className="flex flex-col items-start space-y-6">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a
                  key={item.label}
                  href={item.href.substring(1)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={(e) => handleNavClick(e, item.href.substring(1))}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      </div>
      
      {/* Overlay backdrop when menu is open */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-[50] bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
