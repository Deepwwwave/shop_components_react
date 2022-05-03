import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Article from "../../components/article/Article";
import Button from "../../components/button/Button";
import { loadArticlesCart } from "../../redux/articles/action";

export default function Gallery() {

  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.articlesReducer);


  const addCart = (key) => {
      dispatch(loadArticlesCart(key))  //  EN COURS
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
