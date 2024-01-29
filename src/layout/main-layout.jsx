import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
      <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};
