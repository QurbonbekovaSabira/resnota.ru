import React from 'react'
import Style from "./btn.module.scss";

export const Btn = ({color, bg,Padding,children}) => {
  return (
    <button style={{backgroundColor:bg,color:color,padding:Padding}} className={Style.btn}>{children}</button>
  )
}
