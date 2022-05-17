import useClick from "./useClick";

export default function App() {
  const sayHello = () => console.log("Say Hello:)");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
      {/* all of elements in react have reference props */}
    </div>
  );
}
