# 脚本自动注入文件
- 本项目使用 `umi` 构建基本框架 
- `yarn create @umijs/umi-app`

## 1 下载依赖和启动命令

```js
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
import routerConfig from './src/routes';
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
import Routes from './routes';
const flatMap: any = (arr: any) =>
  Array.isArray(arr) ? arr.reduce((a, b) => [...a, ...flatMap(b)], []) : [arr];

const Router = [
  ...flatMap(Routes),
];

export default Router;

```

## 7.新建路由示例
```js
#  ./src/pages/My/routes.ts
export default {
  name: 'my',
  path: '/my',
  component: '@/pages/my',
};

# ./src/pages/My/index.tsx
import { Button } from 'antd';

const My: React.FC = () => {
  return (
    <Button>My</Button>
  );
};

export default My;
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
就可以看到自动生成了 ./src/routes/routes.ts 文件
且node脚本自动引入导出了路由
```

## 运行 yarn start
```js
http://localhost:8000/my
```

## 自动生成面包屑
```js
# 依照umi约定式路由规则 在pages目录下嵌套文件夹即可
{
  name: "权限管理",
  path: "/access",
  routes: [
    {
      name: '权限管理',
      path: '/access',
      redirect: '/access/home',
      hideInMenu: true,
    },
    {
      name: '权限主页',
      path: '/access/home',
      component: "@/pages/Access/Home"
    },
    {
      name: '添加权限',
      path: '/access/add',
      component: '@/pages/Access/Add'
    }
  ]
};
# 在需要面包屑导航的页面使用高级组件包裹即可自动生成
import { PageContainer } from '@ant-design/pro-layout';
    <PageContainer>
      ...
    </PageContainer>
```


## 自动生成多页签
```js
# 
https://github.com/fangzhengjin/umi-plugin-panel-tabs
npm i umi-plugin-panel-tabs

#
  panelTab: {
    use404: true,
    useAuth: true,
    autoI18n: true,
    // 打开多少页签时弹出提示
    tabsLimit: 10,
    // 防抖时间
    tabsLimitWait: 500,
    tabsLimitWarnTitle: '提示',
    tabsLimitWarnContent: '您当前打开页面过多, 请关闭不使用的页面以减少卡顿!',
    tabsBarBackgroundColor: '#FFFFFF',
    tabsTagColor: '#1890ff',
  },
# 
  当route具有name就会显示页签
  添加hideInPanelTab:true 就隐藏页签
# 其他方案
https://github.com/fangzhengjin/umi-plugin-panel-tabs
https://github.com/MudOnTire/antd-pro-page-tabs
```

## umi部署到github-pages
```js
# .umirc.ts
  define: {
    "process.env": process.env,
  },
  history: { type: 'hash' },
  publicPath: process.env.APP_ENV === "development" ? "/" : "http://wangxince.site/node-script-router-inject-demo/",
  hash: true,
  dynamicImport: {},
    
# 
bash deploy-static.sh
```

```js
# deploy-static.sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 删除旧的文件
rm -rf dist

rm -rf ./src/pages/.DS_Store

# 生成新的压缩文件
yarn build:pro

# 进入生成的文件夹
cd dist

# 复制一个 index.html并命名为 404.html 解决 historyAPI 404问题
cp index.html 404.html

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:eternallycyf/node-script-router-inject-demo.git master:gh-pages

cd -
```

## 代码定位

在浏览器中使用ctrl+y 就可选择需要跳转的代码模块 单击就可跳转相应代码


## docker-compose部署到服务器
```js
## 服务器部署
# 1.使用sftp将除了node_modules的文件放在服务器 例如 ./home/blog
scp -r node-script-router-inject-demo root@118.31.34.158:/home/blog/

# 2
# 2.1 在 ./home/blog 根目录运行
ssh 'root@118.31.34.158'  
cd /home/blog/node-script-router-inject-demo
docker-compose up -d
# 2.2 停止命令 
docker-compose down 
```

```Dockerfile
FROM node:12.20.0-alpine as builder

WORKDIR /usr/src/app/
USER root
COPY package.json ./
RUN yarn

COPY ./ ./
RUN npm run build:pro

FROM nginx:alpine

WORKDIR /usr/share/nginx/html/

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/dist/ /usr/share/nginx/html/

EXPOSE 80

CMD ['nginx', '-g', 'daemon off;']
```

```conf 
server {
    listen       80;
    server_name  127.0.0.1;

    access_log off;

    add_header X-Frame-Options sameorigin always;

    location / {
        root /app;
        try_files $uri $uri/ /index.html;
        index index.html index.htm;
    }
}
```

```yml
version: "3.5"

services:
  ant-design-pro_build:
    build: ./
    container_name: "ant-design-pro_build"
    volumes:
      - dist:/usr/src/app/dist

  ant-design-pro_web:
    image: nginx
    ports:
      - 80:80
    container_name: "ant-design-pro_web"
    restart: unless-stopped
    volumes:
      - dist:/usr/share/nginx/html:ro
      - ./nginx.conf:/etc/nginx/conf.d/default.conf

volumes:
  dist:
```