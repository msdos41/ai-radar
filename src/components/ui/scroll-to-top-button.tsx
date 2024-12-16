'use client';

import { Button } from '@/components/ui/button';
import { ArrowUpToLine } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      className="fixed bottom-5 right-3 h-10 w-10 rounded-full bg-primary opacity-50 transition-opacity duration-200 hover:bg-primary/90"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUpToLine className="h-8 w-8" />
    </Button>
  );
}
