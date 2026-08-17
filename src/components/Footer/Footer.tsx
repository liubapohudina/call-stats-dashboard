import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import styles from './Footer.module.scss';

interface FooterLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

const links: FooterLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/liubapohudina',
    icon: GitHubIcon,
  },
  { label: 'Notion', href: 'https://notion.so/your-page', icon: LanguageIcon },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/liubapohudina/',
    icon: LinkedInIcon,
  },
];

export const Footer = () => {
  return (
    <Box component="footer" className={styles.footer}>
      <Box>
        <Typography className={styles.name}>Liubov Pohudina</Typography>
        <Typography className={styles.role}>
          Full Stack Developer · AI Automation Engineer
        </Typography>
      </Box>

      <Box className={styles.links}>
        {links.map(({ label, href, icon: Icon }) => (
          <Tooltip key={label} title={label}>
            <IconButton
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
              aria-label={label}
            >
              <Icon className={styles.linkIcon} />
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};
