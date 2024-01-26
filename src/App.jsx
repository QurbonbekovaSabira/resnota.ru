import { useState } from "react";
import  "./index.scss";
import { Header } from "./layout/header";
import { Main } from "./components/main";
import { Footer } from "./layout/footer";
function App() {
  return (
    <>
      <Header />
      <Main></Main>
      <Footer />
    </>
  );
}

export default App;
