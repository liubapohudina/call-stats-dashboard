import { Box, Typography, IconButton, Tooltip, TextField } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import styles from './Header.module.scss';

interface HeaderProps {
  onRefresh: () => void;
  loading: boolean;
  lastUpdated: Date | null;
  startDate: string;
  endDate: string;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
}

const formatDateTime = (date: Date | null): string => {
  if (!date) return '—';
  return date.toLocaleString('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const dateFieldSx = {
  '& .MuiOutlinedInput-root': {
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
    color: 'var(--white)',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '8px',
    '& fieldset': { borderColor: 'var(--border-subtle)' },
    '&:hover fieldset': { borderColor: 'var(--border-hover)' },
    '&.Mui-focused fieldset': { borderColor: 'var(--violet-neon)' },
  },
  '& .MuiInputLabel-root': {
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
    fontSize: '12px',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'var(--violet-neon)',
  },
  '& input[type="date"]': {
    colorScheme: 'dark',
  },
  '& input[type="date"]::-webkit-calendar-picker-indicator': {
    filter: 'invert(0.65) sepia(1) saturate(6) hue-rotate(230deg)',
    cursor: 'pointer',
  },
};

export const Header = ({
  onRefresh,
  loading,
  lastUpdated,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: HeaderProps) => {
  return (
    <Box className={styles.header}>
      <Box>
        <Typography variant="h1" className={styles.title}>
          Аналітика дзвінків
        </Typography>
        <Typography className={styles.subtitle}>
          Статистика звернень клієнтів компанії — оновлюється за запитом
        </Typography>
      </Box>

      <Box className={styles.controls}>
        <Box className={styles.dateRange}>
          <TextField
            type="date"
            size="small"
            label="Від"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            slotProps={{ inputLabel: { shrink: true } }}
            sx={dateFieldSx}
          />
          <span className={styles.dateSeparator}>—</span>
          <TextField
            type="date"
            size="small"
            label="До"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            slotProps={{ inputLabel: { shrink: true } }}
            sx={dateFieldSx}
          />
        </Box>

        <Tooltip title="Оновити дані">
          <span>
            <IconButton
              onClick={onRefresh}
              disabled={loading}
              className={styles.refreshButton}
              aria-label="Оновити дані"
            >
              <RefreshIcon className={loading ? styles.spinning : undefined} />
            </IconButton>
          </span>
        </Tooltip>

        <Typography className={styles.updatedAt}>
          Оновлено: {formatDateTime(lastUpdated)}
        </Typography>
      </Box>
    </Box>
  );
};
