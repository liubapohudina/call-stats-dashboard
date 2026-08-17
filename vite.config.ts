import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/call-stats-dashboard/',
  plugins: [react()],
});
