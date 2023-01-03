import React from "react";
import '../Css/Mentor.css'

const Mentor = ({name, founder, industry})=>{
    return (
        <>
        <div className="nameCard">
            <div className="mentorPic">

            </div>
            <div className="mentorName">
                Name: {name}
            </div>
            <div className="founder">
                {founder}
            </div>
            <div className="industry">
                {industry}
            </div>
        </div>
        </>
    )
}

export default Mentor;