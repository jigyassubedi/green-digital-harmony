
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-accent/50 to-background overflow-hidden"
    >
      {/* Animated circles in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-ping-slow"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-ping-slow" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="section-container z-10 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatedSection animation="fade-down" className="mb-6">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary text-primary font-medium text-sm mb-4">
              Sustainable IT Solutions
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Powering the Digital World with 
              <span className="text-primary"> Clean Energy & Technology</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              We combine cutting-edge IT infrastructure with sustainable energy solutions to create a greener digital future for businesses worldwide.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#about" className="btn-primary">
                Learn More
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="text-primary/70 hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
