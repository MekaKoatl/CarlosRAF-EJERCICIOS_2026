import { useState } from "react";

export function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div className="Contador">
      <p>Clicks: {count}</p>
      <br />
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}