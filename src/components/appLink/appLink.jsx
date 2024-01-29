import React from 'react'
import style from "./appLink.module.scss"
import intsagram from "../../assets/icon/instagram.svg"
import facebook from "../../assets/icon/facebook.svg"
import wk from "../../assets/icon/WK.svg"

export const AppLink = () => {
  return (
    <div className={style.box}>
        <a href="#">
            <img src={intsagram} alt="instagram" />
        </a>
        <a href="#">
            <img src=  {facebook} alt="instagram" />
        </a>
        <a href="#">
            <img src=  {wk} alt="instagram" />
        </a>
    </div>
  )
}
