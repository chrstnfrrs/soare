import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // https://vitest.dev/
  // @ts-ignore
  test: {
    coverage: {
      all: true,
      branches: 100,
      exclude: ['**/tests/**', '**/prisma/**'],
      functions: 100,
      include: ['**/src/**'],
      lines: 100,
      src: './src/',
      statements: 100,
    },
    globals: true,
  },
});
