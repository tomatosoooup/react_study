import classes from "./AddUser.module.css";
import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const usernameHandler = (event) => {
    setUserName(event.target.value);
  };
  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }

    if (+userAge < 1) {
      return;
    }
    setUserName("");
    setUserAge("");

    props.onAddUser(userName, userAge);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={usernameHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={userAge}
          onChange={userAgeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
