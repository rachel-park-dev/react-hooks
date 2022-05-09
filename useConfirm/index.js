import React from "react";

export default function App() {
  const deleteWord = () => console.log("delete the word");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you Sure?", deleteWord, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the Word</button>
    </div>
  );
}
