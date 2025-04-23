import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!texts.length) return;

    let timer: number;

    if (isTyping) {
      // Typing mode
      if (displayText.length < texts[textIndex].length) {
        timer = window.setTimeout(() => {
          setDisplayText(texts[textIndex].substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, pause before deleting
        setIsPaused(true);
        timer = window.setTimeout(() => {
          setIsPaused(false);
          setIsTyping(false);
        }, delayBetweenTexts);
      }
    } else {
      // Deleting mode
      if (displayText.length > 0) {
        timer = window.setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next text
        setIsTyping(true);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [
    texts, 
    textIndex, 
    displayText, 
    isTyping, 
    isPaused, 
    typingSpeed, 
    deletingSpeed, 
    delayBetweenTexts
  ]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypingEffect;