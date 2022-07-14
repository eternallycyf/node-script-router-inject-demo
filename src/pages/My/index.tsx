import { Button, Card, Select, Spin } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
import { connect } from "umi";
import { IMyConnectState, IMyProps } from "./interface";
import Charts from "./Components/charts";

const My: React.FC = ({ dispatch, list, myLoading }: IMyProps) => {
  console.log(myLoading, list);

  return (
    <>
      <PageContainer>
        <Spin spinning={myLoading}>
          <Card
            title="我的"
            style={{ margin: 24, height: "81vh" }}
            extra={<Select options={list} style={{ width: 200 }} />}
          >
            <Charts />
          </Card>
        </Spin>
      </PageContainer>
    </>
  );
};

export default connect(({ My, loading }: IMyConnectState) => ({
  ...My,
  myLoading: loading.effects["My/fetch"],
}))(My);
