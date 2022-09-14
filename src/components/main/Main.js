import React from 'react';
import "./_main.scss";
import moi from "../../assets/imgProfil.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    return (
        <main>
            <div className="profilCardContainer">
                <img src={moi} alt="Nicolas CASTERA" />
                <div className="rightContainer">
                    <div className="idContainer">
                        <h1>Nicolas CASTERA</h1>
                        <h2>Spécialiste immobilier independant: <span>Ancien, neuf, investissement</span></h2>
                        <div className='city'>Bordeaux et son aglomeration, Bassin d'Arcachon</div>
                    </div>
                    <div className="addValue">
                        <div className="recommendation">
                            <FontAwesomeIcon icon={faCrown} color="#D4E700" />
                            <div className="text">Conseiller recommandé par monindependant.com</div>
                            <div className="questionContainer">
                                <div className="question">?</div>
                            </div>
                        </div>
                        <div className="notation">
                            <div className="text">Notes attribué par ses clients</div>
                            <div className="starsContainer">
                                <FontAwesomeIcon icon={faStar} color="#D4E700"/>
                                <FontAwesomeIcon icon={faStar} color="#D4E700"/>
                                <FontAwesomeIcon icon={faStar} color="#D4E700"/>
                                <FontAwesomeIcon icon={faStar} color="#D4E700"/>
                                <FontAwesomeIcon icon={faStar} color="#D4E700"/>
                            </div>
                            <div className="questionContainer">
                                <div className="question">?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;