import { Link } from "react-router-dom";
import Logo from '../assets/gand.png'
import Logo1 from '../assets/gand1.png'
import '../style/nav.css'
import React from "react";
import { useState, useEffect } from "react"
import { GiHamburgerMenu }  from 'react-icons/gi';

const Nav = ({ user, handleLogOut }) => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  
    useEffect(() => {
      const changeWidth = () => {
        setScreenWidth(window.innerWidth)
      }
      window.addEventListener('resize', changeWidth)
  
      // cleanup function //
      return () => {
        window.removeEventListener('resize', changeWidth)
      }
    }, [])
  
  
    
  
  
      
     return (
        
          <div className="header">
            <nav className="navigation">
              {(toggleMenu || screenWidth > 900) && (
                <ul className="list">
                  <li className="navLinks">
                    {" "}
                    <Link to="/">
                      <div className="logo-wrapper" alt="logo">
                        <img className="logo" src={Logo} alt="ITB Logo" />
                      </div>
                    </Link>
                  </li>
                  <li className="navLinks"> Welcome  </li>
                  <li className="navLinks">
                    <Link className="navLinks" to={"/feed"}>
                      Posts
                    </Link>
                    
                  </li>
                  <li className="navLinks">
                    {/* <Link className="navLinks" user={user} to={"/createPost"}>
                      Create Post
                    </Link> */}
                 
                  </li>
                  <li className="navLinks">
                    <Link className="navLinks" to={"/profile"}>
                      Profiles
                    </Link>
                  </li>
                  <li className="navLinks">
                    {/* <Link className="navLinks" onClick={handleLogOut} to="/">
                      Sign Out
                    </Link> */}
                    Create Post
                  </li>
                  <li className="navLinks">
                    {" "}
                    <Link to="/">
                      <div className="logo-wrapper" alt="logo">
                        <img className="logo" src={Logo1} alt="ITB Logo" />
                      </div>
                    </Link>
                  </li>
                </ul>
              )}
              <div className="navLinks">
                  <button onClick={toggleNav} className="navBtn">
                    <GiHamburgerMenu />
                  </button>
              </div>
            </nav>
          </div>
        
     )
      
  
  
  }
  
  export default Nav