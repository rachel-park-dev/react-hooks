import React from "react";
import { useScroll } from "./useScroll";

export default function App() {
  const { y } = useScroll();

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1
        style={{
          position: "fixed",
          color: y > 100 ? "navy" : "lightskyblue",
        }}
      >
        Title
      </h1>
    </div>
  );
}
