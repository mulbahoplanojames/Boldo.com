import React from 'react'
import '/src/Components/Navigation/Navbar.css'
import { Link } from 'react-router-dom'




const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/"><img src="src/assets/Logo.png" alt="Logo" /></Link>
        </div>
        <div className="nav_links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <Link to="/login"><button className="nav_btn">Log in</button></Link>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar