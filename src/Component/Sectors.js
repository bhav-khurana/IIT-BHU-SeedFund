import React from "react";
import '../Css/Sectors.css';
import greenTechnology from '../Images/greenTechnology.svg'
import enterprise from '../Images/enterprise.svg'
import saas from '../Images/saas.svg'
import robo from '../Images/robo.svg'
import mobi from '../Images/mobi.svg'
import digitalEconomy from '../Images/digitalEconomy.svg'
import agri from '../Images/agri.svg'
import defence from '../Images/defence.svg'
import fintech from '../Images/fintech.svg'
import waste from '../Images/waste.svg'
import medical from '../Images/medical.svg'



const Sectors = () => {
    return (
        <>
        <div className="sectorBackground">
        <div className="heading">
            Potential Sectors
        </div>
            <div className="sectorRow">
                <img src={greenTechnology} alt="Green Technology" className="sectorLogo" />
                <div className="sector1">
                    Green Technology
                </div>
                <img src={enterprise} alt="Green Technology" className="sectorLogo" />
                <div className="sector2">
                    Enterprise Software
                </div>
            </div>
            <div className="sectorRow">
                <img src={saas} alt="Green Technology" className="sectorLogo" />
                <div className="sector1">
                Saas Global or Indian
                </div>
                <img src={robo} alt="Green Technology" className="sectorLogo" />
                <div className="sector2">
                Robotics & AI
                </div>
            </div>
            <div className="sectorRow">
                <img src={mobi} alt="Green Technology" className="sectorLogo" />
                <div className="sector1">
                Mobility (Transportation)
                </div>
                <img src={digitalEconomy} alt="Green Technology" className="sectorLogo" />
                <div className="sector2">
                Digital Economy
                </div>
            </div>
            <div className="sectorRow">
                <img src={agri} alt="Green Technology" className="sectorLogo" />
                <div className="sector1">
                Agri Tech & Agri Supply Chain
                </div>
                <img src={fintech} alt="Green Technology" className="sectorLogo"  />
                <div className="sector2">
                Defence
                </div>
            </div>
            <div className="sectorRow">
                <img src={fintech} alt="Green Technology" className="sectorLogo" />
                <div className="sector1">
                Fintech Application
                </div>
                <img src={waste} alt="Green Technology" className="sectorLogo" />
                <div className="sector2">
                Waste Managment
                </div>
            </div>
            <div className="sectorRow">
                <img src={medical} alt="Green Technology" className="sectorLogo" />
                <div className="sector1">
                Medical
                </div>
                <img src="" alt="" className="sectorLogo" />
                <div className="sector1">
                
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Sectors;