import React from "react";
import logo from '../Images/logo.png';
import { NavLink } from "react-router-dom";
import '../Css/Navstyle.css';

const Navbar = ()=>{
    return (
        <>
            <div className="container container-flex">
                <div className="logoContainer">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="navContainer">
                    <div className="nav_some">
                        <NavLink exact to="/" className="navItem" activeClassName="activeItem">Home</NavLink>
                        <NavLink to="/timeline" className="navItem" activeClassName="activeItem">Timeline</NavLink>
                        <NavLink to="/team" className="navItem" activeClassName="activeItem">Team</NavLink>
                        <NavLink to="/mentors" className="navItem" activeClassName="activeItem">Mentors</NavLink>
                        <NavLink to="/faqs" className="navItem" activeClassName="activeItem">FAQs</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;