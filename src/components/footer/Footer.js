import React from 'react';
import "./_footer.scss";
import logo from "../../assets/logowhite.png"
import { NavLink} from 'react-router-dom';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer>
            <div className="leftContainer">
                <div className="textContainer">
                    <div className="one">
                        <NavLink to="/conditions-generales"><p>Conditions générales</p><FontAwesomeIcon icon={faSquareArrowUpRight} color="white"/></NavLink>
                        <a href="tel:0631420045" onSubmit={(e)=>e.preventDefault()} className='phone'><p>Nous contacter</p><FontAwesomeIcon icon={faSquareArrowUpRight} color="white"/></a>
                        <p>© 2022 Nicolas CASTERA</p>
                        <p className='siret'>Siret: 832 414 650 00024</p>
                    </div>
                    <div className="two">
                        <NavLink to="/articles"><p>Articles</p><FontAwesomeIcon icon={faSquareArrowUpRight} color="white"/></NavLink>
                        <NavLink to="/FAQ"><p>FAQ</p><FontAwesomeIcon icon={faSquareArrowUpRight} color="white"/></NavLink>
                        <p>Bordeaux et sa métropole, Bassin d'Arcachon</p>
                        <p>Ancien, neuf, investissement</p>
                    </div>
                </div>
            </div>
            <div className="rightContainer">
                <NavLink to="/accueil"><img src={logo} alt="logo nicolas castera" /></NavLink>
            </div>
        </footer>
    );
};

export default Footer;