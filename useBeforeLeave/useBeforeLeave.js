import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }

  let handleMouseLeave = (event) => {
    console.log(event);
    onBefore();
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);
  //한 번만 사용
};

export default useBeforeLeave;
