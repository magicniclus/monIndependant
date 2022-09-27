import React from 'react';
import "./_navBar.scss";
import logo from "../../assets/nc.png";
import { NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <div className="navBar">
                <NavLink to="/accueil"><img src={logo} alt="logo nicolas castera" /></NavLink>
                {/* {/* <div className="content">
                    <ul>
                        <li><NavLink to="/accueil" >Accueil</NavLink></li>
                        <li><NavLink to="/articles" >Articles</NavLink></li>
                        <li><NavLink to="/FAQ" >F.A.Q</NavLink></li>
                    </ul>
                </div> */}
                <h2>Vous vendez votre bien? <span>Laissez moi vous conseiller</span></h2> 
            </div>
        </header>
    );
};

export default NavBar;