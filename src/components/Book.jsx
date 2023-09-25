import React from "react";
import classes from "./Book.module.css";

const Book = ({ weeks, image, title, author, id, description, url }) => {
  let week = "New on the New York Times Bestsellers List";
  if (weeks > 1) {
    week = `${weeks} weeks on the New York Times Bestsellers List`;
  }
  return (
    <div className={classes.book}>
      <span className={classes.weeks}>{week} </span>
      <a href={url}>
        <img src={image} alt={title} />
      </a>
      <h2>{title}</h2>
      <p>{description}</p>
      <h4>{author}</h4>
      <span className={classes.number}>{`# ${id}`}</span>
    </div>
  );
};

export default Book;
