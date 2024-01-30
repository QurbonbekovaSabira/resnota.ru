import React from 'react'
import style from "./category.module.scss"
export const Category = ({children}) => {
  return (
    <a href="#" className={style.text}>{children}</a>
  )
}
