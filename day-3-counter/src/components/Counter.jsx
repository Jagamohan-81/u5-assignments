import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleCount = (value) => {
    setCounter(counter + value);
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button
        onClick={() => {
          handleCount(+1);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          handleCount(-1);
        }}
      >
        Sub
      </button>
      <button
        onClick={() => {
          handleCount(+counter);
        }}
      >
        Double
      </button>
      <div className={counter % 2 == 0 ? "even" : "odd"}>
        {counter % 2 == 0 ? "Even" : "Odd"}
      </div>
    </div>
  );
};
