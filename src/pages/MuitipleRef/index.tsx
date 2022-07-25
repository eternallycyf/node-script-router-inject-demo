import React, { useRef } from "react";

const MuitipleRef = () => {
  const list = [...Array(8).keys()];
  const inputRef = useRef([]);
  const handler = (idx) => (e) => {
    const next = inputRef.current[idx + 1];
    if (next) {
      next.focus();
    }
  };

  return (
    <div className="App">
      <div className="input_boxes">
        {list.map((x) => (
          <div>
            <input
              key={x}
              ref={(el) => (inputRef.current[x] = el)}
              onChange={handler(x)}
              type="number"
              className="otp_box"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MuitipleRef;
