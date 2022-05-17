import React from "react";
import "./styles.css";
import useBeforeLeave from "./useBeforeLeave";

export default function App() {
  const leaveOut = () => console.log("Plz Don't Leave:(");
  useBeforeLeave(leaveOut);
  return <h1 className="App"> Hello</h1>;
}
