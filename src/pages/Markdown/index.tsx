import MarkDown from "@/components/MarkDown";
import RcCard from "@/components/RcCard";
import { Button, Space } from "antd";

const markdown = `
这里是markdown语法
~~~js
console.log('It works!')
~~~
`;

export default () => {
  return (
    <>
      <RcCard
        content={
          <>
            <Space>
              <h2>size: </h2>
              <Button type="primary" size="large">
                lg button
              </Button>
              <Button type="primary" size="small">
                small button
              </Button>
            </Space>
          </>
        }
        code={`
      import { Button } from 'pluviophobe-react';
      <h2>size</h2>
      <Button type="primary" size='lg'>
         lg button 
      </Button>
      <Button type="primary" size='small'>
         small button 
      </Button>
  `}
        descriptionTitle={"button Type"}
        description={
          <div>
            There are five types of buttons: primary button, secondary button,
            dotted button, text button and link button. The main button can
            appear at most once in the same operation area.
          </div>
        }
      />
      <MarkDown markdown={markdown} />
    </>
  );
};
