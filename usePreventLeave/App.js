import React, { useState, useEffect } from "react";
import usePreventLeave from "./usePreventLeave";

export default function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button> &nbsp;
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}
