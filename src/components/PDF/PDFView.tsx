import type { CSSProperties } from "react";
import { PureComponent } from "react";
import style from "./pdfView.less";
import cx from "classnames";
import { Skeleton } from "antd";

interface IProps {
  styles?: CSSProperties;
  src?: string;
  base64?: string;
  [onherProps: string]: any;
}

class PDFView extends PureComponent<IProps, any> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props);
    this.state = {
      pdfSrc: "",
      loading: true,
    };
  }
  componentDidMount() {
    const { src, base64 } = this.props;
    if (src) {
      this.showPDFBySrc(src);
    } else if (base64) {
      this.showPDFByBase64(base64);
    }
  }
  componentwillUnmount() {
    URL.revokeObjectURL(this.state.pdfSrc);
  }
  //通过src展示
  showPDFBySrc = async (src: string) => {
    try {
      this.setState({
        loading: true,
      });
      this.setState({
        pdfSrc: src,
        loading: false,
      });
    } catch (err) {}
  };

  //base64转blob
  dataURItoBlob = (dataURI: string) => {
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0]; // mime类型
    const byteString = atob(dataURI.split(",")[1]); //base64 解码
    const arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
    const intArray = new Uint8Array(arrayBuffer); //创建视图
    for (let i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([intArray], { type: mimeString });
  };

  //通过base64展示
  showPDFByBase64 = async (content: string) => {
    const blob = this.dataURItoBlob(content);
    const fileUrl = URL.createObjectURL(blob);
    this.setState({
      pdfSrc: fileUrl,
      loading: false,
    });
  };

  render() {
    const { styles, className } = this.props;
    const { loading, pdfSrc } = this.state;
    const src = `${pdfSrc}`;
    return loading ? (
      <Skeleton loading paragraph={{ rows: 10 }} active />
    ) : (
      <iframe
        className={cx(style.iframeStyle, className)}
        style={styles}
        src={src}
        title="pdf预览"
      />
    );
  }
}
export default PDFView;
