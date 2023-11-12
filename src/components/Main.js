import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import "../components/Main.css"

const Main = () => {
  return(
    <>
        <div className="container">
            <section className="hero">
                <div className="heading">
                    <span>REINVENT WHAT YOUR </span>
                    <span>BUSINESS COULD BE</span>
                </div>
                <div className="sub-heading">
                    <p>Let there be change </p>
                    <AiOutlineRight className="right-arrow"></AiOutlineRight>
                </div>
            </section>

            <section className="card-container">
                <div className="cards">
                    <div className="card">
                        <h3>RESEARCH REPORT</h3>
                        <p>Accenture Life Trends 2024</p>
                    </div>
                    <div className="card">
                    <h3>RESEARCH REPORT</h3>
                        <p>Resiliency in the making</p>
                    </div>
                    <div className="card">
                    <h3>RESEARCH REPORT</h3>
                        <p>COP28</p>
                    </div>
                    <div className="card">
                    <h3>RESEARCH REPORT</h3>
                        <p>Enabling women on the frontline to thrive  stay and perform</p>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <h3>RESEARCH REPORT</h3>
                        <p>Modern networks: How to fast track competative advantage</p>
                    </div>
                    <div className="card">
                    <h3>RESEARCH REPORT</h3>
                        <p>Productivity: The next compitative edge</p>
                    </div>
                    <div className="card">
                    <h3>RESEARCH REPORT</h3>
                        <p>The cyber-Resilient CEO</p>
                    </div>
                    <div className="card">
                    <h3>CASE STUDY</h3>
                        <p>Be our guest: Marriott's new HR hub</p>
                    </div>
                </div>
                
            </section>
        </div>
    </>
  );  
};

export default Main;