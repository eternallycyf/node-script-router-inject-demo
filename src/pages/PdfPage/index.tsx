import PDFPreview from "@/components/PDF/PDFPreview";
import { useRef } from "react";
import { Upload, Form, Button } from "antd";

const normFile = (e: any) => {
  if (Array.isArray(e)) return e;
  return e?.fileList;
};

const getBase64 = (
  img: Blob,
  cb: (result: string | ArrayBuffer | null) => void,
) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => cb(reader.result));
  reader.readAsDataURL(img);
};

const PdfPage = () => {
  const pdfRef = useRef<any>(null!);
  const [form] = Form.useForm();

  const handlePreviewPdf = ({ originFileObj }: any) => {
    // 1.base64方式预览
    getBase64(originFileObj, (imgUrl: string | ArrayBuffer | null) => {
      pdfRef.current.controlIsShow({
        base64: imgUrl,
      });
    });
    // 2.src方式预览 通过后端接口获取src路径
    // pdfRef.current.controlIsShow({
    //   src: "http://marsgis.cn/doc/study-gis.pdf",
    // });
  };

  return (
    <>
      <Form form={form}>
        <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload
            onPreview={(file) => handlePreviewPdf(file)}
            beforeUpload={() => {
              return false;
            }}
            name="avatar"
            maxCount={1}
          >
            <Button>上传pdf</Button>
          </Upload>
        </Form.Item>
      </Form>
      <PDFPreview ref={pdfRef} />
    </>
  );
};

export default PdfPage;
