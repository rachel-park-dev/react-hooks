import { useState } from "react";

const useInput = (initialValue, validation) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    //event.target : event.target.value와 동일
    let isUpdated = true;

    if (typeof validation === "function") {
      isUpdated = validation(value);
      //isUpdated에 validation의 결과를 업데이트한다
    }

    if (isUpdated) {
      setValue(value);
    }
  };

  return { value, onChange };
};

export default useInput;
