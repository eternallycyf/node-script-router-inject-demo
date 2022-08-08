export default {
  name: "svg",
  path: "/svg",
  routes: [
    {
      name: "svg",
      path: "/svg",
      redirect: "/svg/base",
      hideInMenu: true,
    },
    {
      name: "基础",
      path: "/svg/base",
      component: "@/pages/Svg/Base",
    },
    {
      name: "高级",
      path: "/svg/hign",
      component: "@/pages/Svg/Hign",
    },
  ],
};
