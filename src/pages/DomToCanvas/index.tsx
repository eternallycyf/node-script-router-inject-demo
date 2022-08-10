import type { ChangeEvent } from "react";
import React, { useState } from "react";
import { PageContainer } from "@ant-design/pro-layout";
import { Card, Button, Input } from "antd";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const CanvasComponent = () => {
  const [value, setValue] = useState("");

  const downLoad = () => {
    domtoimage
      .toBlob(document.getElementById(value))
      .then(function (blob: Blob) {
        saveAs(blob, "domtoimage.png");
      });
  };

  return (
    <>
      <PageContainer>
        <Card style={{ margin: 24 }} id="domCard">
          <Input
            placeholder="请输入想下载的dom-id"
            value={value}
            allowClear
            onChange={(e: ChangeEvent) => setValue(e.target.value)}
          />
          <Button onClick={() => downLoad()}>下载</Button>
        </Card>
      </PageContainer>
    </>
  );
};
export default CanvasComponent;
