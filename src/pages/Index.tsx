
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const location = useLocation();

  // Handle smooth scroll for navigation
  useEffect(() => {
    const handleClick = function(e: Event) {
      e.preventDefault();
      
      const anchor = this as HTMLAnchorElement;
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      const target = document.querySelector(href);
      if (!target) return;
      
      target.scrollIntoView({
        behavior: 'smooth'
      });
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });
    
    // Scroll to top on initial load
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, [location]);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
