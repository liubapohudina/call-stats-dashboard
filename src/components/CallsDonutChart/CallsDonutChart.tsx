import { Card, CardContent, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import type { CallStats } from '../../types/stats.types';
import { colors } from '../../theme/muiTheme';
import styles from './CallsDonutChart.module.scss';

interface CallsDonutChartProps {
  stats: CallStats;
}

export const CallsDonutChart = ({ stats }: CallsDonutChartProps) => {
  const data = [
    {
      id: 0,
      value: stats.positive,
      label: 'Позитивні',
      color: colors.positive,
    },
    {
      id: 1,
      value: stats.negative,
      label: 'Негативні',
      color: colors.negative,
    },
  ];

  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h6" className={styles.title}>
          Тональність дзвінків
        </Typography>

        <PieChart
          series={[
            {
              innerRadius: 60,
              outerRadius: 100,
              paddingAngle: 2,
              cornerRadius: 4,
              data,
              arcLabel: (item) => `${item.value}`,
            },
          ]}
          height={280}
          slotProps={{
            legend: {
              direction: 'horizontal',
              position: { vertical: 'bottom', horizontal: 'center' },
            },
          }}
          sx={{
            '& .MuiChartsArcLabel-root': {
              fill: colors.bgVoid,
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              fontSize: 13,
            },
            '& .MuiChartLegend-root text': {
              fill: colors.textMuted,
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
            },
          }}
        />
      </CardContent>
    </Card>
  );
};
