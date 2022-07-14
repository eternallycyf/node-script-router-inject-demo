import { Button, Card, Select } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
import { connect } from "umi";
import { ConnectState } from "@/typings/connect";
import Charts from "./Components/charts";

const My: React.FC = ({ dispatch, list, myLoading }: any) => {
  console.log(myLoading, list);

  return (
    <>
      <PageContainer>
        <Card
          title="我的"
          style={{ margin: 24, height: "81vh" }}
          extra={<Select options={list} style={{ width: 200 }} />}
        >
          <Charts />
        </Card>
      </PageContainer>
    </>
  );
};

export default connect(({ My, loading }: ConnectState) => ({
  ...My,
  myLoading: loading.effects["My/fetch"],
}))(My);
