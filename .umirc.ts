import slash from "slash2";
import { defineConfig } from "umi";
import routerConfig from "./src/routes";
const proxyConfig = require("./src/config/proxyConfig");
const docgenLoader = require("react-docgen-typescript-loader");
const path = require("path");
import { winPath } from "@umijs/utils";

const getModulePackageName = (module) => {
  if (!module.context) {
    return null;
  }
  const nodeModulesPath = path.join(__dirname, "/node_modules/");
  if (module.context.substring(0, nodeModulesPath.length) != nodeModulesPath) {
    return null;
  }
  const moduleRelativePath = module.context.substring(nodeModulesPath.length);
  const [moduleDirName] = moduleRelativePath.split(path.sep);
  let packageName = moduleDirName;
  // handle tree shaking
  if (packageName.match("^_")) {
    // eslint-disable-next-line prefer-destructuring
    packageName = packageName.match(/^_(@?[^@]+)/)[1];
  }
  return packageName;
};

const getLocalIdent = (context, localIdentName, localName) => {
  if (
    context.resourcePath.includes("node_modules") ||
    context.resourcePath.includes("mixin.less") ||
    context.resourcePath.includes("global.less")
  ) {
    return localName;
  }
  const match = context.resourcePath.match(/src(.*)/);
  if (match && match[1]) {
    const antdPath = match[1].replace(".less", "");
    const arr = winPath(antdPath)
      .split("/")
      .map((a: string) => a.replace(/([A-Z])/g, "-$1"))
      .map((a: string) => a.toLowerCase());

    return `MyClassName${arr.join("-")}-${localName}`.replace(/--/g, "-");
  }
  return localName;
};

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  // base: "/",
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
