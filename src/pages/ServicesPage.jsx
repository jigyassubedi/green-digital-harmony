
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedSection from '@/components/AnimatedSection';
import { Sprout, Database, Cpu, LeafyGreen, ArrowRight, Check } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: "biogas",
      title: "Biogas Solutions",
      icon: Sprout,
      description: "Sustainable energy solutions through innovative biogas technology.",
      detailedDescription: "Our biogas solutions offer a renewable energy source that helps reduce waste, lower carbon emissions, and generate clean energy for various applications.",
      features: [
        "Waste-to-Energy Conversion Systems",
        "Biogas Plant Design and Installation",
        "Biogas Upgrading Technology",
        "Methane Recovery Solutions",
        "Custom Anaerobic Digestion Systems"
      ],
      benefits: [
        "Reduced Carbon Footprint",
        "Waste Management Solution",
        "Renewable Energy Generation",
        "Potential Revenue Stream",
        "Regulatory Compliance Support"
      ],
      caseStudy: {
        title: "Agricultural Waste Transformation",
        content: "We helped a large farm convert their agricultural waste into biogas, reducing their energy costs by 60% and providing a new revenue stream through excess energy sales to the grid."
      }
    },
    {
      id: "data",
      title: "Data Feeding Services",
      icon: Database,
      description: "Comprehensive data solutions for e-commerce and business platforms.",
      detailedDescription: "Our data feeding services ensure your e-commerce platforms have accurate, up-to-date product information that drives sales and improves customer experience.",
      features: [
        "Product Data Management",
        "Multi-channel Data Distribution",
        "Automated Data Updates",
        "Data Quality Control",
        "Custom Data Integration Solutions"
      ],
      benefits: [
        "Improved Product Discoverability",
        "Reduced Manual Data Entry",
        "Consistent Product Information",
        "Enhanced Customer Experience",
        "Increased Sales Conversion"
      ],
      caseStudy: {
        title: "E-commerce Catalog Optimization",
        content: "An online retailer with over 50,000 products saw a 35% increase in product visibility and a 28% improvement in conversion rates after implementing our data feeding solution."
      }
    },
    {
      id: "it",
      title: "IT Services",
      icon: Cpu,
      description: "Comprehensive IT solutions for modern businesses.",
      detailedDescription: "We provide end-to-end IT services designed to optimize your technology infrastructure, enhance security, and support your business objectives.",
      features: [
        "Cloud Infrastructure Management",
        "Network Design & Implementation",
        "Cybersecurity Solutions",
        "IT Consulting & Strategy",
        "24/7 Technical Support"
      ],
      benefits: [
        "Optimized IT Operations",
        "Reduced Downtime",
        "Enhanced Security Posture",
        "Cost-Effective Solutions",
        "Scalable Infrastructure"
      ],
      caseStudy: {
        title: "Digital Transformation for Manufacturing",
        content: "We helped a manufacturing company modernize their IT infrastructure, resulting in a 40% reduction in operational costs and a 25% improvement in production efficiency."
      }
    },
    {
      id: "consulting",
      title: "Green IT Consulting",
      icon: LeafyGreen,
      description: "Strategic guidance for sustainable technology practices.",
      detailedDescription: "Our consulting services help organizations implement environmentally responsible IT strategies that reduce environmental impact while improving efficiency.",
      features: [
        "Sustainability Assessments",
        "Green IT Roadmaps",
        "Energy Efficiency Analysis",
        "Sustainable Procurement Guidance",
        "Environmental Compliance Support"
      ],
      benefits: [
        "Reduced Energy Consumption",
        "Lower Operational Costs",
        "Enhanced Corporate Responsibility",
        "Regulatory Compliance",
        "Improved Brand Reputation"
      ],
      caseStudy: {
        title: "Corporate Sustainability Initiative",
        content: "A financial services firm implemented our green IT recommendations, reducing their data center energy consumption by 45% and achieving their carbon neutrality goals two years ahead of schedule."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/40 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services</h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Discover our comprehensive range of services designed to help your business thrive while minimizing environmental impact.
            </p>
          </div>
        </div>
        
        {/* Services Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Tabs defaultValue="biogas" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 flex-wrap">
              {services.map(service => (
                <TabsTrigger key={service.id} value={service.id} className="text-lg px-6">
                  <service.icon className="w-5 h-5 mr-2" />
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {services.map(service => (
              <TabsContent key={service.id} value={service.id}>
                <AnimatedSection>
                  <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                    <div>
                      <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
                      <p className="text-lg mb-6">{service.detailedDescription}</p>
                      <a href="#contact" className="btn-primary inline-flex items-center">
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
                      <CardHeader>
                        <CardTitle>Key Features</CardTitle>
                        <CardDescription>What our service includes</CardDescription>
                      </CardHeader>
                      <CardContent>
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
                      <CardHeader>
                        <CardTitle>Benefits</CardTitle>
                        <CardDescription>How you'll benefit from our service</CardDescription>
                      </CardHeader>
                      <CardContent>
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
                    <CardHeader>
                      <CardTitle>Case Study: {service.caseStudy.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg">{service.caseStudy.content}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
