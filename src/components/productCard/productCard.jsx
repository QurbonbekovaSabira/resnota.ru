import React from "react";
import style from "./productCard.module.scss";

export const ProductCard = ({
  title,
  text,
  price,
  oldPrice,
  sale,
  desc,
  url,
}) => {
  return (
    <div className={style.box}>
      <div>
        <img src={url} alt="url" />
      </div>
      <div>
        <p>{title}</p>
        <p>{text}</p>
        <p>{price}</p>
        <div>
          <p>{oldPrice}</p>
          <div>
            <p>{sale}</p>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
