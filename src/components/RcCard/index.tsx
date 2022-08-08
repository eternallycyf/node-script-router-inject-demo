import React, { useState } from "react";
import { Card, Divider, Empty } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./index.less";
/**
 * @param {string} cardTitle card组件的左上角
 * @param {ReactNode} cardExtra card组件右上角
 * @param {ReactNode} content 组件
 * @param {string} descriptionTitle 分割线上的描述文本
 * @param {ReactNode} description 分割线下的描述内容
 * @param {string} code 代码块
 */
const RcCard = (props: any) => {
  const {
    content = "",
    descriptionTitle = "",
    description = "",
    code = "",
    cardTitle = "",
    cardExtra = "",
    ...restProps
  } = props;
  const [state, setState] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };
  const renderContent = () => {
    if (content) {
      if (typeof content == "string") {
        return (
          <SyntaxHighlighter
            showLineNumbers
            language="javascript"
            style={dracula}
          >
            {content.toString()}
          </SyntaxHighlighter>
        );
      } else {
        return content;
      }
    } else {
      return <Empty />;
    }
  };

  return (
    <>
      <Card
        title={cardTitle}
        extra={cardExtra}
        style={{ margin: 20 }}
        {...restProps}
      >
        {renderContent()}
        <Divider orientation="left">{descriptionTitle ?? ""}</Divider>
        <div>{description ?? ""} </div>
        {/* 下方的按钮 */}
        <div className={"pl-card-icon-box"}>
          <div className={"pl-card-icon"}>
            <CopyOutlined onClick={() => copyCode()} />
          </div>
          <div className={"pl-card-icon"} onClick={() => setState(!state)}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg"
            />
          </div>
        </div>
        {/* 填充代码 */}
        {
          <Card
            className={"codeCard"}
            style={{
              display: `${state ? "block" : "none"}`,
              padding: "0px 0px",
            }}
          >
            {code != null && (
              <SyntaxHighlighter showLineNumbers language="tsx" style={dracula}>
                {`${code.toString()}`}
              </SyntaxHighlighter>
            )}
          </Card>
        }
      </Card>
    </>
  );
};

export default RcCard;
