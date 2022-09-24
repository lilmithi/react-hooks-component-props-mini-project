import React from "react";

const Article = ({
  id,
  heading = "Components 101",
  date = "January 1, 1970",
  para = "Setting up the building blocks of your site",
}) => {
  return (
    <article key={id}>
      <h3>{heading}</h3>
      <small>{date}</small>
      <p>{para}</p>
    </article>
  );
};

export default Article;
