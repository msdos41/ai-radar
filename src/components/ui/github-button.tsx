'use client';

import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export function GitHubButton() {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() =>
        window.open('https://github.com/msdos41/ai-radar', '_blank')
      }
      aria-label="View GitHub Repository"
    >
      <Github className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
