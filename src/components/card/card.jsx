import React from "react";
import style from "./card.module.scss";

export const Card = ({ p, img, title, text, w, color,desc }) => {
  return (
    <div
      style={{ padding: p, width: w, background: color }}
      className={style.box}
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
};
