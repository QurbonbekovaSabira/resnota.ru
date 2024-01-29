import { useState } from "react";
import "./index.scss";
import { Main } from "./components/main";
import { MainLayout } from "./layout/main-layout";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
