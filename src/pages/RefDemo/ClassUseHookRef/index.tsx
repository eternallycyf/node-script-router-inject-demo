import React, { useImperativeHandle } from "react";
import { PageContainer } from "@ant-design/pro-layout";
import { Card } from "antd";

const Children = (props: { ModalRef: any }) => {
  const { ModalRef } = props;

  useImperativeHandle(ModalRef, () => ({
    getData: () => {
      return [1, 2, 3];
    },
  }));

  return <>Children</>;
};

export default class Father extends React.Component {
  ModalRef: any = React.createRef();
  state = {};
  componentDidMount() {
    console.log(this.ModalRef.current.getData());
  }

  render() {
    return (
      <>
        <PageContainer>
          <Card style={{ margin: 24 }}>
            <Children ModalRef={this.ModalRef} />
          </Card>
        </PageContainer>
      </>
    );
  }
}
