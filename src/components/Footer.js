import React from "react";
import "../components/Footer.css";


const Footer = () => {
    return(
        <>
        <div className="main-container">
            <div className="left-container">
                <div className="heading">
                    <p>Let there be a change</p>
                </div>
                <div className="links">
                    <div className="cols">
                        <ul>
                            <li><a href="#">Preference Center</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">Sitemaps</a></li>
                        </ul>
                    </div>
                    <div className="cols">
                        <ul>
                            <li><a href="#">Privacy Statement</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Cookie Policy/Settings</a></li>
                            <li><a href="#">Accessibility Statement</a></li>
                            <li><a href="#">Do Not Sell/Share My Personal Information (for CA)</a></li>
                        </ul>
                    </div>
                </div>

                <div className="copyright">
                    <p>© 2023 Accenture. All Rights Reserved.</p>
                </div>
            </div>

            <div className="right-container">
                <p>CHANGE</p>
                <p>CHANGE</p>
                <p>CHANGE</p>
                <p>CHANGE</p>
                <p>CHANGE</p>
                <p>CHANGE</p>
            </div>
        </div>
        </>
    );
};


export default Footer;