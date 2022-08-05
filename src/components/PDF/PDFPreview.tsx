import React, { PureComponent } from "react";
import { Modal } from "antd";
import PDFView from "./PDFView";

class PDFPreview extends PureComponent<any, any> {
  protected pdfViewRef: React.RefObject<any> = React.createRef();
  constructor(props: any) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  //显隐状态的改变
  controlIsShow = (params: { src?: string; base64?: string }) => {
    const { modalVisible } = this.state;
    const { src, base64 } = params;
    this.setState({
      modalVisible: !modalVisible,
      src,
      base64,
    });
  };

  render() {
    const { modalVisible, src, base64 } = this.state;
    return (
      <Modal
        visible={modalVisible}
        title="PDF预览"
        onCancel={() => {
          this.setState({
            modalVisible: false,
          });
        }}
        width={1200}
        footer={null}
        destroyOnClose={true}
      >
        <PDFView
          ref={this.pdfViewRef}
          src={src}
          base64={base64}
          styles={{
            height: "600px",
          }}
        />
      </Modal>
    );
  }
}
export default PDFPreview;
