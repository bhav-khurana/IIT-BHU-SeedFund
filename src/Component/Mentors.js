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
            {/* <div className="mentors">
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
            </div> */}
            <div className="text">
                The seed fund has mentors from diverse fields and who are industry stalwarts. The list of mentors will be updated soon.
            </div>
        </div>
        </>
    )
}

export default Mentors;