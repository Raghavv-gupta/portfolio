import React, { useEffect, useRef, useState } from 'react';
import { Code } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-10 rounded-full"></div>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600/20 p-4 rounded-full">
                  <Code size={48} className="text-blue-400" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">
                Projects coming soon!
              </h3>
              
              <p className="text-gray-300 mb-6">
                I'm currently working on ideas to build meaningful full-stack apps.
                Stay tuned for updates as I continue to develop my portfolio.
              </p>
              
              <div className="inline-flex items-center px-4 py-2 border border-blue-500 text-blue-400 rounded-full text-sm">
                In Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;