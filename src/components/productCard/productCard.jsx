import React from "react";
import style from "./productCard.module.scss";
import { Btn } from "../btn";
export const ProductCard = () => {
  return (
    <section className={style.productCard}>
      <div id="container">
       <div className={style.btn_box}>
       <Btn color="#111" bg="#EFF2F4" Padding="13px 28px">
          Хиты
        </Btn>
        <Btn color="#111" bg="#EFF2F9" Padding="13px 28px">Скидки</Btn>
        <Btn color="#111" bg="#EFF2F4" Padding="13px 28px">
        Новинки
        </Btn>
       </div>
      </div>
    </section>
  );
};
