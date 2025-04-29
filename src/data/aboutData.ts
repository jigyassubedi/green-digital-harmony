
export interface AboutSection {
  id: string;
  title: string;
  description: string;
  content: string;
  image?: string;
}

export const aboutSections: AboutSection[] = [
  {
    id: "company",
    title: "Our Company",
    description: "Learn about our history, mission, and values",
    content: `
      <h2>Our Story</h2>
      <p>Founded in 2018, QPr started with a simple mission: to bridge the gap between cutting-edge technology and sustainable practices. We recognized that the digital revolution, while transformative, was also contributing significantly to global energy consumption and environmental challenges.</p>
      
      <p>Our founders, a diverse team of experts from IT infrastructure, renewable energy, and business development backgrounds, came together with a shared vision. They wanted to create a company that would not only provide top-tier IT services but would do so in a way that prioritizes environmental responsibility and sustainability.</p>
      
      <p>In our early years, we focused on helping businesses reduce their IT carbon footprint through energy-efficient infrastructure and optimized data management practices. As we grew, we expanded our offerings to include renewable energy solutions, particularly in the biogas sector, recognizing the powerful synergies between sustainable energy production and responsible IT management.</p>
      
      <h2>Our Mission</h2>
      <p>To revolutionize the IT industry by integrating sustainable practices and renewable energy solutions, providing clients with high-performance technology services that minimize environmental impact while maximizing business success.</p>
      
      <h2>Our Values</h2>
      <ul>
        <li><strong>Environmental Responsibility:</strong> We place environmental considerations at the core of every decision we make and solution we provide.</li>
        <li><strong>Technological Excellence:</strong> We pursue the highest standards of technical performance and reliability in all our services.</li>
        <li><strong>Transparency and Integrity:</strong> We maintain honest relationships with our clients, partners, and team members, openly sharing information and upholding ethical standards.</li>
        <li><strong>Continuous Innovation:</strong> We constantly seek new approaches and technologies that can enhance both business outcomes and environmental sustainability.</li>
        <li><strong>Client-Centered Solutions:</strong> We believe in tailoring our services to meet each client's specific needs and goals rather than offering one-size-fits-all solutions.</li>
      </ul>
      
      <h2>Our Approach</h2>
      <p>At QPr, we take a holistic view of technology and sustainability. We understand that true environmental responsibility requires considering the entire lifecycle of IT systems—from procurement to disposal—as well as the energy sources that power them.</p>
      
      <p>We work closely with each client to understand their unique challenges and objectives, developing customized solutions that balance performance, cost, and environmental impact. Our interdisciplinary team brings together expertise in IT infrastructure, renewable energy, data management, and sustainability strategy to create truly integrated approaches.</p>
      
      <p>As we look to the future, we remain committed to pushing the boundaries of what's possible in sustainable technology. We're continually researching new approaches, forming strategic partnerships, and investing in emerging technologies that can help our clients thrive while contributing to a healthier planet.</p>
    `,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
  },
  {
    id: "director",
    title: "Director's Message",
    description: "A personal message from our company director",
    content: "" // This is handled by the DirectorMessage component
  },
  {
    id: "team",
    title: "Our Team",
    description: "Meet the dedicated professionals behind our success",
    content: `
      <h2>Leadership Team</h2>
      <p>Our company is led by a diverse group of experts with deep experience in their respective fields. Together, they guide our strategic direction and ensure that we maintain our commitment to excellence, innovation, and sustainability.</p>
      
      <h3>Jane Doe - Chief Executive Officer</h3>
      <p>With over 15 years of experience in sustainable technology, Jane leads our company's vision and strategy. Her background includes leadership roles at several technology firms, where she consistently drove initiatives that balanced technological innovation with environmental responsibility. Jane holds a Master's degree in Environmental Engineering and an MBA from prestigious universities.</p>
      
      <h3>John Smith - Chief Technology Officer</h3>
      <p>John oversees our technical direction, ensuring that we stay at the cutting edge of IT infrastructure and renewable energy technologies. Before joining QPr, he led the development of cloud optimization solutions that reduced energy consumption by 40% while improving performance. John has multiple patents in energy-efficient computing and is a regular speaker at industry conferences.</p>
      
      <h3>Sarah Johnson - Sustainability Director</h3>
      <p>Sarah ensures that environmental considerations are integrated into all our operations and services. With a Ph.D. in Environmental Science and previous experience as a sustainability consultant for Fortune 500 companies, she brings rigorous analytical skills and practical knowledge to our sustainability initiatives. Sarah leads our carbon accounting efforts and environmental compliance programs.</p>
      
      <h2>Our Experts</h2>
      <p>Beyond our leadership team, QPr employs specialists in various technical and business domains. From IT architects to biogas engineers, data scientists to client success managers, our team members share a commitment to our mission and values.</p>
      
      <p>We invest heavily in ongoing professional development, ensuring that our team stays current with emerging technologies and sustainability best practices. Regular knowledge-sharing sessions, conference attendance, and training programs help maintain our position at the forefront of our industry.</p>
      
      <p>We also maintain a diverse and inclusive workplace, recognizing that varied perspectives lead to more innovative solutions and better outcomes for our clients. Our team members come from different backgrounds, cultures, and career paths, enriching our company culture and expanding our capabilities.</p>
    `,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1741&q=80"
  }
];
