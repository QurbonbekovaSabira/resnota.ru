import React from "react";
import { Hero } from "../hero";
import { About } from "../about";
import { ProductCard } from "../productCard/productCard";
export const Main = ({ children }) => {
  return (
    <main>
      <Hero></Hero>     
      <About></About>
      <ProductCard></ProductCard>
    </main>
  );
};
