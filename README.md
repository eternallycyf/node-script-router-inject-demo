# 脚本自动注入文件
- 本项目使用 `umi` 构建基本框架 
- `yarn create @umijs/umi-app`

## 1 下载依赖和启动命令

```js
  "dependencies":{
    "lodash": "^4.17.21",
  }
  "devDependencies": {
    "ts-node": "^10.4.0",
    "ejs": "^3.1.6",
    "cross-env": "^7.0.3"
  }
# 加入启动和打包命令
 "scripts": {
    "biz-init": "ts-node scripts/generateBizConfig.ts",
    "start": "npm run biz-init && cross-env APP_ENV=development umi dev",
    "build:dev": "npm run biz-init && cross-env APP_ENV=development umi build",
    "build:pro": "npm run biz-init && cross-env APP_ENV=production umi build",
    ...
  },
```

## 2 写入 node 读取文件脚本

```js
./scripts/generateBizConfig.ts
```

## 3 .umirc.ts 引入自动生成的路由文件

```js
const routerConfig = require('./src/routes');
const proxyConfig = require('./src/config/proxyConfig');
export default defineConfig({
  ...,
  define: {
    'process.env': process.env
  },
  routes: routerConfig,
  proxy: proxyConfig,
  base: process.env.APP_ENV === 'development' ? '/' : '/ims-app/',
  publicPath: process.env.APP_ENV === 'development'? '/' : '/ims-app/',
});
```

## 4 ./src/config/index.ts 配置环境变量
```js
export const apiPrefixMock: string =
  process.env.APP_ENV === 'development' ? '/api' : '/ims-app/api';
export const tokenKey: string = 'acpauth';
export const agentId: string =
  process.env.APP_ENV === 'development' ? '1480492321' : '1583908988';
```

## 5 ./src/config/proxyConfig.ts 设置反向代理
```js
module.exports = {
  '/api': {
    target: 'http://172.253.60.195/',
    changeOrigin: true,
    pathRewrite: {
      '^/api/': '',
    },
  },
  '/mobile/api': {
    target: 'http://172.253.60.195/',
    changeOrigin: true,
    pathRewrite: {
      // '^/mobile/api/': '',
    },
  },
};
```

## 6 ./src/routes/index.ts 配置路由全部导入
```js
import { flatMap } from 'lodash';
import bizRouter from './business'
const Router = [
  {
    path: '/',
    routes: [
      ...flatMap(bizRouter),
    ]
  }
]
module.exports = Router;
```

## 7.新建路由示例
```js
#  ./src/business/views/my/stage-config.ts
export default {
  path: '/my',
  name: "我的",
  routes: [
    {
      path: '/my',
      name: '我的',
      component: '@/business/views/my/my',
    }
  ],
}
# ./src/business/views/my/my.tsx
const My = () => {
  return (
    <>my node script demo</>
  )
}
export default My
```

## 8 配置全局 ts module
```js
# tsconfig.json
  "include": [
    "./typings/*.ts",
    "./src/**/*"
  ],
  "exclude": [
    "node_modules",
    "jest"
  ]
# ./src/typings/global.d.ts
declare module '*.css';
declare module '*.less';
declare module '.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.x1sx';
# ./src/typings/index.ts

# ./src/typings/umi-locale.d.ts
interface IFormatValues { [key: string]: string | number } declare const formatMessage: (
  { id }: { id: string },
  values?: IFormatValues
) => string;
declare const getLocale: () => string;
declare const setLocale: (lang: string) => string;
declare class FormattedMessage extends React.Component<
  {
    id: string;
    values?: IFormatValues;
  },
  any
> {
  render(): JSX.Element;
}

declare module 'umi/locale' {
  export const formatMessage;
  export const setLocale;
  export const getLocale;
  export const FormattedMessage;
}

```

## 9 安装依赖和测试 yarn && yarn biz-init
```js
就可以看到自动生成了 ./src/routes/business.ts 文件
且node脚本自动引入导出了路由
```

## 运行 yarn start
```js
http://localhost:8000/my
```

