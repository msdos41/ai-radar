'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      className="h-10 w-10 rounded-full"
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'en' ? 'Chinese' : 'English'}`}
    >
      <Globe className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
