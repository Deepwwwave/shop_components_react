import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Article from "../../components/article/Article";

export default function Gallery() {
  const { articles } = useSelector((state) => state.articlesReducer);
  return (
    <section>
      {articles.map((article) => {
        return (
          <Fragment key={article.id}>
            <Article title={article.title} imgPath={article.thumbnailUrl} />
          </Fragment>
        );
      })}
    </section>
  );
}
