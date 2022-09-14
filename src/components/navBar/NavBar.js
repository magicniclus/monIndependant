import React from 'react';
import "./_navBar.scss";
import logo from "../../assets/nc.png"

const NavBar = () => {
    return (
        <header>
            <div className="navBar">
                <img src={logo} alt="logo nicolas castera" />
                <h2>Vous vendez votre bien? <span>Laissez moi vous conseiller</span></h2>
            </div>
        </header>
    );
};

export default NavBar;