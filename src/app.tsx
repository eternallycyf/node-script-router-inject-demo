import { PageLoading, ProBreadcrumb } from "@ant-design/pro-layout";
import React from "react";
import { Inspector } from "react-dev-inspector"; // 快捷代码跳转模块
import { Link } from "umi";
const InspectorWrapper =
  process.env.NODE_ENV === "development" ? Inspector : React.Fragment;
// dva errorCatch
export const dva = {
  config: {
    onError(err: any) {
      err.preventDefault();
    },
  },
};

export const initialStateConfig = {
  loading: <PageLoading />,
};

export const layout = () => {
  return {
    // 当关闭页签的时候设置为false
    disableContentMargin: false,
    logout: () => {}, // do something
    itemRender: (route, _params, routes, _paths) => {
      return <Link to={route.path}>{route.breadcrumbName}</Link>;
    },
    headerContentRender: () => (
      <InspectorWrapper keys={["control", "y"]} disableLaunchEditor={false}>
        {/* 当开启多页签的时候 开启 */}
        {/* <ProBreadcrumb /> */}
      </InspectorWrapper>
    ),
  };
};
