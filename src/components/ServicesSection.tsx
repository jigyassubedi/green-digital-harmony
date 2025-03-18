
import React from 'react';
import { Server, Cloud, HardDrive, Cpu, Shield, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const services = [
  {
    title: 'Green Data Centers',
    description: 'Eco-friendly data centers powered by renewable energy sources, designed to minimize environmental impact while maximizing performance.',
    icon: Server,
    gradient: 'bg-gradient-to-r from-primary/5 to-primary/20'
  },
  {
    title: 'Cloud Computing & Energy Efficiency',
    description: 'Optimized cloud solutions that reduce energy consumption and carbon emissions while enhancing scalability and accessibility.',
    icon: Cloud,
    gradient: 'bg-gradient-to-r from-primary/10 to-primary/25'
  },
  {
    title: 'Sustainable IT Infrastructure',
    description: 'End-to-end IT infrastructure designed with sustainability in mind, from energy-efficient hardware to optimized network architecture.',
    icon: HardDrive,
    gradient: 'bg-gradient-to-r from-primary/15 to-primary/30'
  },
  {
    title: 'AI & Automation for Energy Management',
    description: 'Smart systems that leverage AI to monitor and optimize energy usage in real-time, reducing waste and improving efficiency.',
    icon: Cpu,
    gradient: 'bg-gradient-to-r from-primary/20 to-primary/35'
  },
  {
    title: 'Cybersecurity & Eco-friendly Solutions',
    description: 'Comprehensive security solutions that protect your digital assets while adhering to sustainable IT practices.',
    icon: Shield,
    gradient: 'bg-gradient-to-r from-primary/15 to-primary/30'
  },
  {
    title: 'Green IT Consulting',
    description: 'Expert guidance on implementing sustainable technology strategies that align with your business goals and environmental values.',
    icon: Lightbulb,
    gradient: 'bg-gradient-to-r from-primary/10 to-primary/25'
  }
];

const ServicesSection: React.FC = () => {
  const [api, setApi] = React.useState<any>(null);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);
  
  // Auto-play functionality
  React.useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [api]);
  
  return (
    <section id="services" className="py-4 bg-accent/30">
      <div className="section-container max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center w-full mb-2">
          <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wider text-center">
            Our Services
          </h1>
        </div>
        <AnimatedSection className="text-center mb-8">
          <p className="section-subtitle mx-auto max-w-3xl">
            We offer a comprehensive range of services designed to help your business thrive in the digital age while minimizing environmental impact.
          </p>
        </AnimatedSection>

        {/* Desktop View - Carousel */}
        <div className="hidden md:block">
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{ 
              loop: true, 
              align: "start",
              slidesToScroll: 3,
            }}
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <AnimatedSection 
                    delay={index * 100}
                    className={`rounded-lg p-6 shadow-md card-hover h-full ${service.gradient} backdrop-blur-sm border border-white/10`}
                  >
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <a 
                      href="#contact" 
                      className="text-primary font-medium inline-flex items-center hover:underline group"
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
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center gap-4 mt-6">
              <CarouselPrevious 
                variant="outline" 
                className="relative bg-primary text-white hover:bg-primary/90 border-none left-0 translate-y-0 static"
              >
                <ChevronLeft className="h-5 w-5" />
              </CarouselPrevious>

              <div className="flex gap-2 items-center">
                {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => {
                  // Calculate if this indicator should be active based on current position
                  const isActive = Math.floor(current / 3) === index;
                  
                  return (
                    <button 
                      key={index}
                      type="button"
                      onClick={() => api?.scrollTo(index * 3)}
                      className={`h-2 w-2 rounded-full ${isActive ? 'bg-primary' : 'bg-primary/40'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  );
                })}
              </div>

              <CarouselNext 
                variant="outline" 
                className="relative bg-primary text-white hover:bg-primary/90 border-none right-0 translate-y-0 static" 
              >
                <ChevronRight className="h-5 w-5" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <Carousel 
            setApi={setApi}
            className="w-full max-w-md mx-auto"
            opts={{ loop: true, align: "center" }}
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className={`rounded-lg p-6 shadow-md h-full flex flex-col ${service.gradient} backdrop-blur-sm border border-white/10`}>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <a 
                      href="#contact" 
                      className="text-primary font-medium inline-flex items-center hover:underline group mt-auto"
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-center gap-4 mt-6">
              <CarouselPrevious 
                variant="outline" 
                className="relative bg-primary text-white hover:bg-primary/90 border-none left-0 translate-y-0 static"
              >
                <ChevronLeft className="h-5 w-5" />
              </CarouselPrevious>

              <div className="flex gap-2 items-center">
                {services.map((_, index) => (
                  <button 
                    key={index}
                    type="button"
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 w-2 rounded-full ${current === index ? 'bg-primary' : 'bg-primary/40'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <CarouselNext 
                variant="outline" 
                className="relative bg-primary text-white hover:bg-primary/90 border-none right-0 translate-y-0 static" 
              >
                <ChevronRight className="h-5 w-5" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
