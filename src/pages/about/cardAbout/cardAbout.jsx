import React from "react";
import style from "./cardAbout.module.scss";
import img from "../../../assets/img/productImg1.png";
import star from "../../../assets/icon/star.svg";
import { Link } from "react-router-dom";

export const CardAbout = ({...product}) => {
    console.log(product.url);
  return (
    <Link to={`product/${product.id}`} className={style.box}>
      <div>
        <img src={product.url} alt="img" />
      </div>
      <p className={style.saleDesc}>{product.type}</p>
      <img className={style.star} src={star} alt="" />
      <div className={style.card_content}>
        <p className={style.title}>{product.title}</p>
        <p className={style.text}>
          {product.text}
        </p>
        <p className={style.price}>{product.price}</p>
        <div className={style.sale_contentBox}>
          <p className={style.oldPrice}>{product.oldPrice}</p>
          <div className={style.sale_box}>
            <p className={style.sale}>{product.sale}</p>
            <p className={style.econom}>{product.desc}</p>
          </div>
        </div>
        <div className={style.btn_box}>
          <button className={style.btn_first}>Купить</button>
          <button className={style.btn_second}>В 1 клик</button>
        </div>
      </div>
    </Link>
  );
};
