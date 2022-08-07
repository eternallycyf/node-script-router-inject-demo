export default {
  name: "前端文件导出excel",
  path: "/file_export_excel",
  routes: [
    {
      name: "前端文件导出excel",
      path: "/file_export_excel",
      redirect: "/file_export_excel/simple_base",
      hideInMenu: true,
    },
    {
      name: "基础表格",
      path: "/file_export_excel/simple_base",
      component: "@/pages/FileExportExcel/base",
    },
    {
      name: "utils",
      path: "/file_export_excel/utils",
      component: "@/pages/FileExportExcel/utilsMd",
    },
  ],
};
