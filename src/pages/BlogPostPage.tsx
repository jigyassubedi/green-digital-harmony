
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPost from '@/components/BlogPost';
import { blogPosts } from '@/data/blogData';

const BlogPostPage: React.FC = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  
  // Find the blog post with the matching ID
  const blog = blogPosts.find(post => post.id.toString() === blogId);
  
  // If blog post not found, redirect to blogs page
  useEffect(() => {
    if (!blog) {
      navigate('/blog');
    }
  }, [blog, navigate]);
  
  if (!blog) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogPost blog={blog} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
