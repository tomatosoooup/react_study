import React, { useState, Fragment } from "react";
import "./App.css";
import AddUser from "./Components/User/AddUser";
import UsersList from "./Components/User/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserList = (userName, userAge) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserList} />
      <UsersList users={usersList} />;
    </Fragment>
  );
};

export default App;
