
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DirectorMessage from '@/components/DirectorMessage';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedSection from '@/components/AnimatedSection';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/40 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About QPr</h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Learn more about our company, our mission, and the people who make it all possible.
            </p>
          </div>
        </div>
        
        {/* Tabs Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Tabs defaultValue="company" className="w-full">
            <TabsList className="w-full flex justify-center mb-8">
              <TabsTrigger value="company" className="text-lg px-6">Our Company</TabsTrigger>
              <TabsTrigger value="director" className="text-lg px-6">Director's Message</TabsTrigger>
              <TabsTrigger value="team" className="text-lg px-6">Our Team</TabsTrigger>
            </TabsList>
            
            <TabsContent value="company">
              <AnimatedSection className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg mb-4">
                      Founded in 2018, QPr started with a simple mission: to bridge the gap between cutting-edge technology and sustainable practices. We recognized that the digital revolution, while transformative, was also contributing significantly to global energy consumption and environmental challenges.
                    </p>
                    <p className="text-lg mb-4">
                      Our founders, a diverse team of experts from IT infrastructure, renewable energy, and business development backgrounds, came together with a shared vision. They wanted to create a company that would not only provide top-tier IT services but would do so in a way that prioritizes environmental responsibility and sustainability.
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80" 
                      alt="QPr team meeting" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={100}>
                <h2 className="text-3xl font-semibold mb-6">Our Mission & Values</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="bg-accent/20 p-8 rounded-lg">
                    <h3 className="text-xl font-medium mb-4">Our Mission</h3>
                    <p className="text-lg">
                      To revolutionize the IT industry by integrating sustainable practices and renewable energy solutions, providing clients with high-performance technology services that minimize environmental impact while maximizing business success.
                    </p>
                  </div>
                  <div className="bg-accent/20 p-8 rounded-lg">
                    <h3 className="text-xl font-medium mb-4">Our Values</h3>
                    <ul className="list-disc pl-5 space-y-2 text-lg">
                      <li>Environmental Responsibility</li>
                      <li>Technological Excellence</li>
                      <li>Transparency and Integrity</li>
                      <li>Continuous Innovation</li>
                      <li>Client-Centered Solutions</li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>
            
            <TabsContent value="director">
              <DirectorMessage />
            </TabsContent>
            
            <TabsContent value="team">
              <AnimatedSection>
                <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Jane Doe",
                      position: "Chief Executive Officer",
                      bio: "With over 15 years in sustainable technology, Jane leads our company vision and strategy.",
                      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                      name: "John Smith",
                      position: "Chief Technology Officer",
                      bio: "John oversees our technical direction, ensuring we stay at the cutting edge of IT infrastructure.",
                      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                      name: "Sarah Johnson",
                      position: "Sustainability Director",
                      bio: "Sarah ensures that environmental considerations are integrated into all our operations and services.",
                      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
                    }
                  ].map((member, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                        <p className="text-primary font-medium mb-3">{member.position}</p>
                        <p className="text-muted-foreground">{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
