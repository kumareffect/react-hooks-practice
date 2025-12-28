import { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    userName: "",
    userPassword: "",
  });

  const onChange = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const validate = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <>
      <h1>Hello World!</h1>
      <form onSubmit={validate}>
        <input
          type="text"
          name="userName"
          placeholder="Your username here"
          value={data.userName}
          onChange={onChange}
        />
        <br />
        <input
          type="password"
          name="userPassword"
          placeholder="Your password here"
          value={data.userPassword}
          onChange={onChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default App;
