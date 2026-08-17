import { Tooltip } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutlined';
import type { CallStats } from '../../types/stats.types';
import styles from './FloatingChatButton.module.scss';

interface FloatingChatButtonProps {
  stats: CallStats;
  chatUrl?: string;
}

export const FloatingChatButton = ({
  stats,
  chatUrl = 'https://wfwokl4.app.n8n.cloud/webhook/d8b44bd4-f5d0-4607-8583-2a148c3296fd/chat',
}: FloatingChatButtonProps) => {
  const summary = `${stats.totalCalls} дзвінків · ${stats.negativeCallPercent}% негативу · ${stats.positive} позитивних`;

  return (
    <Tooltip
      title={
        <div className={styles.tooltipContent}>
          <span className={styles.tooltipLabel}>Швидкий підсумок</span>
          <span className={styles.tooltipSummary}>{summary}</span>
          <span className={styles.tooltipCta}>Обговорити в чаті →</span>
        </div>
      }
      placement="left"
      arrow
      slotProps={{
        tooltip: {
          sx: {
            background: 'var(--bg-surface-raised)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '10px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
            padding: '10px 14px',
          },
        },
        arrow: {
          sx: {
            color: 'var(--bg-surface-raised)',
          },
        },
      }}
    >
      <a
        href={chatUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.fab}
        aria-label="Обговорити статистику в чаті"
      >
        <span className={styles.ring} />
        <ChatBubbleOutlineIcon className={styles.icon} />
      </a>
    </Tooltip>
  );
};
