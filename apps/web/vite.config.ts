import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // https://vitest.dev/
  // @ts-ignore
  test: {
    coverage: {
      all: true,
      branches: 100,
      exclude: ['**/tests/**', '**/adapters/**'],
      functions: 100,
      include: ['**/src/**'],
      lines: 100,
      src: './src/',
      statements: 100,
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts',
  },
});
