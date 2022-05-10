const usePreventLeave = () => {
  /** API에 무언가를 보냈고, 사람들이 닫지 않기를 바란다면 이벤트를 보호할 수 있게 활성화 시키는 것!
   * 그런데 API가 응답을 해서 ok인 상태라면 창을 닫아도 상관이 없다. 즉, 보호조치를 비활성화 시킨다.
   */
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  //beforeunload : window가 닫히기 전에 function 이 실행됨
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
