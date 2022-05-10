import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }

  let handleMouseLeave = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
    //마우스가 위로 벗어났을 때만 에러를 발생시킴
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);
  //한 번만 사용
};

export default useBeforeLeave;
