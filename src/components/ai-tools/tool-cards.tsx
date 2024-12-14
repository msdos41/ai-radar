import { aiTools } from '@/data/ai-tools';
// import { SITE_TITLE } from "@/constants"
import AIToolCard from '@/components/ai-tools/tool-card';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { GitHubButton } from '../ui/github-button';

export default function AIToolsComparison() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-4xl font-extrabold">AI Radar</h1>
        {/* <h1 className="text-4xl font-extrabold">{SITE_TITLE}</h1> */}
        <div className="flex items-center space-x-2">
          <GitHubButton />
          <ThemeToggle />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {aiTools.map((tool) => (
          <AIToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </div>
  );
}
