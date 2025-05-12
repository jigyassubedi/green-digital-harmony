
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { services } from '@/data/servicesData';

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  // Find the service with the matching ID
  const service = services.find(s => s.id === serviceId);
  
  // If service not found, redirect to services page
  useEffect(() => {
    if (!service) {
      navigate('/services');
    }
  }, [service, navigate]);
  
  if (!service) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/40 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{service.title}</h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
                <p className="text-lg mb-6">{service.detailedDescription}</p>
                <a href="/#contact" className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition-colors">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="bg-accent/30 rounded-lg p-12 flex justify-center items-center">
                <service.icon className="w-32 h-32 text-primary" />
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <Card className="border-primary/30">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Case Study: {service.caseStudy.title}</h3>
                <p className="text-lg">{service.caseStudy.content}</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
