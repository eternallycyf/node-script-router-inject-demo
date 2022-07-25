import { defineConfig } from "umi";
import routerConfig from "./src/routes";
const proxyConfig = require("./src/config/proxyConfig");
const docgenLoader = require("react-docgen-typescript-loader");
const path = require("path");

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
  panelTab: {
    use404: true,
    useAuth: false,
    autoI18n: true,
    tabsLimit: 10,
    tabsLimitWait: 500,
    tabsLimitWarnTitle: "提示",
    tabsLimitWarnContent: "您当前打开页面过多, 请关闭不使用的页面以减少卡顿!",
    tabsBarBackgroundColor: "#FFFFFF",
    tabsTagColor: "#1890ff",
  },
  chainWebpack(config) {
    config.module.rules.push({
      test: /\.tsx?$/,
      include: path.resolve(__dirname, "./src"),
      use: [
        require.resolve("ts-loader"),
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            shouldExtractLiteralValuesFromEnum: true,
            tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
            propFilter: (prop) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes("node_modules");
              }
              return true;
            },
          },
        },
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
});
