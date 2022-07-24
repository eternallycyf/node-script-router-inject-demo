import { Switch, Transfer, Button, Checkbox, Modal } from "antd";
import React, {
  useState,
  useImperativeHandle,
  useRef,
  useEffect,
  forwardRef,
  Ref,
} from "react";
import styles from "./index.less";
import { Form, Select } from "antd";
import type { FormInstance } from "antd/es/form";
import { ModalProps } from "antd/es/modal";
import { TransferProps } from "antd/es/transfer";

interface Iprops {
  transferOkCallBack: Function;
  originData: Array<any>;
  formRef: FormInstance;
  falseSelectItmeName: string;
  modalProps: ModalProps;
  transferProps: TransferProps<any>;
  [props: string]: any;
}

// 打平数组
const flattenDeep: any = (arr: any) =>
  Array.isArray(arr)
    ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
    : [arr];
const filterRepeatList = (arr: any) => [...new Set([...arr])];
// 找到改变项的全部信息
const findAllMessage = (originArr: any, keyArr: any) => {
  let arr: [] = [];
  keyArr.forEach((item: any) => {
    arr.push(originArr.filter((ele) => ele.key == item));
  });
  return flattenDeep(arr);
};

const TransferForm = (props: Iprops, TransferRef: any) => {
  const [targetKeys, setTargetKeys] = useState<any>([]);
  const [selectedKeys, setSelectedKeys] = useState<any>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const transferBox = useRef<any>(null!);

  const {
    transferOkCallBack,
    originData = [],
    formRef,
    modalProps,
    transferProps,
    falseSelectItmeName = "test",
  } = props;

  // 当重新设置数据源 情况所有数据
  useEffect(() => {
    setTargetKeys([]);
    setSelectedKeys([]);
    formRef.setFieldsValue({
      [falseSelectItmeName]: [],
    });
  }, [originData.length]);

  // 暴露给ref的接口
  useImperativeHandle(TransferRef, () => ({
    getData: () => {
      return [targetKeys, originData];
    },
    setData: (arr: any) => {
      setSelectedKeys(arr);
    },
    useVisible: (bool: boolean) => {
      setVisible(bool);
    },
  }));

  const handleChange = (
    newTargetKeys: Array<any>,
    direction: string,
    moveKeys: any,
  ) => {
    // 删除数据
    const newKeys =
      direction === "right"
        ? [...targetKeys, moveKeys]
        : targetKeys.filter((key: any) => !moveKeys.includes(key));
    setTargetKeys([...newKeys]);
    setSelectedKeys([]);
  };

  const handleSelectChange = (
    sourceSelectedKeys: Array<any>,
    targetSelectedKeys: Array<any>,
  ) => {
    // 设置新的数据
    const selectedKeysArr = filterRepeatList([
      ...sourceSelectedKeys,
      ...targetSelectedKeys,
    ]);
    const targetKeysArr = filterRepeatList([
      ...targetKeys,
      ...sourceSelectedKeys,
      ...selectedKeys,
    ]);
    const formItemArr = filterRepeatList([
      ...targetKeys,
      ...sourceSelectedKeys,
      ...selectedKeys,
    ]);
    setSelectedKeys([...selectedKeysArr]);
    setTargetKeys([...targetKeysArr]);
    // 同步为一个select设置相同的状态 select选中
    formRef.setFieldsValue({
      [falseSelectItmeName]: findAllMessage(originData, formItemArr),
    });
  };

  const handleModalOk = () => {
    formRef.setFieldsValue({
      [falseSelectItmeName]: findAllMessage(originData, targetKeys),
    });
    setVisible(false);
    transferOkCallBack && transferOkCallBack();
  };

  return (
    <>
      <Form.Item>
        <div className={styles.transferBox} ref={transferBox}>
          <Modal
            width={1000}
            title="选择三方机构"
            getContainer={transferBox?.current}
            visible={visible}
            okText="确定"
            cancelText="取消"
            onCancel={() => setVisible(false)}
            onOk={() => handleModalOk()}
            forceRender={true}
            centered={true}
            maskClosable={false}
            {...modalProps}
          >
            <Transfer
              listStyle={{ height: 500 }}
              style={{ position: "relative" }}
              operationStyle={{
                position: "absolute",
                top: 200,
                visibility: "hidden",
              }}
              showSearch
              dataSource={originData}
              titles={[
                <Checkbox
                  checked={false}
                  onClick={() =>
                    setTargetKeys(originData.map((item: any) => item.key))
                  }
                ></Checkbox>,
                <a
                  href="#"
                  onClick={() => {
                    setTargetKeys([]);
                    setSelectedKeys([]);
                  }}
                >
                  清空
                </a>,
              ]}
              selectAllLabels={[
                "全部",
                <span>
                  {" "}
                  已选{targetKeys.length ?? "--"}/{originData.length ?? "--"}
                </span>,
              ]}
              showSelectAll={false}
              targetKeys={targetKeys}
              selectedKeys={selectedKeys}
              onChange={(a, b, c) => handleChange(a, b, c)}
              onSelectChange={(a, b) => handleSelectChange(a, b)}
              render={(item) => item.title as string}
              oneWay
              {...transferProps}
            />
          </Modal>
        </div>
      </Form.Item>
      <Form.Item
        name={falseSelectItmeName}
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 0 }}
      >
        <Select
          mode="multiple"
          style={{ width: "0%", display: "none" }}
          labelInValue
          options={[
            { label: "t", value: 1 },
            { label: "a", value: 2 },
          ]}
        />
      </Form.Item>
    </>
  );
};

export default forwardRef(TransferForm);

// const [form] = Form.useForm();
// const TransferRef = useRef(null)

// const mockData = Array.from({
//   length: 20,
// }).map((_, i) => ({
//   key: i.toString(),
//   title: `content${i + 1}`,
//   description: `description of content${i + 1}`,
// }))

// const transferOkCallBack = () => {
//   const { getData } = TransferRef.current
//   console.log(form?.getFieldValue('test'))
// }

// <Form form={form} onFinish={onFinish}>
//   <Form.Item style={{ display: 'inline-block' }}>
//     <TransferForm
//       formRef={form}
//       originData={mockData}
//       ref={TransferRef}
//       transferOkCallBack={() => transferOkCallBack()}
//     />
//   </Form.Item>
// </Form>
