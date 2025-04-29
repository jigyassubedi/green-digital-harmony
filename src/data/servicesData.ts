
import { Sprout, Database, Cpu, LeafyGreen } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  icon: any;
  description: string;
  detailedDescription: string;
  features: string[];
  benefits: string[];
  caseStudy: {
    title: string;
    content: string;
  };
}

export const services: Service[] = [
  {
    id: "biogas",
    title: "Biogas Solutions",
    icon: Sprout,
    description: "Sustainable energy solutions through innovative biogas technology.",
    detailedDescription: "Our biogas solutions offer a renewable energy source that helps reduce waste, lower carbon emissions, and generate clean energy for various applications. With our cutting-edge technology, we provide end-to-end solutions from design to implementation and maintenance.",
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
      content: "We helped a large farm convert their agricultural waste into biogas, reducing their energy costs by 60% and providing a new revenue stream through excess energy sales to the grid. The system processes over 50 tons of waste daily, generating enough electricity to power 500 homes while significantly reducing the farm's methane emissions."
    }
  },
  {
    id: "data",
    title: "Data Feeding Services",
    icon: Database,
    description: "Comprehensive data solutions for e-commerce and business platforms.",
    detailedDescription: "Our data feeding services ensure your e-commerce platforms have accurate, up-to-date product information that drives sales and improves customer experience. We handle everything from data extraction and transformation to enrichment and distribution across multiple channels.",
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
      content: "An online retailer with over 50,000 products saw a 35% increase in product visibility and a 28% improvement in conversion rates after implementing our data feeding solution. Our automated system not only maintained perfect data accuracy across five different marketplaces but also reduced their catalog management time by 70%."
    }
  },
  {
    id: "it",
    title: "IT Services",
    icon: Cpu,
    description: "Comprehensive IT solutions for modern businesses.",
    detailedDescription: "We provide end-to-end IT services designed to optimize your technology infrastructure, enhance security, and support your business objectives. Our team of experts delivers tailored solutions that address your unique challenges while keeping you at the forefront of technological innovation.",
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
      content: "We helped a manufacturing company modernize their IT infrastructure, resulting in a 40% reduction in operational costs and a 25% improvement in production efficiency. By implementing cloud-based systems, automated workflows, and robust security measures, we enabled them to streamline operations and gain real-time insights into their production processes."
    }
  },
  {
    id: "consulting",
    title: "Green IT Consulting",
    icon: LeafyGreen,
    description: "Strategic guidance for sustainable technology practices.",
    detailedDescription: "Our consulting services help organizations implement environmentally responsible IT strategies that reduce environmental impact while improving efficiency. We provide actionable roadmaps and expertise to help you achieve your sustainability goals without compromising on performance or reliability.",
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
      content: "A financial services firm implemented our green IT recommendations, reducing their data center energy consumption by 45% and achieving their carbon neutrality goals two years ahead of schedule. Our comprehensive approach included hardware optimization, cooling system redesign, and renewable energy integration, all while maintaining 99.999% system availability."
    }
  }
];
