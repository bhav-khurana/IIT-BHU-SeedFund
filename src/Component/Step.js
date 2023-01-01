import React from "react";
import '../Css/Step.css'

const Step = ({date, title, subtitle}) => {
    return (
        <>
        <div className="step">
            <div className="date">
                {date}
            </div>
            <div className="desc">
                <div className="title">{title}</div>
                <div className="subtitle">{subtitle}</div>
            </div>
        </div>
        </>
    )
}

export default Step;