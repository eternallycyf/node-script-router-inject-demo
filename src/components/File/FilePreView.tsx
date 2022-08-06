import React, { PureComponent } from "react";
import { Modal, message } from "antd";
import FileView from "./FileView";
import { ExcelRenderer } from "react-excel-renderer";

class FilePreView extends PureComponent<any, any> {
  protected pdfViewRef: React.RefObject<any> = React.createRef();
  constructor(props: any) {
    super(props);
    this.state = {
      modalVisible: false,
      fileType: "",
      excelData: {
        cols: [],
        rows: [],
      },
    };
  }
  //显隐状态的改变
  controlIsShow = (params: {
    src?: string;
    base64?: string;
    originFileObj?: any;
  }) => {
    const { modalVisible } = this.state;
    const { src, base64, originFileObj } = params;
    const { name } = originFileObj;
    const fileType = name.slice(name.lastIndexOf(".") + 1).toLowerCase();
    const fileAllTypes = ["docx", "xlsx", "png", "jpg", "pdf"];
    if (!fileAllTypes.includes(fileType)) {
      return message.error("该文件不支持预览");
    }
    if (fileType == "xlsx") {
      ExcelRenderer(originFileObj, (err: Error, resp: any) => {
        this.setState({
          excelData: {
            cols: resp.cols,
            rows: resp.rows,
          },
        });
      });
    }
    this.setState({
      modalVisible: !modalVisible,
      src,
      base64,
      fileType,
    });
  };

  render() {
    const { modalVisible, src, base64, fileType, excelData } = this.state;
    return (
      <Modal
        visible={modalVisible}
        title={fileType + " 预览"}
        onCancel={() => {
          this.setState({
            modalVisible: false,
          });
        }}
        width={1200}
        bodyStyle={{ overflow: "scroll", height: "70vh" }}
        footer={null}
        destroyOnClose={true}
      >
        <FileView
          ref={this.pdfViewRef}
          src={src}
          base64={base64}
          fileType={fileType}
          excelData={excelData}
          styles={{
            height: "600px",
          }}
        />
      </Modal>
    );
  }
}
export default FilePreView;
