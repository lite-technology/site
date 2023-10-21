import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

const thisPathTo = (...paths) => path.resolve(__dirname, ...paths);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
        '@': thisPathTo('src'),
        '@assets': thisPathTo('src', 'assets'),
        '@components': thisPathTo('src', 'components'),
        '@hooks': thisPathTo('src', 'hooks'),
        '@pages': thisPathTo('src', 'pages'),
        '@styles': thisPathTo('src', 'styles'),
    },
  },
})
