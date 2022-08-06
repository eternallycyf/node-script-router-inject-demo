import Picker1 from "./Picker1";
import Picker2 from "./Picker2";
import { Card } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
export default function IndexPage() {
  return (
    <>
      <PageContainer>
        <Card style={{ margin: 24 }}>
          <Picker1 />
          <Picker2 />
        </Card>
      </PageContainer>
    </>
  );
}
