import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "./slice/UserSlice";
const EditForm = ({ editUser, setEditUser, editButton }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (editUser) {
      setData(editUser);
    }
  }, [editUser]);

  const validate = (event) => {
    event.preventDefault();
    console.log(data);
    dispatch(updateUser(data)).unwrap();
    setEditUser(null);
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
        <legend>Edit Form</legend>
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
          <input type="submit" value={editButton} />
        </form>
      </fieldset>
    </>
  );
};

export default EditForm;
