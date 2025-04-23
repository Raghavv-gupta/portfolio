import React, { useEffect, useRef, useState } from 'react';
import SkillCard from './SkillCard';
import { Code, PenTool, Boxes } from 'lucide-react';

interface Skill {
  icon: React.ReactNode;
  category: string;
  items: string[];
  color: string;
}

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills: Skill[] = [
    {
      icon: <Code size={28} />,
      category: 'Programming Languages',
      items: ['Python', 'C', 'Java', 'SQL'],
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
    },
    {
      icon: <PenTool size={28} />,
      category: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript'],
      color: 'bg-gradient-to-r from-blue-600 to-blue-700',
    },
    {
      icon: <Boxes size={28} />,
      category: 'Concepts',
      items: ['Data Structures', 'Algorithms', 'Problem Solving'],
      color: 'bg-gradient-to-r from-blue-700 to-blue-800',
    }
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
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-10 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard 
                key={index} 
                icon={skill.icon}
                category={skill.category}
                items={skill.items}
                color={skill.color}
                delay={index * 0.2}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;