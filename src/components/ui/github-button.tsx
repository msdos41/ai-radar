'use client';

import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export function GitHubButton() {
  return (
    <Button
      className="h-9 w-9 rounded-full"
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
