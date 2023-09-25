import React, { useEffect } from "react";
import classes from "./Header.module.css";

const Header = () => {
  const date = new Date();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  useEffect(() => {}, []);
  return (
    <div className={classes.header__main}>
      <h1 className={classes.header}>
        My Reading List, {month}, {year}
      </h1>
    </div>
  );
};

export default Header;
