import { createTheme } from '@mui/material/styles';

// ВАЖЛИВО: значення тут мають збігатися з src/styles/tokens.css
// (MUI theme не вміє читати CSS custom properties напряму в JS-логіці графіків,
// тож тримаємо два джерела синхронізованими вручну)
export const colors = {
  bgVoid: '#0A0812',
  bgSurface: '#15111F',
  bgSurfaceRaised: '#1D1830',
  violetNeon: '#A85FFF',
  violetDeep: '#6B2FBF',
  white: '#F5F3FA',
  textMuted: '#9A93B0',
  positive: '#4CE0B3',
  negative: '#FF5C8A',
  borderSubtle: 'rgba(168, 95, 255, 0.15)',
};

export const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: colors.bgVoid,
      paper: colors.bgSurface,
    },
    primary: {
      main: colors.violetNeon,
      dark: colors.violetDeep,
    },
    text: {
      primary: colors.white,
      secondary: colors.textMuted,
    },
    success: {
      main: colors.positive,
    },
    error: {
      main: colors.negative,
    },
  },
  typography: {
    fontFamily: 'var(--font-body)',
    h1: { fontFamily: 'var(--font-display)', fontWeight: 600 },
    h2: { fontFamily: 'var(--font-display)', fontWeight: 600 },
    h3: { fontFamily: 'var(--font-display)', fontWeight: 600 },
    h4: { fontFamily: 'var(--font-display)', fontWeight: 600 },
    h5: { fontFamily: 'var(--font-display)', fontWeight: 600 },
    h6: { fontFamily: 'var(--font-display)', fontWeight: 500 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: colors.bgSurface,
          border: `1px solid ${colors.borderSubtle}`,
          transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
          '&:hover': {
            borderColor: 'rgba(168, 95, 255, 0.45)',
            boxShadow: '0 0 24px rgba(168, 95, 255, 0.15)',
          },
        },
      },
    },
  },
});