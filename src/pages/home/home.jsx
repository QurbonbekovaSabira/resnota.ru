import React from 'react'
import { Hero } from "../home/hero";
import { About } from "../home/about";
import { Product } from "../../pages/home/product";

export const Main = () => {
  return (
    <>
    <Hero />
    <About />
    <Product />
  </>
  )
}




export const Home = () => {
  return (
    <div>Home</div>
  )
}
