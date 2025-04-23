import React, { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const socialLinks: SocialLink[] = [
    {
      name: 'Email',
      icon: <Mail size={24} />,
      url: 'mailto:raghavguptaji0@gmail.com',
      color: 'bg-red-500 hover:bg-red-600',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/raghav-gupta1504',
      color: 'bg-blue-700 hover:bg-blue-800',
    },
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/Raghavv-gupta/',
      color: 'bg-gray-800 hover:bg-gray-900',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-10 rounded-full"></div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                  <p className="mb-6">Open to collaborations, internships, or just a tech chat!</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail size={20} className="mr-3" />
                      <span>raghavguptaji0@gmail.com</span>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${link.color} p-3 rounded-full text-white transition-all duration-300 transform hover:scale-110`}
                          aria-label={link.name}
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  {/* Background shapes */}
                  <div className="absolute bottom-0 right-0 opacity-10">
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="100" r="100" fill="white" />
                    </svg>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="button"
                      className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;