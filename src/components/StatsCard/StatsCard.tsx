import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import type { CallStats } from '../../types/stats.types';
import styles from './StatsCard.module.scss';

interface StatsCardProps {
  stats: CallStats;
}

export const StatsCard = ({ stats }: StatsCardProps) => {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Box className={styles.header}>
          <Typography variant="h6" className={styles.title}>
            Статистика дзвінків
          </Typography>
          <Box className={styles.liveBadge}>
            <span className={styles.pulseDot} />
            live
          </Box>
        </Box>

        <Typography className={styles.bigNumber}>{stats.totalCalls}</Typography>
        <Typography className={styles.bigNumberLabel}>
          усього дзвінків
        </Typography>

        <Stack direction="row" spacing={3} className={styles.metricsRow}>
          <Box>
            <Typography className={styles.metricValuePositive}>
              {stats.positive}
            </Typography>
            <Typography className={styles.metricLabel}>позитивні</Typography>
          </Box>
          <Box>
            <Typography className={styles.metricValueNegative}>
              {stats.negative}
            </Typography>
            <Typography className={styles.metricLabel}>негативні</Typography>
          </Box>
          <Box>
            <Typography className={styles.metricValueNegative}>
              {stats.negativeCallPercent}%
            </Typography>
            <Typography className={styles.metricLabel}>
              частка негативу
            </Typography>
          </Box>
        </Stack>

        {stats.recommendation && (
          <Box className={styles.recommendation}>
            <Typography className={styles.recommendationLabel}>
              Рекомендація
            </Typography>
            <Typography className={styles.recommendationText}>
              {stats.recommendation}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
