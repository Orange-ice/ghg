import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConfig from './vite.config.base';
import { API_PREFIX } from '../src/api/prefix';

const proxyUrl = 'https://saas-dev.ecdigit.cn/';
export default mergeConfig(
  {
    mode: 'development',
    server: {
      host: true,
      open: false,
      fs: {
        strict: true,
      },
      port: 9999,
      proxy: {
        [API_PREFIX.PERMISSION]: {
          target: proxyUrl,
          changeOrigin: true,
        },
        [API_PREFIX.GHG]: {
          target: proxyUrl,
          // target: 'http://192.168.110.95:10870/',
          // target: 'http://192.168.200.75:10870/',
          changeOrigin: true,
          // rewrite: (p) => p.replace(/^\/api/, '')
        },
        [API_PREFIX.EC]: {
          target: proxyUrl,
          changeOrigin: true,
        },
        [API_PREFIX.OSS]: {
          target: proxyUrl,
          changeOrigin: true,
        },
      },
    },
    plugins: [
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
    ],
  },
  baseConfig
);
