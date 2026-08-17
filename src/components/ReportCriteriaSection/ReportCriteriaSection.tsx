import { Box, Typography } from '@mui/material';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {
  reportCriteria,
  type ReportCriterion,
} from '../../data/reportCriteria';
import styles from './ReportCriteriaSection.module.scss';

const icons: Record<ReportCriterion['icon'], React.ElementType> = {
  tone: RecordVoiceOverIcon,
  time: AccessTimeIcon,
  resolution: TaskAltIcon,
};

export const ReportCriteriaSection = () => {
  return (
    <Box className={styles.section}>
      <Typography variant="h2" className={styles.heading}>
        На основі чого формується звіт
      </Typography>
      <Typography className={styles.subheading}>
        Кожен дзвінок оцінюється за трьома ключовими критеріями
      </Typography>

      <Box className={styles.grid}>
        {reportCriteria.map((criterion, index) => {
          const Icon = icons[criterion.icon];
          return (
            <Box key={criterion.id} className={styles.card}>
              <span className={styles.cardIndex}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <Box className={styles.iconWrap}>
                <Icon className={styles.icon} />
              </Box>
              <Typography className={styles.cardTitle}>
                {criterion.title}
              </Typography>
              <Typography className={styles.cardDescription}>
                {criterion.description}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
