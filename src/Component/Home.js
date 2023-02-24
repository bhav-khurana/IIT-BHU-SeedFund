import React from "react";
import introImg from '../Images/Sponsor-amico2.png';
import urgentBro from '../Images/urgent-bro.png';
import '../Css/Home.css'
import Navbar from "./Navbar";
import Sectors from "./Sectors";

const Home = ()=>{
    return (
        <>
        <header>
        </header>
        <Navbar />
        <div className="intro">
            <div className="cont">
            <img src={introImg} alt="intro" className="introImg" />
            </div>
            <div className="introTextTitle">
            IIT BHU Seed Fund
            <p className="introText">
            The IIT BHU Seed Fund aims to foster a startup ecosystem within the IIT BHU community of students, professors, and alumni. The goal of the fund is to prepare the startups for an external
            financing round on graduating from the seed fund scheme. The selected startups will be guided
            by alumni venture capitalists and serial entrepreneurs. This year we will support 5 startups with
            a seed funding of INR 25,00,000.
            </p>
            </div>
        </div>
        <Sectors />
        <div className="apply">
            {/* <img src={back} alt="background" className="back" /> */}
            <img src={urgentBro} alt="urgent-bro" className="applyImage" />
            <div className="applyText">Application Deadline : 15 March 2023
            <div className="applyButton">
                <a href="https://forms.gle/v4JuULMoXhMWU3CN9" className="applyLink">Apply Now</a>
            </div>
            </div>
        </div>
        </>
    )
}

export default Home;