import { useState } from "react";
import "./index.scss";
import {Main} from "./pages/home"
import { About } from "./pages/about";
import { MainLayout } from "./layout/main-layout";
import { Routes, Route } from "react-router-dom";
import { Error } from "./pages/Error/error";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main/>}/>
          <Route path="about" element={<About/>}/>
         
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
