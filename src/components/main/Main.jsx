import React from "react";
import { Hero } from "../hero";
import { About } from "../about";
import { Product } from "../product";

export const Main = ({ children }) => {
  return (
    <main>
      <Hero />
      <About />
      <Product />
    </main>
  );
};
