
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // GitHub Pages 的仓库名称作为 base URL
      base: '/Spring-Alibaba-AI-BAP-Model-Chat/',
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      // 构建输出到项目根目录的 docs 文件夹
      build: {
        outDir: '../docs',
        emptyOutDir: true,
      },
      resolve: {
        alias: {
          // __dirname is not available in ES modules.
          // We'll resolve from the current working directory.
          '@': path.resolve(process.cwd(), '.'),
        }
      }
    };
});
