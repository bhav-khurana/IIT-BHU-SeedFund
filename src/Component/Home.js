import React from "react";
import introImg from '../Images/Sponsor-amico2.png';
import '../Css/Home.css'

const Home = ()=>{
    return (
        <>
        <div className="intro">
            <img src={introImg} alt="intro" className="introImg" />
        </div>
        </>
    )
}

export default Home;