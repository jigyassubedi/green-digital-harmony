
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';

interface DirectorMessageProps {
  detailed?: boolean;
}

const DirectorMessage: React.FC<DirectorMessageProps> = ({ detailed = false }) => {
  return (
    <AnimatedSection>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-8">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" 
              alt="Company Director" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Dr. Michael Reynolds</h2>
            <p className="text-primary font-medium">Founder & Director</p>
          </div>
        </div>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-lg mb-4 italic">
              "Our mission at QPr is to demonstrate that technological advancement and environmental stewardship can go hand in hand. We believe that sustainable solutions are not just ethical choices but smart business decisions that deliver long-term value."
            </p>
          </CardContent>
        </Card>
        
        <div className="prose prose-lg max-w-none">
          <p>
            When I founded QPr in 2018, I was driven by a vision that seemed simple yet was surprisingly uncommon in our industry: that technology and sustainability should be natural partners, not opposing forces. After 20 years in the technology sector, I had witnessed firsthand how digital transformation was revolutionizing businesses while simultaneously creating new environmental challenges.
          </p>
          
          {detailed && (
            <>
              <p>
                My background in both computer science and environmental engineering gave me a unique perspective on these challenges. I saw that most technology providers were focused solely on performance and cost, with sustainability treated as an afterthought—if considered at all. Similarly, many environmental initiatives failed to fully leverage the power of modern technology to enhance their impact.
              </p>
              
              <p>
                QPr was founded to bridge this gap. We assembled a team of experts who shared our vision of integrated solutions that would help businesses thrive while reducing their environmental footprint. Our early projects focused on energy-efficient IT infrastructure and data management, but we quickly expanded into renewable energy solutions as we recognized the natural synergies between these areas.
              </p>
              
              <p>
                Today, I'm immensely proud of what our team has accomplished. We've helped dozens of organizations reduce their IT carbon footprint while improving performance. Our biogas solutions have enabled agricultural businesses to transform waste into valuable energy. Our data management services have streamlined operations for e-commerce companies while minimizing resource usage.
              </p>
              
              <p>
                But what gives me the greatest satisfaction is seeing the ripple effects of our work. When a client adopts sustainable practices and experiences the benefits firsthand, they often become advocates within their industry. This creates a positive cycle of influence that extends far beyond our direct impact.
              </p>
              
              <p>
                As we look to the future, I'm excited about the continued evolution of green technology and the growing recognition of its importance. The challenges of climate change and resource scarcity are daunting, but I remain optimistic about our ability to develop innovative solutions that create both environmental and economic value.
              </p>
              
              <p>
                At QPr, we're committed to being part of that solution—not just through the services we provide but through how we operate as a company. We practice what we preach, continually working to reduce our own environmental impact and contribute positively to our community.
              </p>
              
              <p>
                I invite you to join us on this journey. Whether you're a potential client, partner, team member, or simply someone interested in sustainable technology, I believe we have something valuable to offer. Together, we can build a future where technology enhances both business success and environmental health.
              </p>
            </>
          )}
          
          {!detailed && (
            <p>
              <a href="/about/director" className="text-primary hover:underline">Read full message →</a>
            </p>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default DirectorMessage;
