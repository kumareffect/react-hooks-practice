import { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  const changeMe = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
    inputRef.current.style.color = "white";
  };

  return (
    <>
      <input type="text" placeholder="Your name" ref={inputRef} />

      <input type="button" onClick={changeMe} value="Change me" />
    </>
  );
};

export default App;
