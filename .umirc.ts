import { defineConfig } from 'umi';
const routerConfig = require('./src/routes');
const proxyConfig = require('./src/config/proxyConfig');

export default defineConfig({
  define: {
    'process.env': process.env
  },
  routes: routerConfig,
  proxy: proxyConfig,
  base: process.env.APP_ENV === 'development' ? '/' : '/ims-app/',
  publicPath: process.env.APP_ENV === 'development' ? '/' : '/ims-app/',
  fastRefresh: {},
  nodeModulesTransform: {
    type: 'none',
  }
});