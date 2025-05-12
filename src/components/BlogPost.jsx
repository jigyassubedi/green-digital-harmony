
import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';
import { Card } from '@/components/ui/card';

const BlogPost = ({ blog }) => {
  return (
    <Card className="bg-white overflow-hidden shadow-lg">
      {/* Hero Image */}
      <div className="w-full h-72 md:h-96 relative">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
          <div className="flex items-center space-x-4 text-white mb-3">
            <div className="flex items-center text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {blog.date}
            </div>
            <div className="flex items-center text-sm">
              <User className="w-4 h-4 mr-1" />
              {blog.author}
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white">{blog.title}</h1>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 md:p-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {blog.tags.map((tag, index) => (
            <div 
              key={index}
              className="flex items-center px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </div>
          ))}
        </div>
        
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        {/* Author Info */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img 
                src={`https://i.pravatar.cc/300?u=${blog.author}`} 
                alt={blog.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold">{blog.author}</h4>
              <p className="text-muted-foreground">Writer & Researcher</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BlogPost;
