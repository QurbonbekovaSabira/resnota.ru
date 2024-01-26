import React from 'react'
import style from "./about.module.scss";
import { Card } from "../card";
import { Imgs } from '../data/data';

export const About = () => {
  return (
    <section className={style.about}>
   <div id='container' className={style.about__container}>
   {Imgs.map((item) => (
      <Card key={item.id} {...item} />
    ))}
   </div>
    </section>
  )
}
