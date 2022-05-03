import React from "react";

export default function Article({ title, imgPath }) {
  return (
    <article>
      <h3>{title}</h3>
      <img src={imgPath} alt={title} />
    </article>
  );
}
