import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  category: string;
  items: string[];
  color: string;
  delay: number;
  isVisible: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  icon, 
  category, 
  items, 
  color,
  delay,
  isVisible 
}) => {
  const transitionStyle = {
    transitionDelay: `${delay}s`,
  };
  
  return (
    <div 
      className={`relative rounded-xl shadow-lg overflow-hidden bg-white transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={transitionStyle}
    >
      <div className={`absolute top-0 left-0 h-2 w-full ${color}`}></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`rounded-full p-3 text-white ${color}`}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold ml-3">{category}</h3>
        </div>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className={`h-2 w-2 rounded-full ${color} mr-3`}></span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;