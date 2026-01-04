import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import ConsumerContext from "./ConsumerContext";

const ParentContext = () => {
  const [theme, setTheme] = useState("red");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ConsumerContext />
      </ThemeContext.Provider>
    </>
  );
};

export default ParentContext;
