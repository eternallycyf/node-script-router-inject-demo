import { PageLoading, ProBreadcrumb } from "@ant-design/pro-layout";
import { history, useModel } from "umi";
import { Link } from "umi";
import { Inspector } from "react-dev-inspector"; // 快捷代码跳转模块
// import { Outlet } from "umi";
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
    headerContentRender: () => (
      <InspectorWrapper keys={["control", "y"]} disableLaunchEditor={false}>
        <ProBreadcrumb />
      </InspectorWrapper>
    ),
  };
};
