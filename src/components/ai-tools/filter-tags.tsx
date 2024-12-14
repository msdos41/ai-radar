'use client';

import { Button } from '@/components/ui/button';

type FilterTagsProps = {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

// const filterOptions = ['All', 'LLM', 'Text-to-Image', 'Text-to-Video', 'Other'];
const filterOptions = [
  { value: 'All', label: 'All' },
  { value: 'LLM', label: 'LLM' },
  { value: 'Text-to-Image', label: 'Image' },
  { value: 'Text-to-Video', label: 'Video' },
  { value: 'Other', label: 'Other' },
];

export function FilterTags({ activeFilter, setActiveFilter }: FilterTagsProps) {
  return (
    <div className="mb-6 flex flex-wrap justify-center gap-1 overflow-x-auto whitespace-nowrap sm:justify-start">
      {filterOptions.map((filter) => (
        <Button
          key={filter.value}
          variant={activeFilter === filter.value ? 'default' : 'outline'}
          onClick={() => setActiveFilter(filter.value)}
          className="text-sm"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
