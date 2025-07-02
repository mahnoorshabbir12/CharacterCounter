import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
function App() {
  const [input, setInput] = useState("");
  const textAdded = () => {
    setInput(`Characters are : ` + input.length);
  };
  return (
    <>
      <h1 className="mb-9">Character Counter</h1>
      <div
        style={{ backgroundColor: "#f15bb5", alignItems: "center" }}
        className="h-96 w-3xl flex flex-wrap justify-center flex-col"
      >
        <div>
          <input
            placeholder="Enter your word"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ backgroundColor: "#fee440" }}
            className="rounded-2xl py-2 px-3 mb-14 w-96 h-12 text-black border-amber-300 text-center"
          />
        </div>
        <button
          onClick={textAdded}
          // style={{ backgroundColor: "#00bbf9" }}
          className="rounded-3xl w-56 transition bg-blue-400 hover:bg-blue-700 hover:shadow-lg"
        >
          Find Characters
        </button>
      </div>
    </>
  );
}

export default App;
