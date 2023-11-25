import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from "./Components/Navigation/Navbar";
import Home from "./Home";
import About from "./About";
import Blogs from "./Blogs";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>s
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
