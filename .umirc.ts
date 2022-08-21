import { defineConfig } from '@umijs/max';
import routerConfig from "./src/routes";
const proxyConfig = require("./src/config/proxyConfig");
const path = require("path");

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  base: '/',
  history: { type: "hash" },
  publicPath: process.env.APP_ENV === "development"
    ? "/"
    : "http://wangxince.site/node-script-router-inject-demo/",
  antd: {
    configProvider: {},
    dark: false,
    compact: true,
    import: true,
    style: 'less',
  },
  dva: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'node脚本demo"',
    contentWidth: "Fluid",
    locale: false,
  },
  theme: { '@primary-color': '#00CA88' },
  mock: {
    include: ['src/mock/**.ts'],
  },
  routes: routerConfig,
  // proxy: proxyConfig,
  npmClient: 'yarn',
  // fastRefresh: true,
  // 可以跳转到源码 option+click
  clickToComponent: {},
  // forkTSChecker: {},
  // 解决build后浏览器缓存问题
  hash: false,
  // 忽略Moment国际化
  ignoreMomentLocale: false,
  mfsu: true,
  // 是否有 sourcemap  eval最快 source-map最慢
  devtool: process.env.NODE_ENV === 'development' ? 'eval' : false,
});

