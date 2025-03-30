import React from 'react';
import { Sprout, LeafyGreen, ChevronLeft, ChevronRight,Database,Cpu  } from 'lucide-react';
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
    title: 'Biogas Solutions',
    description: 'We are committed to supporting sustainability and environmental stewardship through innovative biogas solutions. Our biogas systems offer a renewable energy source that helps reduce waste, lower carbon emissions, and generate clean energy.',
    icon: Sprout
  },
  {
    title: 'Data Feeding Services',
    description: 'Data is the backbone of decision-making in modern businesses. Our Data Feeding Services help you gather, process, and utilize data effectively to enhance operations, improve analytics, and drive better business outcomes.',
    icon: Database 
  },
  {
    title: 'IT Services',
    description: 'We provide a comprehensive suite of IT services that support your business at every stage of its digital transformation. Our solutions are designed to streamline operations, enhance user experiences, and ensure a robust and secure IT infrastructure.',
    icon: Cpu
  },
  {
    title: 'Green IT Consulting',
    description: 'Expert guidance on implementing sustainable technology strategies that align with your business goals and environmental values.',
    icon: LeafyGreen
  }
];

const ServicesSection: React.FC = () => {
  const [api, setApi] = React.useState(null);
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

        {/* Unified Carousel for Both Desktop & Mobile */}
        <Carousel 
          setApi={setApi}
          className="w-full"
          opts={{ 
            loop: true, 
            align: "start",
            slidesToScroll: 1, // Scroll 1 at a time for consistency
          }}
        >
          <CarouselContent className="flex -mx-2">
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 basis-full">
                <AnimatedSection 
                  delay={index * 100}
                  className="rounded-lg p-6 shadow-md card-hover h-full 
                             bg-gradient-to-r from-primary/10 to-primary/40 
                             backdrop-blur-sm border-none overflow-hidden"
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  {/* <a 
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
                  </a> */}
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
    </section>
  );
};

export default ServicesSection;
