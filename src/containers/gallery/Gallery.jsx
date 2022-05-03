import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Article from "../../components/article/Article";
import Button from "../../components/button/Button";

export default function Gallery() {
  const { articles } = useSelector((state) => state.articlesReducer);

  const addCart = (key) => {
      dispatchEvent(loadArticlesCart(key))  //  EN COURS
  }

  return (
    <section>
      {articles.map((article) => {
        return (
          <Fragment key={article.id}>
            <Article title={article.title} imgPath={article.thumbnailUrl} />
            <Button>+</Button>
          </Fragment>
        );
      })}
    </section>
  );
}
