
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AnimatedSection from '@/components/AnimatedSection';
import { Calendar, User, ArrowRight, Tag, Search } from 'lucide-react';
import BlogPost from '@/components/BlogPost';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Green Computing: Trends to Watch',
    excerpt: 'Explore emerging technologies that are making IT infrastructure more sustainable and energy efficient.',
    content: `
      <p>As the digital world continues to expand, so does its environmental footprint. Data centers alone consume approximately 1% of global electricity, and this figure is projected to rise significantly in the coming years. The good news is that the tech industry is increasingly aware of this challenge and is developing innovative solutions to address it.</p>
      
      <h2>Renewable Energy Integration</h2>
      <p>One of the most promising trends in green computing is the integration of renewable energy sources. Tech giants like Google and Microsoft have made commitments to power their data centers with 100% renewable energy. This isn't just about installing solar panels on office buildings—it involves sophisticated energy purchasing agreements, investment in new renewable energy projects, and advanced power management systems.</p>
      
      <h2>Energy-Efficient Hardware</h2>
      <p>The hardware itself is becoming more energy-efficient. Modern processors use dynamic power management to adjust their energy consumption based on workload. Memory and storage components are also being redesigned to use less power without sacrificing performance.</p>
      
      <h2>AI-Powered Optimization</h2>
      <p>Artificial intelligence is playing a crucial role in optimizing data center operations. AI algorithms can predict cooling needs, manage workload distribution, and identify energy inefficiencies in real-time, often reducing energy consumption by 15-30%.</p>
      
      <h2>Circular Economy Practices</h2>
      <p>The concept of a circular economy is gaining traction in IT hardware management. This involves designing products for longevity, repairability, and eventual recycling. Companies are increasingly offering take-back programs and refurbished options, reducing the environmental impact of manufacturing and disposal.</p>
      
      <h2>What This Means for Businesses</h2>
      <p>For businesses looking to reduce their environmental impact, these trends present both opportunities and challenges. Adopting green computing practices often requires upfront investment but can lead to significant cost savings over time through reduced energy consumption and more efficient resource use.</p>
      
      <p>Moreover, as consumers and stakeholders become more environmentally conscious, a company's green credentials can become a competitive advantage. Organizations that lead in sustainable IT practices not only contribute to environmental protection but often see benefits in terms of brand reputation and customer loyalty.</p>
      
      <p>As we move forward, the intersection of technology and sustainability will continue to be a critical area of innovation and competition. Businesses that stay ahead of these trends will be well-positioned for success in an increasingly eco-conscious marketplace.</p>
    `,
    date: 'Oct 12, 2023',
    author: 'Emma Green',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Green Computing',
    tags: ['Sustainability', 'IT Infrastructure', 'Energy Efficiency']
  },
  {
    id: 2,
    title: 'How AI is Optimizing Energy Usage in Modern Data Centers',
    excerpt: 'Artificial intelligence is revolutionizing how data centers manage power consumption and cooling systems.',
    content: `
      <p>Data centers are the backbone of our digital world, but they're also significant energy consumers. As global data usage continues to surge, finding ways to make these facilities more energy-efficient has become a critical challenge. This is where artificial intelligence is making a revolutionary impact.</p>
      
      <h2>The AI Advantage in Energy Management</h2>
      <p>Traditional data center energy management relies on pre-set rules and human oversight. AI systems, however, can continuously analyze thousands of data points in real-time, identifying patterns and optimization opportunities that might escape even the most attentive human operators.</p>
      
      <h2>Predictive Cooling Optimization</h2>
      <p>Cooling typically accounts for about 40% of a data center's energy consumption. AI systems can predict heat generation based on workload forecasts and adjust cooling systems proactively rather than reactively. Google's implementation of DeepMind AI for cooling optimization resulted in a remarkable 40% reduction in cooling energy costs.</p>
      
      <h2>Workload Management</h2>
      <p>AI can distribute computing tasks across servers in ways that maximize energy efficiency. This might involve consolidating tasks onto fewer servers during periods of low demand, allowing unused servers to enter low-power states, or shifting compute-intensive tasks to times when renewable energy is most abundant.</p>
      
      <h2>Preventive Maintenance</h2>
      <p>AI systems excel at detecting subtle anomalies that might indicate developing problems. By identifying and addressing issues before they cause failures, these systems prevent the energy waste associated with hardware malfunctions and emergency repairs.</p>
      
      <h2>Real-World Success Stories</h2>
      <p>Major cloud providers have reported energy savings of 15-30% after implementing AI-driven energy optimization. These improvements translate not only to cost savings but also to significant reductions in carbon emissions.</p>
      
      <h2>The Path Forward</h2>
      <p>As AI technology continues to evolve, we can expect even more sophisticated energy optimization strategies. The next frontier involves combining AI insights with renewable energy sources, creating truly sustainable data centers that minimize both energy consumption and carbon footprint.</p>
      
      <p>For businesses running their own data centers or selecting cloud providers, understanding and leveraging these AI-driven efficiencies is becoming an essential aspect of responsible and cost-effective IT management.</p>
    `,
    date: 'Sep 28, 2023',
    author: 'David Tech',
    image: 'https://images.unsplash.com/photo-1607292798090-a143ee885830?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'AI Technology',
    tags: ['Artificial Intelligence', 'Data Centers', 'Energy Optimization']
  },
  {
    id: 3,
    title: 'Case Study: Reducing Carbon Footprint Through Smart IT Choices',
    excerpt: 'Learn how one company decreased their emissions by 75% through strategic technology investments.',
    content: `
      <p>When manufacturing giant IndusTech decided to overhaul their IT infrastructure in 2021, reducing costs was their primary goal. Little did they know that their technology transformation would also lead to one of their most significant environmental achievements to date: a 75% reduction in IT-related carbon emissions in just 18 months.</p>
      
      <h2>The Challenge</h2>
      <p>IndusTech was operating with a fragmented, aging IT infrastructure spread across multiple on-premises data centers. Their setup was not only costly to maintain but also highly inefficient in terms of energy usage. As part of their broader corporate responsibility goals, they wanted to address their technology carbon footprint while improving business operations.</p>
      
      <h2>The Solution</h2>
      <p>Working with our sustainability and IT teams, IndusTech developed a comprehensive strategy with several key components:</p>
      
      <h3>1. Cloud Migration with a Green Perspective</h3>
      <p>Rather than simply lifting and shifting to the cloud, IndusTech carefully evaluated cloud providers based on both performance and environmental credentials. They selected a provider with data centers powered by 100% renewable energy and designed their cloud architecture to maximize efficiency.</p>
      
      <h3>2. Hardware Refresh with Lifecycle Assessment</h3>
      <p>For equipment that needed to remain on-premises, IndusTech conducted full lifecycle carbon assessments of potential hardware options. This approach sometimes led them to select equipment with slightly higher upfront costs but significantly better energy efficiency and longer service lives.</p>
      
      <h3>3. IoT-Powered Energy Management</h3>
      <p>The company deployed IoT sensors throughout their facilities to monitor and optimize energy usage in real-time. This system automatically adjusted cooling, identified energy waste, and provided actionable insights for further improvements.</p>
      
      <h2>The Results</h2>
      <p>After 18 months of implementation:</p>
      <ul>
        <li>IT-related energy consumption decreased by 68%</li>
        <li>Carbon emissions from IT operations fell by 75% (accounting for both direct energy savings and the shift to renewable energy sources)</li>
        <li>Overall IT costs were reduced by 41%</li>
      </ul>
      
      <h2>Beyond the Numbers</h2>
      <p>The benefits extended beyond environmental metrics. IndusTech reported improved system performance, enhanced disaster recovery capabilities, and greater flexibility to scale resources based on business needs. Additionally, the company's strengthened environmental credentials helped them secure contracts with increasingly eco-conscious clients.</p>
      
      <h2>Key Takeaways</h2>
      <p>IndusTech's experience demonstrates that environmental responsibility and business performance can go hand in hand when it comes to IT choices. Their success was built on a holistic approach that considered the entire technology lifecycle and integrated sustainability into every decision point.</p>
      
      <p>For organizations looking to follow a similar path, the message is clear: With strategic planning and the right expertise, reducing your IT carbon footprint can deliver both environmental and business benefits.</p>
    `,
    date: 'Sep 15, 2023',
    author: 'Sarah Miller',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'Case Studies',
    tags: ['Carbon Reduction', 'Sustainability Strategy', 'Business Impact']
  },
  {
    id: 4,
    title: 'Biogas Innovation: Transforming Waste into Valuable Energy',
    excerpt: "Explore the latest advancements in biogas technology and how they're creating new opportunities in renewable energy.",
    content: `
      <p>In the quest for sustainable energy solutions, biogas has emerged as a particularly promising option. Unlike solar or wind energy, biogas technology turns what would otherwise be waste—agricultural residues, food scraps, manure, and more—into valuable energy resources. Recent innovations are making biogas systems more efficient, versatile, and economically viable than ever before.</p>
      
      <h2>The Evolution of Biogas Technology</h2>
      <p>Biogas isn't new—the basic process of anaerobic digestion has been understood for centuries. However, modern technology has transformed these systems from simple waste management tools into sophisticated energy production facilities.</p>
      
      <h2>Key Innovations</h2>
      
      <h3>1. Advanced Pre-treatment Technologies</h3>
      <p>New mechanical, thermal, and biological pre-treatment methods are breaking down complex organic materials more effectively, increasing gas yields by 25-40% compared to conventional systems.</p>
      
      <h3>2. Modular and Scalable Systems</h3>
      <p>Today's biogas plants can start small and scale up as needed. Modular designs allow farms, communities, or businesses to begin with a capacity that matches their current needs and budget, then expand as they see the benefits.</p>
      
      <h3>3. Biogas Upgrading to Biomethane</h3>
      <p>Technologies that upgrade biogas to biomethane (equivalent to natural gas) are becoming more affordable and efficient. This allows the gas to be injected directly into existing natural gas networks or used as vehicle fuel, greatly expanding its applications.</p>
      
      <h3>4. Digital Monitoring and Control</h3>
      <p>Smart sensors and control systems are optimizing the digestion process in real-time. These systems monitor temperature, pH levels, gas composition, and other critical parameters, adjusting conditions to maximize gas production and quality.</p>
      
      <h2>Real-World Applications</h2>
      <p>These innovations are enabling exciting applications across various sectors:</p>
      
      <h3>Agricultural Solutions</h3>
      <p>Farms are installing biogas systems that not only generate energy but also produce high-quality fertilizer as a byproduct. This creates dual revenue streams while reducing the environmental impact of agricultural waste.</p>
      
      <h3>Urban Waste Management</h3>
      <p>Cities are integrating biogas facilities into their waste management systems, turning municipal organic waste into power for local use or selling it back to the grid.</p>
      
      <h3>Industrial Applications</h3>
      <p>Food processing facilities and other industries with organic waste streams are using biogas to reduce their energy costs and carbon footprint simultaneously.</p>
      
      <h2>The Broader Impact</h2>
      <p>Beyond the immediate energy benefits, biogas systems contribute to sustainability in multiple ways. They reduce methane emissions that would otherwise be released by decomposing organic matter, help manage waste that might otherwise end up in landfills, and can reduce dependence on chemical fertilizers.</p>
      
      <p>As these technologies continue to advance and become more accessible, we can expect biogas to play an increasingly important role in our renewable energy portfolio and circular economy efforts.</p>
    `,
    date: 'Aug 22, 2023',
    author: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80',
    category: 'Renewable Energy',
    tags: ['Biogas', 'Waste Management', 'Sustainable Technology']
  },
  {
    id: 5,
    title: 'E-commerce Data Management: Best Practices for 2023',
    excerpt: "Key strategies to optimize your product data and drive higher conversions in today's competitive online marketplace.",
    content: `
      <p>In the rapidly evolving world of e-commerce, product data has emerged as one of the most critical assets for online retailers. High-quality, well-structured product information doesn't just improve the customer experience—it directly impacts search visibility, conversion rates, and ultimately, your bottom line.</p>
      
      <h2>The Data Challenge in Modern E-commerce</h2>
      <p>Today's e-commerce businesses face unprecedented data challenges: multiple sales channels, each with unique requirements; customers who expect detailed, accurate information; and an increasingly competitive landscape where the quality of product data can be a key differentiator.</p>
      
      <h2>Best Practices for 2023</h2>
      
      <h3>1. Implement a Product Information Management (PIM) System</h3>
      <p>A dedicated PIM system serves as a central hub for all your product data, ensuring consistency across channels and simplifying updates. Modern PIM solutions offer advanced features like automated validation, digital asset management, and channel-specific formatting.</p>
      
      <h3>2. Structure Data for Omnichannel Success</h3>
      <p>Rather than creating channel-specific data sets, build a comprehensive "master data" repository that can be automatically adapted to different channel requirements. This approach saves time and reduces errors when expanding to new marketplaces or platforms.</p>
      
      <h3>3. Enrich Product Descriptions with AI</h3>
      <p>AI-powered tools can help scale your content creation, generate SEO-friendly descriptions, and even tailor content to different audience segments. While human oversight remains important, AI can dramatically improve efficiency in content production.</p>
      
      <h3>4. Leverage Enhanced Product Attributes</h3>
      <p>Go beyond basic specifications to include attributes that influence purchasing decisions: sustainability information, compatibility data, detailed measurements, and use-case scenarios. These enhanced attributes improve search relevance and help customers make informed decisions.</p>
      
      <h3>5. Implement Rigorous Data Quality Controls</h3>
      <p>Establish automated validation rules, regular data audits, and clear governance processes. Even minor data errors can lead to returns, negative reviews, or lost sales—making quality control an essential investment.</p>
      
      <h2>Measuring Success</h2>
      <p>The impact of improved data management should be measured across multiple dimensions:</p>
      <ul>
        <li>Conversion rate improvements</li>
        <li>Reduction in product returns</li>
        <li>Search ranking improvements</li>
        <li>Time saved in data management processes</li>
        <li>Channel expansion capacity</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>As e-commerce continues to evolve, product data will only become more important. Emerging trends like visual search, voice commerce, and augmented reality shopping experiences all rely on robust, well-structured product data.</p>
      
      <p>By implementing these best practices now, retailers can not only improve current performance but also build the foundation for adopting future innovations in the e-commerce landscape.</p>
    `,
    date: 'Aug 05, 2023',
    author: 'Jennifer Patel',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80',
    category: 'E-commerce',
    tags: ['Data Management', 'Online Retail', 'Product Information']
  },
  {
    id: 6,
    title: 'The ROI of Sustainable IT: Measuring Business Impact',
    excerpt: 'How to quantify the financial and strategic benefits of investing in environmentally responsible IT practices.',
    content: `
      <p>As businesses increasingly adopt sustainable IT practices, a question frequently arises in boardrooms: What's the return on investment? While the environmental benefits of green IT are well-documented, building a strong business case requires demonstrating tangible financial and strategic returns.</p>
      
      <h2>Beyond Cost Savings: A Comprehensive ROI Framework</h2>
      <p>Traditional ROI calculations for sustainable IT often focus narrowly on energy cost savings. While these savings are significant—typically ranging from 20-40% for comprehensive green IT initiatives—the full business value extends much further.</p>
      
      <h2>Direct Financial Benefits</h2>
      
      <h3>1. Energy Cost Reduction</h3>
      <p>Energy-efficient hardware, optimized data centers, and smart power management can substantially reduce electricity costs. For organizations with large IT operations, these savings often amount to hundreds of thousands of dollars annually.</p>
      
      <h3>2. Hardware Lifecycle Extension</h3>
      <p>Sustainable IT practices often include optimizing hardware usage and maintenance, extending the useful life of equipment by 1-2 years on average. This reduces capital expenditure on replacement devices and maximizes return on existing investments.</p>
      
      <h3>3. Space Utilization Improvements</h3>
      <p>Consolidating servers through virtualization and adopting more efficient storage solutions can reduce data center space requirements by up to 75%, translating to significant savings in facility costs.</p>
      
      <h2>Strategic and Indirect Benefits</h2>
      
      <h3>1. Regulatory Compliance and Risk Mitigation</h3>
      <p>As environmental regulations become more stringent worldwide, sustainable IT practices help avoid potential fines and compliance costs. Forward-thinking organizations are valuing this "insurance policy" aspect in their ROI calculations.</p>
      
      <h3>2. Brand Value and Customer Preference</h3>
      <p>Research shows that 73% of consumers consider a company's environmental impact in their purchasing decisions. Companies with demonstrated sustainability credentials can command premium pricing and enjoy stronger customer loyalty.</p>
      
      <h3>3. Talent Acquisition and Retention</h3>
      <p>Environmental commitment increasingly influences employment choices, particularly among younger professionals. Organizations with strong sustainability programs report 55% better morale and 38% better employee retention.</p>
      
      <h2>Measuring and Communicating ROI</h2>
      <p>To effectively measure sustainable IT ROI:</p>
      
      <h3>Establish Clear Baselines</h3>
      <p>Document current energy usage, costs, hardware lifecycles, and other relevant metrics before implementing sustainable IT initiatives.</p>
      
      <h3>Track Multiple Value Streams</h3>
      <p>Create a balanced scorecard that includes both direct financial returns and strategic benefits, with appropriate metrics for each.</p>
      
      <h3>Consider Time Horizons</h3>
      <p>Some sustainable IT investments show returns quickly, while others deliver value over longer periods. A comprehensive ROI model should account for different timelines.</p>
      
      <h2>Case Example: Financial Services Firm</h2>
      <p>A mid-sized financial services company implemented a comprehensive sustainable IT program with the following three-year results:</p>
      <ul>
        <li>$420,000 in direct energy savings</li>
        <li>$350,000 in deferred hardware replacement costs</li>
        <li>23% reduction in IT-related carbon emissions</li>
        <li>15% improvement in employee satisfaction scores</li>
        <li>New business attributed to improved sustainability credentials: $1.2 million</li>
      </ul>
      
      <p>Their total investment of $580,000 yielded financial returns exceeding $1.9 million—a 330% ROI over three years, not counting the less tangible benefits.</p>
      
      <h2>Conclusion</h2>
      <p>When properly measured and communicated, sustainable IT initiatives typically deliver ROI that meets or exceeds other business investments. By adopting a comprehensive approach to valuation, organizations can build compelling business cases that align environmental responsibility with financial and strategic success.</p>
    `,
    date: 'Jul 19, 2023',
    author: 'Robert Johnson',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80',
    category: 'Business Strategy',
    tags: ['ROI', 'Green IT', 'Business Case']
  }
];

