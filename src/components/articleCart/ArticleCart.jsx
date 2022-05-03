import React from 'react'

export default function ArticleCart({imgPath, title, quantity}) {
  return (
    <section>
        <img src={imgPath} alt={title} />
        <h3>{title}</h3>
        <p>Quantity {quantity}</p>
    </section>
  )
}
