import { defineConfig } from "umi";
import routerConfig from "./src/routes";
const proxyConfig = require("./src/config/proxyConfig");
const docgenLoader = require("react-docgen-typescript-loader");
const path = require("path");

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  history: { type: "hash" },
  publicPath:
    process.env.APP_ENV === "development"
      ? "/"
      : "http://wangxince.site/node-script-router-inject-demo/",
  nodeModulesTransform: {
    type: "none",
  },
  mock: false,
  hash: true,
  dynamicImport: {},
  layout: {
    title: "node脚本demo",
    contentWidth: "Fluid",
    navTheme: "light",
  },
  theme: {
    "primary-color": "#00CA88",
  },
  routes: routerConfig,
  // proxy: proxyConfig,
  fastRefresh: {},
  mfsu: false,
  panelTab: false,
  // panelTab: {
  //   use404: true,
  //   useAuth: false,
  //   autoI18n: true,
  //   tabsLimit: 10,
  //   tabsLimitWait: 500,
  //   tabsLimitWarnTitle: "提示",
  //   tabsLimitWarnContent: "您当前打开页面过多, 请关闭不使用的页面以减少卡顿!",
  //   tabsBarBackgroundColor: "#FFFFFF",
  //   tabsTagColor: "#1890ff",
  // },
  plugins: ["react-dev-inspector/plugins/umi/react-inspector"],
});
