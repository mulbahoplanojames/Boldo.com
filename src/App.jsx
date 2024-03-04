import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/src/Pages/Home.jsx";
import Navbar from "./Layout/Navigation/Navbar";
import About from "/src/Pages/About.jsx";
import Blogs from "/src/Pages/Blogs.jsx";
import Login from "./Components/Login/Login";
import Footer from "./Layout/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
