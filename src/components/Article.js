import React from "react";

function Article(props) {
  const displayDate = props.date ? (<small>{props.date}</small>) : ( <small>"January 1, 1970"</small>);
  return (
    <article>
      <h3>{props.title}</h3>
      {displayDate}
      <p> {props.preview} </p>
    </article>
  );
}

export default Article;