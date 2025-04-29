
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DirectorMessage from '@/components/DirectorMessage';
import AnimatedSection from '@/components/AnimatedSection';
import { aboutSections } from '@/data/aboutData';

const AboutDetailPage: React.FC = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  
  // Find the about section with the matching ID
  const section = aboutSections.find(s => s.id === sectionId);
  
  // If section not found, redirect to about page
  useEffect(() => {
    if (!section) {
      navigate('/about');
    }
  }, [section, navigate]);
  
  if (!section) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/40 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{section.title}</h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              {section.description}
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {sectionId === 'director' ? (
            <DirectorMessage detailed={true} />
          ) : (
            <AnimatedSection>
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: section.content }} />
              </div>
              
              {section.image && (
                <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-auto"
                  />
                </div>
              )}
            </AnimatedSection>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutDetailPage;
