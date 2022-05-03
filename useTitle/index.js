import useTitle from "./useTitle";

export default function App() {
  const titleUpdater = useTitle("Loading..."); //same as setTitle & default value is "Loading..."
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}
