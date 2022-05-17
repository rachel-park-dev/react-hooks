import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const sayHello = () => console.log("Hello!");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  // useEffect(sayHello);
  // As soon as component mount, you can see Hello in conosle
  /*
  (1) componentDidmount : when I refresh, run the sayHello func.
  (2) componentDidUpdate : when I click, run the sayHello func.
  */
  useEffect(sayHello, [number]);
  //useEffect is running sayHello in componentDidMount and Only running it again when number changes
  //this is basically dependency.(number)
  return (
    <div className="App">
      <h1>Hi</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>
      <button
        onClick={() => {
          setAnumber(aNumber + 1);
        }}
      >
        {aNumber}
      </button>
    </div>
  );
}
