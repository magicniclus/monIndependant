import React from 'react';
import "./_navBar.scss";
import moi from "../../assets/nc.png"

const NavBar = () => {
    return (
        <header>
            <div className="navBar">
                <img src={moi} alt="Nicolas CASTERA" />
                <h2>Vous vendez votre bien? <span>Laissez moi vous conseiller</span></h2>
            </div>
        </header>
    );
};

export default NavBar;