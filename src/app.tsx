import { PageLoading, ProBreadcrumb } from "@ant-design/pro-layout";
import { history, useModel } from "umi";
import { Link } from "umi";

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
    headerContentRender: () => <ProBreadcrumb />,
  };
};
