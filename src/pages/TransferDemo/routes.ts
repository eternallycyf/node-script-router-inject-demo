export default {
  name: "封装antd穿梭框",
  path: "/transferdemo",
  routes: [
    {
      name: "封装antd穿梭框",
      path: "/transferdemo",
      redirect: "/transferdemo/hook",
      hideInMenu: true,
    },
    {
      name: "hook组件使用",
      path: "/transferdemo/hook",
      component: "@/pages/TransferDemo/Hook",
    },
    {
      name: "hook组件使用多个穿梭框",
      path: "/transferdemo/hook_multiple",
      component: "@/pages/TransferDemo/Hook_multiple",
    },
    {
      name: "class组件使用",
      path: "/transferdemo/class",
      component: "@/pages/TransferDemo/Class",
    },
  ],
};
