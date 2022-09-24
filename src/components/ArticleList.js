import React from "react";
import Article from "./Article";

const ArticleList = () => {
  return (
    <main>
      <Article
        id={1}
        heading="Components 101"
        date="July 13, 2020"
        para="Setting up the building blocks of your site"
      />
      <Article
        id={2}
        heading="React Data Flow"
        date="January 11, 2020"
        para="Passing props is never passé"
      />
      <Article
        id={3}
        heading="Function vs Class Components"
        date="January 1, 2020"
        para="React, meet OOJS."
      />
    </main>
  );
};

export default ArticleList;
