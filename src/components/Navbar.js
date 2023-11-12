import React from "react";
import logo from "../Assets/logo.svg";
import fullLogo from "../Assets/full-logo.svg";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

import "../components/Navbar.css"



const Navbar = () => {
    return(
        <>
           <nav className="main-nav">
                <div className="logo-container">
                    <img src={logo} alt="" width={40}px height={40} className="logo" />
                    <img src={fullLogo} alt="" color="{white}" height={40} className="fullLogo" />
                </div>


                <div className="nav-links">
                    <ul>
                        <li>
                            <span>Insights</span>
                            <AiOutlineDown className="arrow-icon" />
                        </li>
                        <li>
                            <span>Services</span>
                            <AiOutlineDown className="arrow-icon" />
                        </li>
                        
                        <li>
                            <span>Industries</span>
                            <AiOutlineDown className="arrow-icon" />
                        </li>
                        <li>
                            <span>Careers</span>
                            <AiOutlineDown className="arrow-icon" />
                        </li>
                        <li>
                            <span>About</span>
                            <AiOutlineDown className="arrow-icon" />
                        </li>
                    </ul>
                </div>

                <div className="search">
                    <AiOutlineSearch className="searchIcon" />

                    <div className="location">
                        <span>USA</span>
                        <AiOutlineDown className="arrow-icon" />
                    </div>
                </div>
           </nav>
        </>
    );
};

export default Navbar;