import React from 'react'
import style from "./category.module.scss"
export const Category = ({text}) => {
  return (
    <a href="#" className={style.text}>{text}</a>
  )
}
