import React from "react";
import classes from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals2.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onVisible} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="" />
      </div>
    </React.Fragment>
  );
};

export default Header;
