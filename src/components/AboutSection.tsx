import React from 'react';
import { CheckCircle, Server, Cloud, Leaf, Lock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const stats = [
  { label: 'Energy Saved', value: '1.2M kWh' },
  { label: 'Carbon Offset', value: '850 Tons' },
  { label: 'IT Projects', value: '200+' },
  { label: 'Client Satisfaction', value: '99%' }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-4 bg-background">
      <div className="section-container">
        
        {/* Centered and Bold About Us Title */}
        <div className="flex justify-center items-center w-full mb-2">
          <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wider text-center">
            About Us
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="order-2 md:order-1">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="glassmorphism rounded-lg p-8 h-40 flex items-center justify-center shadow-lg">
                  <Server className="w-12 h-12 text-primary" />
                </div>
                <div className="glassmorphism rounded-lg p-8 h-40 flex items-center justify-center shadow-lg mt-8">
                  <Cloud className="w-12 h-12 text-primary" />
                </div>
                <div className="glassmorphism rounded-lg p-8 h-40 flex items-center justify-center shadow-lg">
                  <Leaf className="w-12 h-12 text-primary" />
                </div>
                <div className="glassmorphism rounded-lg p-8 h-40 flex items-center justify-center shadow-lg mt-8">
                  <Lock className="w-12 h-12 text-primary" />
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="order-1 md:order-2">
            <div>
              {/* <h2 className="section-title">
                Leading the Way in <span className="text-primary">Sustainable IT</span>
              </h2> */}
              {/*<p className="section-subtitle">
                We are committed to revolutionizing the IT industry by integrating clean energy solutions with cutting-edge technology. Our mission is to help businesses reduce their carbon footprint while optimizing digital performance.
              </p>*/}
              <p className="section-subtitle">
              At QPr, we are committed to driving innovation and sustainability through our comprehensive IT services and biogas solutions. With a passion for delivering exceptional results, we work with businesses across various industries to enhance their operations, reduce environmental impact, and embrace the power of technology and renewable energy.


              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Advanced Data Feeding Solutions for E-commerce Platforms',
                  'Cutting-edge Biogas Technology for Renewable Energy',
                  'Comprehensive Business Enablement & Support Services',
                  'Strategic Sustainable Digital Transformation'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        <AnimatedSection className="mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
  {stats.map((stat, index) => (
    <div 
      key={index} 
      className="rounded-lg p-6 card-hover text-center"
      style={{
         background: 'linear-gradient(to right, #8FE0C3, #25A777)',
      }}
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {stat.value}
      </div>
      <div className="text-gray-100">{stat.label}</div> {/* Lightened text for contrast */}
    </div>
  ))}
</div>

        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
