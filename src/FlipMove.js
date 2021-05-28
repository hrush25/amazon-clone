import React, { forwardRef } from "react";
import FlipMove from "react-flip-move";

const FunctionalArticle = forwardRef((props, ref) => (
  <div ref={ref}>{props.articleName}</div>
));

// you do not have to modify the parent component
// this will stay as described in the quickstart
const TopArticles = ({ articles }) => (
  <FlipMove>
    {articles.map(article => (
      <FunctionalArticle key={article.id} {...article} />
    ))}
  </FlipMove>
);

export default FlipMove;
