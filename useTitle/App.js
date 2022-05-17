import useTitle from "./useTitle";

export default function App() {
  const titleUpdater = useTitle("Loading..."); //same as setTitle & default value is "Loading..."
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    /*
    useRef의 역할 : 컴포넌트의 특정 영역을 선택할 수 있는 방법
    document.getElementById()를 사용한 것과 동등한 효과
    */
    <div className="App">
      <div>Hi</div>
    </div>
  );
}
