
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import AnimatedSection from '@/components/AnimatedSection';
import { blogPosts } from '@/data/blogData';

const BlogsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Get unique categories
  const categories = useMemo(() => {
    const categorySet = new Set(blogPosts.map(post => post.category));
    return Array.from(categorySet);
  }, []);
  
  // Filter posts based on search query and selected category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === null || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/40 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Blog</h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Insights, news, and knowledge from our experts on sustainable technology and renewable energy solutions.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <AnimatedSection>
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Search</h2>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={100}>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Categories</h2>
                    <div className="space-y-2">
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${selectedCategory === null ? 'bg-primary text-white' : 'hover:bg-accent'}`}
                      >
                        All Categories
                      </button>
                      {categories.map((category, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedCategory(category)}
                          className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${selectedCategory === category ? 'bg-primary text-white' : 'hover:bg-accent'}`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
            
            {/* Blog Posts */}
            <div className="md:col-span-2">
              <div className="space-y-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <AnimatedSection key={post.id} delay={index * 100}>
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="md:flex">
                          <div className="md:w-1/3 aspect-video md:aspect-auto">
                            <img 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="p-6 md:w-2/3">
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">
                                {post.category}
                              </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <span className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {post.date}
                                </span>
                                <span className="flex items-center">
                                  <User className="w-4 h-4 mr-1" />
                                  {post.author}
                                </span>
                              </div>
                              <Link 
                                to={`/blog/${post.id}`}
                                className="text-primary font-medium hover:underline inline-flex items-center"
                              >
                                Read More
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="w-5 h-5 ml-1"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    </AnimatedSection>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
