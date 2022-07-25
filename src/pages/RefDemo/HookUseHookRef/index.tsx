import React, {
  useImperativeHandle,
  useRef,
  useEffect,
  forwardRef,
} from "react";

const Child = (props, ModalRef) => {
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
  const ModalRef = useRef(null);

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
