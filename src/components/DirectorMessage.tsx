
import React from 'react';
import { User, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const DirectorMessage: React.FC = () => {
  return (
    <AnimatedSection className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-6">Message from Our Director</h2>
        <div className="relative inline-block">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" 
              alt="Company Director" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full">
            <User className="w-5 h-5" />
          </div>
        </div>
        <h3 className="text-2xl font-medium mt-4">Dr. Alex Morgan</h3>
        <p className="text-primary font-medium">Founder & Director</p>
      </div>
      
      <div className="bg-accent/20 p-8 md:p-12 rounded-lg shadow-inner relative">
        <Quote className="w-12 h-12 text-primary/20 absolute top-8 left-8" />
        
        <div className="space-y-6 text-lg relative z-10 ml-8 mt-8">
          <p>
            "When we founded QPr, we had a vision that went beyond just providing IT services. We wanted to create a company that would stand at the intersection of technology and sustainability, demonstrating that these two worlds not only can coexist but can thrive together.
          </p>
          <p>
            Today, as I look at what we've accomplished, I'm proud to see that vision becoming reality. We've helped countless businesses transform their digital infrastructure while significantly reducing their environmental footprint. We've pioneered innovative approaches to data management that prioritize efficiency and sustainability.
          </p>
          <p>
            But what makes me most proud is our team. The dedicated professionals at QPr bring not just technical expertise but a genuine passion for making a difference. They are the heart and soul of our company, and the reason I'm confident we will continue to lead the way in sustainable IT solutions for years to come.
          </p>
          <p>
            As we move forward, we remain committed to our core mission: helping businesses thrive in the digital age while contributing to a healthier planet. Thank you for being part of this journey with us."
          </p>
        </div>
        
        <div className="mt-8 text-right">
          <img 
            src="https://i.imgur.com/1A5ccgH.png" 
            alt="Signature" 
            className="h-16 inline-block"
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default DirectorMessage;
