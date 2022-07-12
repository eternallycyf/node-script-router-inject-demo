import bizRouter from './business'
const flatMap: any = (arr: any) =>
  Array.isArray(arr) ? arr.reduce((a, b) => [...a, ...flatMap(b)], []) : [arr];

const Router = [
  {
    name: '/',
    redirect: '/my',
  },
  ...flatMap(bizRouter),
];

export default Router;
