'use client';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useTheme } from 'next-themes';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart as RechartsRadarChart,
  ResponsiveContainer,
} from 'recharts';

type RadarChartProps = {
  data: Record<string, number>;
  name: string;
};

export default function RadarChart({ data, name }: RadarChartProps) {
  const { resolvedTheme } = useTheme();

  const chartData = Object.entries(data).map(([dimension, value]) => ({
    dimension,
    value,
  }));

  const chartColor =
    resolvedTheme === 'dark' ? 'hsl(var(--foreground))' : 'hsl(var(--primary))';

  return (
    <ChartContainer
      config={{
        [name]: {
          label: name,
          color: chartColor,
        },
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={chartData} outerRadius="75%">
          <PolarGrid stroke={chartColor} strokeOpacity={0.3} />
          <PolarAngleAxis
            dataKey="dimension"
            tick={{ fill: chartColor, fontSize: 10 }}
          />
          <Radar
            name={name}
            dataKey="value"
            stroke={chartColor}
            fill={chartColor}
            fillOpacity={0.3}
            strokeWidth={2}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
