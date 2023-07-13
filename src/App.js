import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import AddNews from "./pages/AddNews/AddNews";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div>
        <Header title="Daily News" />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/addNews" element={<AddNews />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
