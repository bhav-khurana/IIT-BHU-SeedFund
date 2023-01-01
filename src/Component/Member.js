import React from "react";
import '../Css/Member.css'

const Member = ({imageUrl, name, designation}) => {
    return (
        <>
        <div className="card">
            <img src={imageUrl} alt={name} className="image"/>
            <div className="memberName">
                {name}
            </div>
            <div className="designation">
                {designation}
            </div>
        </div>
        </>
    )
}

export default Member;