import { useRef, useEffect } from "react";

const useClick = (onClick) => {
  if (typeof onClick !== "function") return;

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    } //(1)call, (2)update
    //when component mount, add event (componentDidMount)
    return () => {
      if (element.current)
        element.current.removeEventListener("click", onClick);
      //clean up eventListener(componentWillUnmount)
    }; //(3)end
  }, []);
  return element;
};

export default useClick;
