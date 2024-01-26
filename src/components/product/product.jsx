import React from 'react'
import { Btn } from "../btn";
import style from "./product.module.scss";
import { ProductData } from '../data/data';
import { ProductCard } from '../productCard/productCard';

export const Product = () => {
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
       <div>
        {ProductData.map((item)=> <ProductCard key={item.id} {...item}/>)}
       </div>
      </div>
    </section>
  )
}
