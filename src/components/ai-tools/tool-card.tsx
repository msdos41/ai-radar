import RadarChart from '@/components/ai-tools/radar-chart';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AITool } from '@/data/ai-tools';
import { useLanguage } from '@/hooks/use-language';
import { useEffect, useState } from 'react';

export default function AIToolCard({ tool }: { tool: AITool }) {
  const { t } = useLanguage();
  const [isChartVisible, setIsChartVisible] = useState(false);
  const [isSingleColumn, setIsSingleColumn] = useState(false);

  useEffect(() => {
    const checkColumnCount = () => {
      const isSingle = window.matchMedia('(max-width: 767px)').matches;
      setIsSingleColumn(isSingle);
      setIsChartVisible(!isSingle);
    };

    checkColumnCount();
    window.addEventListener('resize', checkColumnCount);
    return () => window.removeEventListener('resize', checkColumnCount);
  }, []);

  const toggleChartVisibility = () => {
    if (isSingleColumn) {
      setIsChartVisible(!isChartVisible);
    }
  };
  return (
    <Card
      className="flex flex-col border-gray-200 bg-white transition-colors duration-200 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      onClick={toggleChartVisibility}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
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
        <div className="mb-0 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">
              {t('developer')}:
            </span>
            <span>{tool.developer}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">
              {t('released')}:
            </span>
            <span>{tool.releaseDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-gray-400">
              {t('keyFeature')}:
            </span>
            <span className="text-right">{tool.keyFeature}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 dark:text-gray-400">
              {t('api')}:
            </span>
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
        {/* <div className="flex-grow border-t border-gray-200 pt-10 dark:border-gray-700"> */}
        {/* <h4 className="text-sm font-medium mb-2">Capability Dimensions</h4> */}
        {/* {isChartVisible && (
          <div className="flex-grow border-t border-gray-200 pt-10 dark:border-gray-700">
            <div className="mx-auto h-[200px] w-full max-w-[300px]">
              <RadarChart data={tool.dimensions} name={tool.name} />
            </div>
          </div>
        )} */}
        {/* </div> */}

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isChartVisible ? 'max-h-[250px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex-grow border-t border-gray-200 pt-8 dark:border-gray-700 mt-5">
            <div className="mx-auto mt-4 h-[200px] w-full max-w-[300px]">
              <RadarChart data={tool.dimensions} name={tool.name} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
