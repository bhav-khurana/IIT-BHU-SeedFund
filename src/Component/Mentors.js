import React from "react";
import '../Css/Mentors.css';
import Navbar from '../Component/Navbar.js';
import Mentor from '../Component/Mentor.js';

const Mentors = ()=>{
    return (
        <>
        <Navbar />
        <div className="heading">Mentors</div>
        <div className="backk">
            <div className="mentors">
                <Mentor name={"Lorem Ipsum"} founder={"Founder at XX"} industry={"Industry: Education"} />
                <Mentor name={"Lorem Ipsum"} founder={"Founder at XX"} industry={"Industry: Education"} />
                <Mentor name={"Lorem Ipsum"} founder={"Founder at XX"} industry={"Industry: Education"} />
                <Mentor name={"Lorem Ipsum"} founder={"Founder at XX"} industry={"Industry: Education"} />
            </div>
            <div className="mentors">
                <Mentor name={"Lorem Ipsum"} founder={"Founder at XX"} industry={"Industry: Education"} />
                <Mentor name={"Lorem Ipsum"} founder={"Founder at XX"} industry={"Industry: Education"} />
                <Mentor name={"Lorem Ipsum"} founder={"Founder at XX"} industry={"Industry: Education"} />
                <Mentor name={"Lorem Ipsum"} founder={"Founder at XX"} industry={"Industry: Education"} />
            </div>
            <div className="mentors">
                <Mentor name={"Lorem Ipsum"} founder={"Founder at XX"} industry={"Industry: Education"} />
                <Mentor name={"Lorem Ipsum"} founder={"Founder at XX"} industry={"Industry: Education"} />
                <Mentor name={"Lorem Ipsum"} founder={"Founder at XX"} industry={"Industry: Education"} />
                <Mentor name={"Lorem Ipsum"} founder={"Founder at XX"} industry={"Industry: Education"} />
            </div>
        </div>
        </>
    )
}

export default Mentors;