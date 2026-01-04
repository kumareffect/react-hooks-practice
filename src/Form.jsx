import { useState } from "react";
import { addUser } from "./slice/UserSlice";
import { useDispatch } from "react-redux";
const Form = ({ submitButton }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const validate = (event) => {
    event.preventDefault();
    console.log(data);
    dispatch(addUser(data));
  };

  const onChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <fieldset>
        <legend>User Form</legend>
        <br />
        <form onSubmit={validate}>
          <label htmlFor="user">User Name</label>
          <input
            type="text"
            id="user"
            placeholder="userName"
            value={data.name}
            name="name"
            onChange={onChange}
          />
          <br />
          <br />
          <label htmlFor="email">User Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={data.email}
            name="email"
            onChange={onChange}
          />
          <br />
          <br />
          <input type="submit" value={submitButton} />
        </form>
      </fieldset>
    </>
  );
};

export default Form;
