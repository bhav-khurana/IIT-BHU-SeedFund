import React from "react";
import '../Css/FAQ.css'

const FAQ = ({question, answer})=>{
    return (
        <>
        <div className="question">
            {question}
        </div>
        <div className="answer">
            {answer}
        </div>
        </>
    )
};

export default FAQ;