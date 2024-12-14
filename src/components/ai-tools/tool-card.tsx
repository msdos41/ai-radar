import RadarChart from '@/components/ai-tools/radar-chart';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AITool } from '@/data/ai-tools';

export default function AIToolCard({ tool }: { tool: AITool }) {
  return (
    <Card className="flex flex-col border-gray-200 bg-white transition-colors duration-200 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold">{tool.name}</CardTitle>
          {/* <CardDescription className="text-gray-500 dark:text-gray-400">
          {tool.modelType}
          </CardDescription> */}
          <Badge variant="secondary" className="text-xs">
            {tool.modelType}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Developer:</span>
            <span>{tool.developer}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">Released:</span>
            <span>{tool.releaseDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">
              Key Feature:
            </span>
            <span className="text-right">{tool.keyFeature}</span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-gray-500 dark:text-gray-400">API:</span>
            <Badge
              variant={
                tool.apiAvailability.toLowerCase().includes('yes')
                  ? 'default'
                  : 'secondary'
              }
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              {tool.apiAvailability}
            </Badge>
          </div>
        </div>
        <div className="flex-grow border-t border-gray-200 pt-4 dark:border-gray-700">
          {/* <h4 className="text-sm font-medium mb-2">Capability Dimensions</h4> */}
          <div className="mx-auto h-[200px] w-full max-w-[300px]">
            <RadarChart data={tool.dimensions} name={tool.name} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
