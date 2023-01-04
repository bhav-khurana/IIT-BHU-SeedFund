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
        <Step date={"1 JAN 2023"} title={"Opening to submit short Application"} subtitle={"In the short application each startup will deliver a 5 minute video pitch along with 5 slides. The template of the same can be found here."} />
        <Step date={"1 FEB 2023"} title={"Last Date to Submit online Application"} subtitle={""} />
        <Step date={"1 JAN 2023"} title={"Announcement of 10 Shortlisted Startup"} subtitle={""} />
        <Step date={"1 JAN 2023"} title={"Last Date to Submit Application"} subtitle={"The founding team will put together a long application with the assistance of a designated mentor, consisting of a presentation with 10–15 slides and a business plan of 5–10 pages."} />
        <Step date={"30 APR 2023"} title={"Interview of Shortlisted Startup"} subtitle={"Conducted Throughout the month of April"} />
        <Step date={"1 MAY 2023"} title={"Announcement of 5 Shortlisted Startup"} subtitle={""} />
        </>
    )
}

export default Timeline;