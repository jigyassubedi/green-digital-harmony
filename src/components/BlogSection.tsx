
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const blogs = [
  {
    title: 'The Future of Green Computing: Trends to Watch',
    excerpt: 'Explore emerging technologies that are making IT infrastructure more sustainable and energy efficient.',
    date: 'Oct 12, 2023',
    author: 'Emma Green',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    title: 'How AI is Optimizing Energy Usage in Modern Data Centers',
    excerpt: 'Artificial intelligence is revolutionizing how data centers manage power consumption and cooling systems.',
    date: 'Sep 28, 2023',
    author: 'David Tech',
    image: 'https://images.unsplash.com/photo-1607292798090-a143ee885830?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  },
  {
    title: 'Case Study: Reducing Carbon Footprint Through Smart IT Choices',
    excerpt: 'Learn how one company decreased their emissions by 75% through strategic technology investments.',
    date: 'Sep 15, 2023',
    author: 'Sarah Miller',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-10 bg-accent/30">
      <div className="section-container">
      <div className="flex justify-center items-center w-full mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wider text-center">
           Our Blog
          </h1>
        </div>
        <AnimatedSection className="text-center mb-8">
          
          {/* <h2 className="section-title">
            Latest Insights & Trends
          </h2> */}
          <p className="section-subtitle mx-auto max-w-3xl">
            Stay updated with the latest news and insights in sustainable IT and green energy solutions.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 100}
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blog.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {blog.author}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{blog.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{blog.excerpt}</p>
                <a 
                  href="#" 
                  className="text-primary font-medium inline-flex items-center group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="text-center mt-10">
          <a href="#" className="btn-secondary">
            View All Articles
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BlogSection;
