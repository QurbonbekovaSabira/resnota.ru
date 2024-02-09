import React from "react";
import { Category } from "./category";
import style from "./about.module.scss";
import {Type} from "../../components/data/data";
import { CardAbout } from "./cardAbout/cardAbout";

import {ProductDate} from "../../components/data/data"


export const About = () => {
  return (
    <section className={style.about}>
      <div id="container" className={style.about__container}>
        <div></div>
        <div>
          <div className={style.desc}>
            <p className={style.text}>Главная</p>
          <span></span>
            <p className={style.text}>Каталог</p>
           <span></span>
            <p className={style.text}>Колбасные и мясные иделия</p>
           <span></span>
            <p className={style.text_active}>Деликатесы</p>
          </div>
          <h1 className={style.title}>Каталог</h1>
         <div className={style.category_box}>
         {Type.map((item)=> <Category key={item.id}>{item.text}</Category>)}
         </div>
         <select className={style.select}>
            <option value="По умолчанию">По умолчанию</option>
         </select>
         {ProductDate.map((item)=><CardAbout key={item.id} {...item}/>)}
         
        </div>
      </div>
    </section>
  );
};
