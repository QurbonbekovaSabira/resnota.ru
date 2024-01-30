import React from "react";
import style from "./hero.module.scss";
import { Btn } from "../../../components/btn";
export const Hero = () => {
  return (
    <section className={style.hero}>
      <div id="container">
        <h1 className={style.title}>Истина в качестве</h1>
        <p className={style.text}>
         <span>К</span>ОМПАНИЯ <span>«РЕСНОТА»</span> ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
          КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ, ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ
        </p>
        <Btn color="#fff" bg="#0E2149" Padding="11px 50px" >Купить</Btn>
      </div>
    </section>
  );
};
