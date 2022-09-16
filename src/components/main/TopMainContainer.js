import React from 'react';
import "./_main.scss";
import moi from "../../assets/imgProfil.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const TopMainContainer = () => {

    const sendMail = ()=>{
        window.open('mailto:casteranicolas.contact@gmail.com?subject=Estimation')
    }

    return (
        <div className='topMainContainer'>
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
                            <div className="text">Conseiller propulsé par SAFTI</div>
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
            <div className="contentContainer">
                <div className="leftContainer">
                    <div className="information">
                        <div className="lignContainer">
                            <div className="lignOne"></div>
                            <div className="lignTwo"></div>
                        </div>
                        <div className="textContainer">
                            <h3>À propos:</h3>
                            <p>Après 6 ans de conseil en immobilier d’investissement dans les groupes les plus prestigieux, j’ai décidé de mettre mon expertise aux service des mes clients en leurs proposants des conseils sur-mesure, répondant à leurs attentes et objectifs sur l’optimisation de la vente de leur bien ou sur leur projet d’investissement.<br/>
                            Je vous garantis les meilleurs services en matière de vente immobilière :
                            Estimation
                            - Mise en valeur
                            - Publicité
                            - Sélection et suivi des acheteurs
                            - Visites
                            - Accompagnement personnalisé jusqu’à la signature

                            Aussi, je mets à votre disposition une communication d’envergure sur une centaine de sites et des remontées en tête de liste systématiques.
                            Je suis votre seul et unique interlocuteur et vous assure un suivi personnalisé de A à Z.
                            </p>
                        </div>
                    </div>
                    <div className="contact">
                        {/* <div className="lignContainer">
                            <div className="lignOne"></div>
                            <div className="lignTwo"></div>
                        </div> */}
                        <div className="bottomContainer">
                            <h3>Pour une estimation <span>100% gratuite</span>:</h3>
                            <div className="buttonContainer"> 
                                <button onSubmit={(e)=>e.preventDefault()} className='phone' type='phone'> 
                                    <FontAwesomeIcon icon={faPhone} color="white" />  
                                    0631420045
                                </button>
                                <button onClick={sendMail} onSubmit={(e)=>e.preventDefault()} className='mail' type='mail'> 
                                    <FontAwesomeIcon icon={faEnvelope} color="#434343" />  
                                    Mail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="socialValue">
                        <ul>
                            <li><span>+200</span>transactions en 6ans</li>
                            <li><span>98%</span>de mes clients me recommandent</li>
                            <li><span>1er</span>conseiller bordelais</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopMainContainer;