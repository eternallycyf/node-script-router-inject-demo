import React, {
  useImperativeHandle,
  useRef,
  useEffect,
  forwardRef,
} from "react";

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
      <Children ref={ModalRef} />
    </>
  );
};

export default Father;
