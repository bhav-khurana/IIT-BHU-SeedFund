import React from "react";
import Navbar from "./Navbar";
import '../Css/Team.css'
import Member from "./Member";
import pramodKumarJain from "../Images/pramod-kumar-jain.png";
import rajneeshTyagi from "../Images/rajneesh-tyagi.png";
import vishNaryanan from '../Images/vish-narayanan.png';

const Team = () => {
    return (
        <>
        <Navbar />
        <div className="heading">Team</div>
        <div className="subHeading">Governance council</div>
        <div className="governanceCouncil">
            <Member imageUrl={pramodKumarJain} name={"Dr. Pramod Kumar Jain"} designation={"Director, IIT (BHU), Varanasi"} />
            <Member imageUrl={rajneeshTyagi} name={"Dr. Rajneesh Tyagi"} designation={"Faculty in Charge, Entrepreneurship Cell, IIT (BHU) Varanasi"} />
            <Member imageUrl={vishNaryanan} name={"Vish Narayanan"} designation={"Founder IBGAA, IIT BHU ‘82, Electrical"} />
        </div>
        </>
    )
}

export default Team;