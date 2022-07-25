export default {
  name: "Hook和class混用ref获取实例",
  path: "/refdemo",
  routes: [
    {
      name: "Hook和class混用ref获取实例",
      path: "/refdemo",
      redirect: "/refdemo/class",
      hideInMenu: true,
    },
    {
      name: "class获取hook的ref",
      path: "/refdemo/class_use_hookRef",
      component: "@/pages/RefDemo/ClassUseHookRef",
    },
    {
      name: "hook获取hook的ref",
      path: "/refdemo/hook_use_hookRef",
      component: "@/pages/RefDemo/HookUseHookRef",
    },
  ],
};
