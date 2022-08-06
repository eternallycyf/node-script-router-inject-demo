/* eslint-disable react/jsx-key */
import React, { useRef } from "react";
import { PageContainer } from "@ant-design/pro-layout";
import { Card } from "antd";

const MuitipleRef = () => {
  const list = [...Array(8).keys()];
  const inputRef = useRef([]);
  const handler = (idx: number): any => {
    const next = inputRef.current[idx + 1];
    if (next) {
      (next as any).focus();
    }
  };

  return (
    <PageContainer>
      <Card style={{ margin: 24 }}>
        <div className="App">
          <div className="input_boxes">
            {list.map((x) => (
              <div>
                <input
                  key={x}
                  ref={(el) => ((inputRef as any).current[x] = el)}
                  onChange={handler(x)}
                  type="number"
                  className="otp_box"
                />
              </div>
            ))}
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default MuitipleRef;
