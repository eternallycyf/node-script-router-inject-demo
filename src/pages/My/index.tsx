import { Card, Select, Spin } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
import { connect } from "umi";
import type { IMyConnectState, IMyProps } from "./interface";
import Charts from "./Components/charts";
import styles from './index.less'

const My: React.FC = ({ list, myLoading }: IMyProps) => {
  console.log(myLoading, list);

  return (
    <>
      <PageContainer>
        <Spin spinning={myLoading}>
          <Card
            title="我的"
            extra={<Select options={list} style={{ width: 200 }} />}
            className={styles.my}
          >
            <div>.</div>
            <div>├── Components</div>
            <div>│   ├── charts.tsx</div>
            <div>│   ├── columns.tsx</div>
            <div>│   └── search.tsx</div>
            <div>├── index.less</div>
            <div>├── index.tsx</div>
            <div>├── interface.ts</div>
            <div>├── model.ts</div>
            <div>├── routes.ts</div>
            <div>├── service.ts</div>
            <div>└── utils.ts</div>
            <Charts />
          </Card>
        </Spin>
      </PageContainer>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-shadow
export default connect(({ My, loading }: IMyConnectState) => ({
  ...My,
  myLoading: loading.effects["My/fetch"],
}))(My);
