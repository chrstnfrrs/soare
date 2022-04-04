import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

// https://vitejs.dev/config/
export default defineConfig({
  // https://vitest.dev/
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: './src/index.ts',
      exportName: 'viteApp',
      tsCompiler: 'esbuild',
    }),
  ],
  server: {
    port: 3004,
  },
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
