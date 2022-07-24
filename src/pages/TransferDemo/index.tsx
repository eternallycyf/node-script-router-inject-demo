import TransferForm from "@/components/TransferForm";
import styles from "./index.less";
import React, { useRef, useState, useEffect } from "react";
import { Form, Button } from "antd";
import type { FormInstance } from "antd/es/form";

const TransferDemo = () => {
  // const TransferRef = useRef(null)
  const [form] = Form.useForm();
  const [mockData, setMockData] = useState<any>([]);

  const TransferRef = useRef(null);

  useEffect(() => {
    const initData = Array.from({
      length: 20,
    }).map((_, i) => ({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
    }));
    setMockData(initData);
  }, []);

  const testData = () => {
    const initData = Array.from({
      length: 10,
    }).map((_, i) => ({
      key: i.toString(),
      title: `content${i + 1}`,
      description: `description of content${i + 1}`,
    }));
    setMockData(initData);
  };

  const transferOkCallBack = () => {
    const { getData } = TransferRef.current;
    console.log(form?.getFieldValue("test"));
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <button
        onClick={() => {
          TransferRef.current.useVisible(true);
        }}
      >
        打开
      </button>
      <button onClick={() => testData()}>set</button>
      <Form form={form} onFinish={onFinish}>
        ssssss
        <Form.Item style={{ display: "inline-block" }}>
          <TransferForm
            formRef={form}
            originData={mockData}
            ref={TransferRef}
            transferOkCallBack={() => transferOkCallBack()}
          />
        </Form.Item>
        sssss
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default TransferDemo;
