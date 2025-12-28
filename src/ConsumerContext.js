import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ConsumerContext = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeMe = () => {
    setTheme((prev) => (prev === "red" ? "blue" : "red"));
  };

  return (
    <>
      <div
        style={{ height: "300px", width: "300px", backgroundColor: theme }}
      ></div>{" "}
      <br />
      <input type="button" value="Change Me ^~^" onClick={changeMe} />
    </>
  );
};

export default ConsumerContext;
