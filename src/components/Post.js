import React from "react";
const Post = (props) => {
  const dataTitle = props.details.map((title) => {
    return (
      <div className="post" key={title.id}>
        <h3>{title.title}</h3>
        <p>{title.body}</p>
      </div>
    );
  });
  return (
    <div className="post">
      {dataTitle}
      <p></p>
    </div>
  );
};

export { Post };
