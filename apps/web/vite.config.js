// eslint-disable-next-line node/no-unpublished-import
import react from '@vitejs/plugin-react';
// eslint-disable-next-line node/no-unpublished-import
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts',
  },
});
