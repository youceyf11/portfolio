import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex === text.length) {
      setIsComplete(true);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, 80); // Adjust typing speed here

    return () => clearTimeout(timeout);
  }, [currentIndex, text]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedText}
      {!isComplete && (
        <span className="inline-block w-[2px] h-[1em] bg-blue-600 dark:bg-blue-400 ml-[2px] animate-pulse" />
      )}
    </span>
  );
};

export default AnimatedText;