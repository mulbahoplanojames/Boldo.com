import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/src/Pages/Home.jsx";
import Navbar from "./Layout/Navigation/Navbar";
import About from "/src/Pages/About.jsx";
import Blogs from "/src/Pages/Blogs.jsx";
import Login from "./Components/Login/Login";
import Signup from "./Components/Create Account/Signup";
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
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
