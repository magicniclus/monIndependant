import React from 'react';
import "./_footer.scss";
import logo from "../../assets/logowhite.png"

const Footer = () => {
    return (
        <footer>
            <div className="leftContainer">
                <div className="textContainer">
                    <p>Conditions d'utilisation</p>
                    <p>Nous contacter</p>
                </div>
            </div>
            <div className="rightContainer">
                <img src={logo} alt="logo nicolas castera" />
            </div>
        </footer>
    );
};

export default Footer;