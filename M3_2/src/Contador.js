import { useState } from "react";

export function Contador() {
  let [count, setCount] = useState(0);

  return (
    <div className="Contador">
      <p>Clicks: {count}</p>
      <br />
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}