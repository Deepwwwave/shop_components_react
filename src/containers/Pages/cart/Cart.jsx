import React, { Fragment } from 'react'
import ArticleCart from '../../../components/articleCart/ArticleCart'
import Button from '../../../components/button/Button';
import { useSelector } from "react-redux";

export default function Panier() {
  const { articlesCart } = useSelector((state) => state.articleReducer);
  return (
    <main>
      {articlesCart.map((articleCart) => {
        return (
          <Fragment key={articleCart.id}>
          <ArticleCart title={articleCart.title} imgPath={articleCart.url} />
          <Button>Supprimer</Button>
        </Fragment>
        )
      })}
    </main>
  )
}
