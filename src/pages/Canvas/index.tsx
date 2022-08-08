import React, { useEffect } from "react";
import { PageContainer } from "@ant-design/pro-layout";
import { Card } from "antd";
import MarkDown from "@/components/MarkDown";
import { canvasMarkdown } from "./constant";

const CanvasComponent = (props: any) => {
  return (
    <>
      <PageContainer>
        <Card style={{ margin: 24 }}>
          <MarkDown markdown={canvasMarkdown} />
        </Card>
      </PageContainer>
    </>
  );
};
export default CanvasComponent;
