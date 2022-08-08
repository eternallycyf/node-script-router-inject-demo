import { Button, Card } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
import MarkDown from "@/components/MarkDown";
import { svgOther } from "../Base/constant";
const Add: React.FC = () => {
  return (
    <PageContainer>
      <Card style={{ margin: 24 }}>
        <MarkDown markdown={svgOther} />
      </Card>
    </PageContainer>
  );
};

export default Add;
