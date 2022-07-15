import { defineConfig } from "umi";
import routerConfig from "./src/routes";
const proxyConfig = require("./src/config/proxyConfig");

export default defineConfig({
  define: {
    "process.env": process.env,
  },
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
  base: process.env.APP_ENV === "development" ? "/" : "/ims-app/",
  publicPath: process.env.APP_ENV === "development" ? "/" : "/ims-app/",
  fastRefresh: {},
  nodeModulesTransform: {
    type: "none",
  },
  mfsu: false,
});
