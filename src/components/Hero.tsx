import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import TypingEffect from './TypingEffect';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(contentRef.current, {
        y: 100,
        opacity: 0
      });

      // Hero section animation
      gsap.to(contentRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
        delay: 0.5
      });

      // Background elements animation
      gsap.from('.bg-element', {
        scale: 0,
        opacity: 0,
        duration: 2,
        ease: 'power3.out',
        stagger: 0.2,
        delay: 1
      });

      // Scroll indicator animation
      gsap.to('.scroll-indicator', {
        y: 20,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 2
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex items-center justify-center relative overflow-hidden"
    >
      <div 
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="text-blue-500">Raghav Gupta</span> 👋
        </h1>
        
        <div className="h-12 my-6">
          <TypingEffect 
            texts={[
              "Full-Stack Enthusiast",
              "DSA Explorer",
              "2nd Year CSE Student"
            ]}
            className="text-xl md:text-2xl text-gray-300"
          />
        </div>
        
        <div className="mt-10">
          <button 
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1"
            onClick={scrollToAbout}
          >
            Explore My Portfolio
          </button>
        </div>
      </div>
      
      <div className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="text-white opacity-75 hover:opacity-100 transition-opacity duration-300"
          aria-label="Scroll to About section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="bg-element absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="bg-element absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;