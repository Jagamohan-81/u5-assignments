import { useState } from "react";

export const TodoInput = ({ getData }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        className="input"
        onChange={(e) => {
          //  console.log(e.target.value);
          setText(e.target.value);
        }}
        type="text"
        placeholder="Enter Your Task"
      />
      <button
        className="input-btn"
        onClick={() => {
          getData(text);
        }}
      >
        +
      </button>
    </div>
  );
};
