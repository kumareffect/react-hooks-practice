import { useEffect, useState, useRef } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => timerRef.current;
  }, []);

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <>
      <h1>{time}</h1>

      <input type="button" value="Stop" onClick={stopTimer} />
    </>
  );
};

export default App;
