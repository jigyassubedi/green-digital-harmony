
import React from 'react';
import { Server, Cloud, HardDrive, Cpu, Shield, Lightbulb } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    title: 'Green Data Centers',
    description: 'Eco-friendly data centers powered by renewable energy sources, designed to minimize environmental impact while maximizing performance.',
    icon: Server
  },
  {
    title: 'Cloud Computing & Energy Efficiency',
    description: 'Optimized cloud solutions that reduce energy consumption and carbon emissions while enhancing scalability and accessibility.',
    icon: Cloud
  },
  {
    title: 'Sustainable IT Infrastructure',
    description: 'End-to-end IT infrastructure designed with sustainability in mind, from energy-efficient hardware to optimized network architecture.',
    icon: HardDrive
  },
  {
    title: 'AI & Automation for Energy Management',
    description: 'Smart systems that leverage AI to monitor and optimize energy usage in real-time, reducing waste and improving efficiency.',
    icon: Cpu
  },
  {
    title: 'Cybersecurity & Eco-friendly Solutions',
    description: 'Comprehensive security solutions that protect your digital assets while adhering to sustainable IT practices.',
    icon: Shield
  },
  {
    title: 'Green IT Consulting',
    description: 'Expert guidance on implementing sustainable technology strategies that align with your business goals and environmental values.',
    icon: Lightbulb
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-10 bg-accent/30">
      <div className="section-container">
        <AnimatedSection className="text-center mb-8">
          <div className="text-center">
            <h3 className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Our Services</h3>
          </div>
          <h2 className="section-title">
            Sustainable IT Solutions for the Modern Business
          </h2>
          <p className="section-subtitle">
            We offer a comprehensive range of services designed to help your business thrive in the digital age while minimizing environmental impact.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 100}
              className="bg-white rounded-lg p-6 shadow-md card-hover"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <a 
                href="#contact" 
                className="text-primary font-medium inline-flex items-center hover:underline"
              >
                Learn More
                <svg 
                  className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
