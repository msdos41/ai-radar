'use client';

import { Button } from '@/components/ui/button';

type FilterTagsProps = {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

const filterOptions = ['All', 'LLM', 'Text-to-Image', 'Text-to-Video', 'Other'];

export function FilterTags({ activeFilter, setActiveFilter }: FilterTagsProps) {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {filterOptions.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? 'default' : 'outline'}
          onClick={() => setActiveFilter(filter)}
          className="text-sm"
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}
