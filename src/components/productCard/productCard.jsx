import React from "react";
import style from "./productCard.module.scss";
import { Btn } from "../btn";

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
      <div className={style.img}>
        <img src={url} alt="url" />
      </div>
      <div className={style.text_box}>
        <p className={style.title}>{title}</p>
        <p className={style.text}>{text}</p>
        <p className={style.price}>{price}</p>
        <div className={style.Price_box}>
          <p className={style.oldPrice}>{oldPrice}</p>
          <div className={style.saleBox}>
            <p className={style.sale}>{sale}</p>
            <p className={style.desc}>{desc}</p>
          </div>
        </div>
        <div className={style.btn_box}>
          <Btn color="#fff" bg="#0E2149" Padding="12px 26px">
            Купить
          </Btn>
          <Btn color="#fff" Padding="12px 19px 12px 24px" bg="#CFB08B">
            В 1 клик
          </Btn>
        </div>
      </div>
    </div>
  );
};
