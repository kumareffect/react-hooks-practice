import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, deleteUser } from "./slice/UserSlice";
import { useState } from "react";
import EditForm from "./EditForm";
import Form from "./Form";

const View = () => {
  const [editUser, setEditUser] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  console.log(users);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      <div style={{ display: editUser ? "none" : "block" }}>
        <Form submitButton="Submit" />
      </div>

      <div style={{ display: editUser ? "block" : "none" }}>
        <EditForm
          editUser={editUser}
          setEditUser={setEditUser}
          editButton="Edit"
        />
      </div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
          <button onClick={() => setEditUser(user)}>Edit</button>
          <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default View;
