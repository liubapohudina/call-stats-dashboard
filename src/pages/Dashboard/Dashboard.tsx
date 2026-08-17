import { useState } from 'react';
import { Box, Grid, CircularProgress, Typography } from '@mui/material';
import { Header } from '../../components/Header/Header';
import { StatsCard } from '../../components/StatsCard/StatsCard';
import { CallsDonutChart } from '../../components/CallsDonutChart/CallsDonutChart';
import { CallsScatterChart } from '../../components/CallsScatterChart/CallsScatterChart';
import { ReportCriteriaSection } from '../../components/ReportCriteriaSection/ReportCriteriaSection';
import { Footer } from '../../components/Footer/Footer';
import { FloatingChatButton } from '../../components/FloatingChatButton/FloatingChatButton';
import { useStats } from '../../hooks/useStats';
import { getDefaultDateRange } from '../../utils/dateRange';
import styles from './Dashboard.module.scss';

export const Dashboard = () => {
  const [{ startDate, endDate }, setDateRange] = useState(getDefaultDateRange);

  const { stats, loading, error, lastUpdated, refetch } = useStats(
    startDate,
    endDate,
  );

  return (
    <Box className={styles.page}>
      <Box className={styles.container}>
        <Header
          onRefresh={refetch}
          loading={loading}
          lastUpdated={lastUpdated}
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={(value) =>
            setDateRange((prev) => ({ ...prev, startDate: value }))
          }
          onEndDateChange={(value) =>
            setDateRange((prev) => ({ ...prev, endDate: value }))
          }
        />

        {error && !stats && (
          <Box className={styles.errorWrap}>
            <Typography className={styles.errorText}>{error}</Typography>
          </Box>
        )}

        {!stats && !error ? (
          <Box className={styles.loaderWrap}>
            <CircularProgress />
          </Box>
        ) : null}

        {stats && (
          <>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 4 }}>
                <StatsCard stats={stats} />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CallsDonutChart stats={stats} />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <CallsScatterChart stats={stats} />
              </Grid>
            </Grid>

            <ReportCriteriaSection />
          </>
        )}

        <Footer />
      </Box>

      {stats && (
        <FloatingChatButton
          stats={stats}
          chatUrl="https://wfwokl4.app.n8n.cloud/webhook/d8b44bd4-f5d0-4607-8583-2a148c3296fd/chat"
        />
      )}
    </Box>
  );
};
