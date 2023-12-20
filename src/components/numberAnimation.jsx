import { useEffect, useState } from "react";

function NumberAnimation() {
  const [counter, setCounter] = useState(35000);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 3), 1);
  }, [counter]);

  return (
    <div className="flex uppercase letterSpacing fontSize">
      <div>{(counter + 1).toLocaleString()}</div>
      <p>+ Already joined</p>
    </div>
  );
}

export default NumberAnimation;
