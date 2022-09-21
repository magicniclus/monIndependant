import React from 'react';
import "./_navBar.scss";
import logo from "../../assets/nc.png";
import { NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <div className="navBar">
                <NavLink to="/accueil"><img src={logo} alt="logo nicolas castera" /></NavLink>
                <h2>Vous vendez votre bien? <span>Laissez moi vous conseiller</span></h2>
            </div>
        </header>
    );
};

export default NavBar;