const BlogsPage: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = React.useState<number | null>(null);
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPosts = searchTerm 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : blogPosts;

  const activeBlog = selectedBlog !== null 
    ? blogPosts.find(post => post.id === selectedBlog) 
    : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-24">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/40 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Blog</h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Stay updated with the latest news and insights in sustainable IT and green energy solutions.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {selectedBlog === null ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((blog) => (
                  <AnimatedSection 
                    key={blog.id} 
                    delay={blog.id * 100}
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
                      
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {blog.tags.slice(0, 2).map((tag, idx) => (
                            <div key={idx} className="flex items-center px-2 py-1 bg-primary/10 rounded text-xs font-medium text-primary">
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </div>
                          ))}
                          {blog.tags.length > 2 && <span className="text-xs text-muted-foreground">+{blog.tags.length - 2}</span>}
                        </div>
                        
                        <Button
                          variant="ghost"
                          className="text-primary font-medium p-0 hover:bg-transparent hover:text-primary/80 group"
                          onClick={() => setSelectedBlog(blog.id)}
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-medium mb-2">No articles found</h3>
                  <p className="text-muted-foreground">Try a different search term</p>
                </div>
              )}
            </>
          ) : (
            <AnimatedSection>
              <Button
                variant="outline"
                className="mb-6"
                onClick={() => setSelectedBlog(null)}
              >
                ← Back to All Articles
              </Button>
              
              {activeBlog && <BlogPost blog={activeBlog} />}
            </AnimatedSection>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
