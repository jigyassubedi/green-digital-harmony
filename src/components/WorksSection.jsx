
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: 'Solar-Powered Data Center',
    category: 'Infrastructure',
    description: 'A state-of-the-art data center powered entirely by solar energy, reducing carbon emissions by 95%.',
    image: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    title: 'Green Cloud Migration',
    category: 'Cloud Services',
    description: 'Migrated a financial institution to an energy-efficient cloud platform, reducing IT energy consumption by 60%.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    title: 'Sustainable Smart Office',
    category: 'IoT & Automation',
    description: 'Implemented IoT solutions for energy management across a corporate campus, saving 1.2 million kWh annually.',
    image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    title: 'Eco-Friendly Cybersecurity Framework',
    category: 'Security',
    description: 'Developed a low-energy security monitoring system that maintains enterprise-level protection while reducing computational overhead.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80'
  },
  {
    title: 'Renewable Energy IT Research Lab',
    category: 'Research & Development',
    description: 'Constructed a dedicated facility for researching next-generation green IT solutions, powered by wind and solar energy.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    title: 'Green DevOps Pipeline',
    category: 'Software Development',
    description: 'Redesigned CI/CD pipeline to reduce computational waste, cutting build-related energy consumption by 40%.',
    image: 'https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }
];

const WorksSection = () => {
  const [activeProject, setActiveProject] = useState(null);
  
  return (
    <section id="works" className="py-4 bg-background">
      <div className="section-container">
      <div className="flex justify-center items-center w-full mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wider text-center">
           Our Projects
          </h1>
        </div>
        <AnimatedSection className="text-center mb-8">
          <p className="section-subtitle mx-auto max-w-3xl">
            Explore our portfolio of successful implementations that demonstrate the power of green IT solutions in real-world scenarios.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 100}
              className="group relative"
            >
              <div 
                className="rounded-lg overflow-hidden relative card-hover"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 transition-opacity group-hover:opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="bg-primary/80 text-white text-xs px-2 py-1 rounded-full inline-block mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className={`text-white/80 text-sm transition-all duration-300 ${activeProject === index ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    {project.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
