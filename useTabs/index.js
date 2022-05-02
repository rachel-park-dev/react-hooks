import { useState } from "react";
import "./styles.css";

const contents = [
  {
    tab: "Section1",
    section: "Content1",
  },
  {
    tab: "Section2",
    section: "Content2",
  },
];

const App = () => {
  const { currentItem, changeItem } = useTabs(0, contents);

  return (
    <div className="App">
      <h1>Hello</h1>
      <div className="container">
        {contents.map((content, index) => (
          <button
            key={index}
            className="tabMenu"
            onClick={() => {
              changeItem(index);
            }}
          >
            {content.tab}
          </button>
        ))}
      </div>
      <div className="tabBox">{currentItem.section}</div>
    </div>
  );
};

export default App;
