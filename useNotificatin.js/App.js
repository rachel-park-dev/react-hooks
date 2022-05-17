import React from "react";
import { useNotification } from "./useNotification";

export default function App() {
  const triggerNoti = useNotification("🔔 Alarm", {
    body: "This is the Notification",
  });
  return (
    <div className="App">
      <button onClick={triggerNoti}>Alarm</button>
    </div>
  );
}
