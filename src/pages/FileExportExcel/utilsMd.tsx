import MarkDown from "@/components/MarkDown";
import { PageContainer } from "@ant-design/pro-layout";
import { Card } from "antd";
import { utilsMarkdown } from "./markdown";

export default () => {
  return (
    <>
      <PageContainer>
        <Card style={{ margin: 24 }}>
          <MarkDown markdown={utilsMarkdown} />
        </Card>
      </PageContainer>
    </>
  );
};
