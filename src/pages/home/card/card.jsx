import React from "react";
import style from "./card.module.scss";
let a=0;
export const Card = ({ p, img, title, text, color,desc }) => {
a++;
 if(a<=3){
  return (
    <div
      style={{ padding: p, background: color }}
      className={style.small}
    >
      <div>
        <p className={style.title}>{title}</p>
        <p className={style.desc}>{desc?desc:""}</p>
        <p className={style.price}>{text}</p>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
 }
 else if(a>3 && a<=5){
  if(a===5) a=0;
  return (
    <div
      style={{ padding: p, background: color }}
      className={style.full}
    >
      <div>
        <p className={style.title}>{title}</p>
        <p className={style.desc}>{desc?desc:""}</p>
        <p className={style.price}>{text}</p>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
 }
};
