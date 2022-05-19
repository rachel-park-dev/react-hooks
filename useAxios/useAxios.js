import defaultAxios from "axios";
import { useState, useEffect } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  //instance를 가지고 있지 않다면 기본값으로 defaultAxios를 세팅한다
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    if (!opts.url) {
      return;
    }

    axiosInstance(opts)
      .then((data) => {
        setState({ ...state, loading: false, data });
        data.setHeader("Access-Control-Allow-origin", opts.url);
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);

  return { ...state, refetch };
};

export default useAxios;
