import React from "react";
import Navbar from "./Navbar";
import '../Css/Team.css';
import Member from "./Member";
import pramodKumarJain from "../Images/pramod-kumar-jain.png";
import rajneeshTyagi from "../Images/rajneesh-tyagi.png";
import vishNaryanan from '../Images/vish-narayanan.png';
import atulSinha from '../Images/atul-sinha.png';
import ganeshRengaswamy from '../Images/ganesh-rengaswamy.jpg';
import rajYavatkar from '../Images/raj-yavatkar.png';
import shirishSathaye from '../Images/shirish-sathaye.png';
import shashwatAgarwal from '../Images/shashwat-agarwal.png';
import shobhitShubhankar from '../Images/shobhit-shubhankar.png';
import amitBaheti from '../Images/amit-baheti.png';
import anshuSrivastav from '../Images/anshu-srivastav.png';


const Team = () => {
    return (
        <>
        <Navbar />
        <div className="heading">Team</div>
        <div className="subHeading">Governance council</div>
        <div className="memberRow">
            <Member imageUrl={pramodKumarJain} name={"Dr. Pramod Kumar Jain"} designation={"Director, IIT (BHU), Varanasi"} />
            <Member imageUrl={rajneeshTyagi} name={"Dr. Rajneesh Tyagi"} designation={"Faculty in Charge, Entrepreneurship Cell, IIT (BHU) Varanasi"} />
            <Member imageUrl={vishNaryanan} name={"Vish Narayanan"} designation={"Founder IBGAA, IIT BHU ‘82, Electrical"} />
        </div>
        <div className="subHeading">Selection Committee</div>
        <div className="memberRow">
            <Member imageUrl={atulSinha} name={"Atul Sinha"} designation={"Advisor and Board Member, IIT BHU ‘83 Electronics"} />
            <Member imageUrl={ganeshRengaswamy} name={"Ganesh Rengaswamy"} designation={"Managing Partner, Quona Capital, IIT BHU ‘96 Chemical"} />
            <Member imageUrl={rajYavatkar} name={"Raj Yavatkar"} designation={"CTO, Juniper Networks, IIT BHU ‘82, Electronics "} />
        </div>
        <div className="memberRow">
            <Member imageUrl={shirishSathaye} name={"Shirish Sathaye"} designation={"General Partner, Cervin Ventures, IIT BHU ‘84 Electronics"} />
            <Member imageUrl={shashwatAgarwal} name={"Shashwat Agarwal"} designation={"PhD, Ohio State University, IIT BHU ‘21 Mechanical"} />
        </div>
        <div className="subHeading">Fund Administration Committee</div>
        <div className="memberRow">
            <Member imageUrl={shobhitShubhankar} name={"Shobhit Shubhankar"} designation={"Project Leader, BCG, IIT BHU ‘15 Chemical"} />
            <Member imageUrl={amitBaheti} name={"Amit Baheti"} designation={"Vice President, Entrepreneurship Cell, IIT (BHU) Varanasi"} />
            <Member imageUrl={anshuSrivastav} name={"Anshu Srivastav"} designation={"Advisor and Investor, IIT BHU ‘90 Computer Science"} />
        </div>
        </>
    )
}

export default Team;