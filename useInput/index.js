import { useState } from "react";
import useInput from "./useInput";

const App = () => {
  const maxLen = (value) => value.length < 10;
  const name = useInput("Mr.", maxLen);
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <input placeholder="Name" value={name.value} /> */}
      <input placeholder="Name" {...name} />
      <p>Count: {item}</p>
      <button onClick={incrementItem}>증가</button>
      <button onClick={decrementItem}>감소</button>
    </div>
  );
};

export default App;
