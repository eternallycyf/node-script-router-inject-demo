import { defineConfig } from "umi";
import routerConfig from "./src/routes";
const proxyConfig = require("./src/config/proxyConfig");

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  layout: {
    title: "@umijs/max",
    navTheme: "light",
  },
  routes: routerConfig,
  proxy: proxyConfig,
  base: process.env.APP_ENV === "development" ? "/" : "/ims-app/",
  publicPath: process.env.APP_ENV === "development" ? "/" : "/ims-app/",
  fastRefresh: {},
  nodeModulesTransform: {
    type: "none",
  },
});
