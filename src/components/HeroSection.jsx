
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  // Smooth scroll with offset based on the navbar height for mobile and desktop
  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Adjust navbar height based on screen size
      const navbarHeight = window.innerWidth < 768 ? 40 : 60; // 40px for mobile, 60px for desktop
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-r from-accent/50 to-background/50 overflow-hidden" // Changed gradient direction
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Animated circles in background */}
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-l from-primary/90 to-background/90 bg-blend-overlay"> {/* Updated gradient direction here as well */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-ping-slow"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-ping-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="section-container z-10 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white ">
              Powering the Digital World with 
              <span className="text-primary"> Clean Energy & Technology</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto">
              We combine cutting-edge IT infrastructure with sustainable energy solutions to create a greener digital future for businesses worldwide.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#about" 
                className="btn-primary"
                onClick={(e) => handleScrollToSection(e, 'about')}
              >
                Learn More
              </a>
              <a 
                href="#contact" 
                className="btn-secondary"
                onClick={(e) => handleScrollToSection(e, 'contact')}
              >
                Get in Touch
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="text-white hover:text-primary transition-colors"
          aria-label="Scroll down"
          onClick={(e) => handleScrollToSection(e, 'about')}
        >
          <ChevronDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
