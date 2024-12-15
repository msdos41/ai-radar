'use client';

import { aiTools } from '@/data/ai-tools';
// import { SITE_TITLE } from "@/constants"
import AIToolCard from '@/components/ai-tools/tool-card';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useEffect, useState } from 'react';
import { GitHubButton } from '../ui/github-button';
import { LanguageToggle } from '../ui/language-toggle';
import { FilterTags } from './filter-tags';

export default function AIToolsComparison() {
  const [activeFilter, setActiveFilter] = useState('All');
  useEffect(() => {
    setActiveFilter('All'); // Generate random once on client
  }, []);

  const filteredTools = aiTools.filter((tool) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Other')
      return !['LLM', 'Text-to-Image', 'Text-to-Video'].includes(
        tool.modelType
      );
    return tool.modelType === activeFilter;
  });
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-4xl font-extrabold">AI Radar</h1>
        {/* <h1 className="text-4xl font-extrabold">{SITE_TITLE}</h1> */}
        <div className="flex items-center space-x-2">
          <LanguageToggle />
          <GitHubButton />
          <ThemeToggle />
        </div>
      </div>
      <FilterTags
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredTools.map((tool) => (
          <AIToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </div>
  );
}
