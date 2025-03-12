
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'fade-up' | 'fade-down';
  once?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  animation = 'fade-up',
  once = true
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    // Define the checkIfVisible function before using it
    function checkIfVisible() {
      const rect = section.getBoundingClientRect();
      const isVisible = (
        rect.top <= (window.innerHeight * 0.85) && 
        rect.bottom >= 0
      );
      
      if (isVisible) {
        setTimeout(() => {
          section.classList.add('animate-' + animation);
          section.style.opacity = '1';
        }, delay);
        
        if (once) {
          window.removeEventListener('scroll', handleScroll);
        }
      } else if (!once) {
        section.classList.remove('animate-' + animation);
        section.style.opacity = '0';
      }
    }
    
    // Define handleScroll after checkIfVisible to avoid reference error
    const handleScroll = () => {
      checkIfVisible();
    };
    
    // Initial check on component mount
    checkIfVisible();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animation, delay, once]);
  
  return (
    <div 
      ref={sectionRef} 
      className={cn("opacity-0", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
