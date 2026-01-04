import { useEffect, useState } from "react";
import { False } from "./False";
import { True } from "./True";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (5 + 5 === 10) {
      setData({ kumar: "Kumar" });
    }
  }, []);

  // Only apply to DOM element like div.. style={{}} use Terenary operator..

  return (
    <>
      <div style={{ display: data ? "block" : "none" }}>
        <True />
      </div>
      <div style={{ display: data ? "none" : "block" }}>
        <False />
      </div>
    </>
  );

  // return <>{data ? <True /> : <False />}</>;
};

export default App;
