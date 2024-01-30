import React from 'react'
import Bg from "../../assets/img/404eror.jpg";
import style from './error.module.scss'
export const Error = () => {
  return (
    <div className={style.box}>
        <img src={Bg} />
    </div>
  )
}
