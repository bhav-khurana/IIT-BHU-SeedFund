import React from "react";
import Navbar from "./Navbar";
import faqs from '../Images/faqs.png';
import '../Css/FAQs.css';
import FAQ from './FAQ';

const FAQs = ()=>{
    return (
        <>
        <Navbar />
        <div className="heading">Frequently Asked Questions</div>
        <div className="content">
            <img src={faqs} alt="FAQs" className="faqsImage" />
            <div className="faqs">
                <FAQ question={"I am associated with IIT BHU as a student/faculty/alumni but my co-founder is not associated with IIT (BHU). Can I apply?"} answer={"You can submit an application for the seed fund. The startup must have at least one founder who is an IIT (BHU) student, faculty member, or graduate."} />
                <FAQ question={"How do I know if I am prepared to apply for the seed fund?"} answer={"We invite you to submit an application for the seed fund if your idea has some proof of concept. Beta testing of the product or service should have already been completed or be in progress by the startup."} />
                <FAQ question={"Which department students/faculty/alumni can apply?"} answer={"IIT BHU students/faculty/alumni from all programs can apply."} />
                <FAQ question={"I am an IIT BHU alumni and I graduated last year. Can I apply?"} answer={"IIT BHU Alumni who have graduated in the last 2 years can apply."} />
                <FAQ question={"What is the selection criteria?"} answer={"One of the most important selection criteria will be whether the startup could have a high probability of receiving subsequent funding from an institutional investor after graduating from the Seed Fund program."} />
                <FAQ question= {"Who can apply?"} answer={"Only students graduating from IIT BHU in the year 2023 can apply now. Students could be Bachelors, or Masters, or IDD, or PhD students. Students who have graduated in the last 2 years can also apply."} />
                <FAQ question={"Which sectors is the IIT BHU seed fund focusing on?"} answer={[`We are focussed to fund startups in the following sectors 
                `,<br />,`1. Mobility
                `,<br />,`2. Climate tech
                `,<br />,`3. Agri tech and Agri supply chain
                `,<br />,`4. Fintech Applications
                `,<br />,`5. Enterprise Software (This includes solutions for analytics, networking, cybersecurity, etc.)
                `,<br />,`6. Robotics and AI
                `,<br />,`7. Digital Economy Solutions
                `,<br />,`8. Waste management and water purification
                `,<br />,`9. Defence Tech.`]} />
            </div>
        </div>
        </>
    )
}

export default FAQs;