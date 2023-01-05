import React from "react";
import Navbar from "./Navbar";
// import Step from "./Step";
import Step from "./Step"
import '../Css/Timeline.css'

const Timeline = ()=>{
    return (
        <>
        <Navbar />
        <div className="heading">Timeline</div>
        <Step date={"10 JAN 2023"} title={"Short Applications Open"} subtitle={"In the short application each startup will deliver a 5 minute video pitch along with 5 slides. The template of the same can be found here."} />
        <Step date={"1 FEB 2023"} title={"Short Application Submission Deadline"} subtitle={""} />
        <Step date={"1 MAR 2023"} title={"Release of 10 Shortlisted Startups"} subtitle={""} />
        <Step date={"1 APR 2023"} title={"Long Application Submission Deadline"} subtitle={"The founding team will put together a long application with the assistance of a designated mentor, consisting of a presentation with 10–15 slides and a business plan of 5–10 pages. The template for the same can be found here."} />
        <Step date={"April 2023"} title={"Interview of Founding Team with the Investment Committee"} subtitle={"Conducted Throughout the month of April"} />
        <Step date={"1 MAY 2023"} title={"Release of 5 Shortlisted Startups"} subtitle={""} />
        <Step date={"15 MAY 2023"} title={"Startups paired with mentors and all SLA's signed"} subtitle={""} />
        <Step date={"30 JUNE 2023"} title={"Architecture finalized and business plan aligned with selection committee"} subtitle={""} />
        <Step date={"30 SEP 2023"} title={"System beta demo ready"} subtitle={""} />
        <Step date={"10 OCT 2023"} title={"Pitchdeck drafted and reviewed by selection committee"} subtitle={""} />
        <Step date={"20 OCT 2023"} title={"Demo and pitchfeck finalized for demo day and roadshow"} subtitle={""} />
        <Step date={"30 OCT 2023"} title={"End of program with Roadshow in IIT BHU and Mumbai/Bengaluru"} subtitle={""} />
        </>
    )
}

export default Timeline;