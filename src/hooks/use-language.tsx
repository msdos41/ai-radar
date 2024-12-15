'use client';

import { Language, translations } from '@/locales/translations';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

// Define the type for the context
type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: keyof (typeof translations)['en']) => string;
};

// Create the context with an undefined default
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// LanguageProvider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Function to toggle language
  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'zh' : 'en'));
  }, []);

  // Function to get the translation
  const t = useCallback(
    (key: keyof (typeof translations)['en']) => {
      return translations[language][key] || key;
    },
    [language]
  );

  // Provide context to children
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
