import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSeHFkrvVhhuhpCEMwTy3svxxWKJbN3ccBRekW5QGa37LEdnHg/formResponse";

    // Google Form field entry IDs (replace with your actual field entry IDs)
    const formData = new FormData();
    formData.append("entry.545678361", formState.name); // Replace "entry.123456" with the actual field name for the name
    formData.append("entry.1852633169", formState.email); // Replace "entry.7891011" with the actual field name for the email
    formData.append("entry.1484772172", formState.message); // Replace "entry.112233" with the actual field name for the message

    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Required to bypass CORS issue
      });

      // Assume success since Google Forms doesn't return a response
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting the form", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-4 bg-background">
      <div className="section-container">
        <AnimatedSection className="text-center mb-2">
          <div className="flex justify-center items-center w-full mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wider text-center">
              Get In Touch
            </h1>
          </div>
          <p className="section-subtitle mx-auto max-w-3xl">
            Have questions about our sustainable IT solutions? Want to learn how we can help your business reduce its carbon footprint? Reach out to us today.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12">
          <AnimatedSection className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <CheckCircle className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for contacting us. We'll respond to your inquiry shortly.</p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="mr-2 w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </button>
                </>
              )}
            </form>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex">
                  <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:qualitypractices@outlook.com" className="text-muted-foreground hover:text-primary">
                      qualitypractices@outlook.com
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <a href="tel:+9779851444440" className="text-muted-foreground hover:text-primary">
                      +977 985 144 4440
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
