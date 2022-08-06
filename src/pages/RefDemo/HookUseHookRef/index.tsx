import React, {
  useImperativeHandle,
  useRef,
  useEffect,
  forwardRef,
} from "react";
import { PageContainer } from "@ant-design/pro-layout";
import { Card } from "antd";

const Child = (props: any, ModalRef: any) => {
  useImperativeHandle(ModalRef, () => ({
    getData: () => {
      return [1, 2, 3];
    },
  }));

  return (
    <>
      <div ref={ModalRef}>sss</div>
    </>
  );
};

const Children = forwardRef(Child);

const Father = () => {
  const ModalRef = useRef<any>(null);

  useEffect(() => {
    console.log(ModalRef.current.getData());
  }, []);

  return (
    <>
      <PageContainer>
        <Card style={{ margin: 24 }}>
          <Children ref={ModalRef} />
        </Card>
      </PageContainer>
    </>
  );
};

export default Father;
