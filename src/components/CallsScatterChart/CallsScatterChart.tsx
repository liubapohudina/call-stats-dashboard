import { Card, CardContent, Typography } from '@mui/material';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import type { CallStats } from '../../types/stats.types';
import { colors } from '../../theme/muiTheme';
import styles from './CallsScatterChart.module.scss';

interface CallsScatterChartProps {
  stats: CallStats;
}

export const CallsScatterChart = ({ stats }: CallsScatterChartProps) => {
  const data = stats.dailyStats.map((day, index) => ({
    id: index,
    x: index, // порядковий день; підпис реальної дати робимо через valueFormatter
    y: day.totalCalls,
    size: day.negativePercent,
  }));

  const dateLabels = stats.dailyStats.map((d) =>
    new Date(d.date).toLocaleDateString('uk-UA', {
      day: '2-digit',
      month: '2-digit',
    }),
  );

  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h6" className={styles.title}>
          Дзвінки по днях
        </Typography>
        <Typography className={styles.subtitle}>
          розмір точки — частка негативних дзвінків
        </Typography>

        <ScatterChart
          height={300}
          grid={{ horizontal: true, vertical: false }}
          series={[
            {
              data,
              color: colors.violetNeon,
              sizeAxisId: 'size' as any,
              valueFormatter: (point: any) =>
                `${dateLabels[point.x]}: ${point.y} дзвінків, ${point.size}% негативу`,
            } as any,
          ]}
          xAxis={[
            {
              valueFormatter: (value: number) => dateLabels[value] ?? '',
              tickLabelStyle: { fontFamily: 'var(--font-mono)', fontSize: 10 },
            },
          ]}
          yAxis={[
            {
              tickLabelStyle: { fontFamily: 'var(--font-mono)', fontSize: 11 },
            },
          ]}
          zAxis={
            [
              {
                id: 'size',
                data: data.map((point) => point.size),
                sizeMap: { type: 'continuous', min: 0, max: 60, size: [4, 22] },
              },
            ] as any
          }
          sx={{
            '& .MuiChartsAxis-line, & .MuiChartsAxis-tick': {
              stroke: 'var(--text-muted)',
            },
            '& .MuiChartsGrid-line': {
              stroke: 'rgba(168, 95, 255, 0.08)',
            },
          }}
        />
      </CardContent>
    </Card>
  );
};
