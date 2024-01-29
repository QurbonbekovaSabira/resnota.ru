import React from "react";
import style from "./header.module.scss";
import logo from "../../assets/icon/logo.svg";
import star from "../../assets/icon/star.svg";
import card from "../../assets/icon/card.svg";

export const Header = () => {
  return (
    <>
      <div id="container" className={style.header_firstBox}>
        <div className={style.logoBox}>
          <a href="#" className={style.img_box}>
            <img src={logo} alt="" />
          </a>
          <p className={style.text}>Колбасы и мясные деликатесы</p>
        </div>
        <div className={style.header_firstBox_icon}>
          <div className={style.header_firstBox_iconBox}>
            <img src={star} alt="star" />
            <span>3</span>
          </div>
          <img src={card} alt="card icon" />
          <div className={style.desc_box}>
            <p className={style.desc}>
              Товаров: <span>3 </span>
            </p>
            <p className={style.price}>6 540 ₽</p>
          </div>
        </div>
      </div>
      <div className={style.header_SecondBox}>
     <div id="container" className={style.header_SecondBox_container}>
     <div className={style.link}>
          <a href="#" className={style.link_text}>О ресноте</a>
          <a href="#" className={style.link_text}> Каталог </a>
          <a href="#" className={style.link_text}> Наши магазины </a>
          <a href="#" className={style.link_text}> Контакты</a>
        </div>
       <form  className={style.form}>
        <input type="text" placeholder="Поиск по сайту" aria-label="Поиск по сайту" />
       </form>
       <div className={style.button_box}>
        <button className={style.menu_button}></button>
        <button className={style.saerch_button}></button>
       </div>
     </div>
      </div>
    </>
  );
};
