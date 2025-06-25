// components/ReadingProgress.tsx
import { useEffect, useState } from 'react';

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  const calculateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setProgress(Math.min(Math.max(scrolled, 0), 100));
  };

  useEffect(() => {
    window.addEventListener('scroll', calculateProgress);
    return () => window.removeEventListener('scroll', calculateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div
        className="h-full bg-accent transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
