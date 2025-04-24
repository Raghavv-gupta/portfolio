import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.from('.profile-image', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'center center',
          toggleActions: 'play none none reverse'
        }
      });

      // Text content animation
      gsap.from('.content-text', {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'center center',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-10 rounded-full"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 profile-image">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-1 rounded-2xl shadow-xl">
                <div className="bg-white p-4 rounded-xl h-full">
                  <div className="relative overflow-hidden rounded-lg aspect-square">
                  <img src={`${import.meta.env.BASE_URL}raghav-profile.jpg`} 
                  alt="Raghav Gupta" 
                  className="w-full h-full object-cover"
                  />

                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 space-y-6">
              <p className="content-text text-lg leading-relaxed text-gray-700">
                I'm a Computer Science undergrad at GLA University, Mathura.
              </p>
              <p className="content-text text-lg leading-relaxed text-gray-700">
                Passionate about full-stack development and strong in DSA, I'm constantly exploring new technologies and techniques to enhance my skills.
              </p>
              <p className="content-text text-lg leading-relaxed text-gray-700">
                Currently learning and building projects to grow my skills and create a strong foundation for my future career in technology.
              </p>
              
              <div className="pt-4">
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="content-text inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;