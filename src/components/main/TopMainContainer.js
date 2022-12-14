import React from 'react';
import "./_main.scss";
import moi from "../../assets/imgProfil.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Cards from '../cards/Cards';
import {city} from "../../utils/city"
import { NavLink } from 'react-router-dom';


const TopMainContainer = () => {

    // const sendMail = ()=>{
    //     window.open('mailto:casteranicolas.contact@gmail.com?subject=Estimation')
    // }

    return (
        <div className='topMainContainer'>
            <div className="profilCardContainer">
                <div className="top">
                    <img src={moi} alt="Nicolas CASTERA" />
                    <div className="rightContainer">
                        <div className="idContainer">
                            <h1>Nicolas CASTERA</h1>
                            <h2>Votre agent immobilier de proximité: <span>Ancien, neuf, investissement</span></h2>
                            <div className='city'>Bordeaux et son aglomeration, Bassin d'Arcachon</div>
                        </div>
                        <div className="addValue">
                            <div className="recommendation">
                                <FontAwesomeIcon icon={faCrown} color="#D4E700" />
                                <div className="text">Professionnel propulsé par SAFTI</div>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="contact">
                            <div className="bottomContainer">
                                <h3>Pour une estimation <span>100% gratuite et personnalisée</span>:</h3>
                                <div className="buttonContainer"> 
                                    <a href="tel:0631420045" onSubmit={(e)=>e.preventDefault()} className='phone phoneAds'> 
                                        <FontAwesomeIcon icon={faPhone} color="white" />&nbsp;  
                                        06 31 42 00 45
                                    </a >
                                    {/* <button onClick={sendMail} onSubmit={(e)=>e.preventDefault()} className='mail'> 
                                        <FontAwesomeIcon icon={faEnvelope} color="#434343" />&nbsp;
                                        Mail
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="contentContainer">
                <div className="leftContainer">
                    <div className="propos">
                            <h3>À propos:</h3>
                            <p>Après 6 ans de conseil en immobilier d’investissement dans les groupes les plus prestigieux, j’ai décidé de mettre mon expertise aux service des mes clients en leurs proposants des conseils sur-mesure, répondant à leurs attentes et objectifs sur l’optimisation de la vente de leur bien ou sur leur projet d’investissement. </p>
                    </div>
                    <div className="prestations">
                        <h3>Mes prestations:</h3>
                        <p>Je vous garantis le meilleur de la vente immobilière : </p>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} color="#434343" />  Estimation de votre bien</li>
                            <li><FontAwesomeIcon icon={faCheck} color="#434343" />  Mise en valeur ( photos et video )</li>
                            <li><FontAwesomeIcon icon={faCheck} color="#434343" />  Publicité sur plus de 100 sites</li>
                            <li><FontAwesomeIcon icon={faCheck} color="#434343" />  Sélection, suivi des acheteurs </li>
                            <li><FontAwesomeIcon icon={faCheck} color="#434343" />  Visites du bien</li>
                            <li><FontAwesomeIcon icon={faCheck} color="#434343" />  Accompagnement personnalisé à toutes les étapes du processus</li>
                        </ul>
                        <p>Je communique pour vous sur une centaine des sites les plus populaires et j'optimise vos annonces afin qu'elles remontent en tête de liste. Je serais votre seul et unique interlocuteur et vous assure une prestation sur-mesure et clés en main.</p>
                    </div>
                </div>
                <div className="rightContainer">
                        <ul>
                            <li><span>+200</span>transactions en 6ans</li>
                            <li><span>98%</span>de mes clients me recommandent</li>
                            <li><span>1er</span>conseiller bordelais</li>
                        </ul>
                </div>
            </div>
            <div className="price">
                <div className="title">
                    <h2>Prix moyen au m²</h2>
                </div> 
                <div className="cardContainer">
                    {
                        city.gironde.bordeaux.map((el, idx) => {
                            if(el.qaurtier === "La Bastide" || el.qaurtier === "Bordeaux Centre" ){
                                return(
                                    <Cards key={idx} data={el}/>
                                )
                            }else return null
                        })
                    }
                    {
                        city.gironde.bassin.map((el, idx)=>{
                            if(el.qaurtier === "Arcachon"){
                                return(
                                    <Cards key={idx} data={el} />
                                )
                            }else return null
                        })
                    }
                </div>
                <div className="bottomContainer">
                    <NavLink to="/articles/comparatif">En savoir plus <FontAwesomeIcon icon={faChevronRight} color="#434343"/></NavLink>
                </div>
            </div>
            <div className="contact">
                <div className="bottomContainer">
                    <h3>Pour une estimation <span>100% gratuite et personnalisée</span>:</h3>
                    <div className="buttonContainer"> 
                        <a href="tel:0631420045" onSubmit={(e)=>e.preventDefault()} className='phone phoneAds'> 
                            <FontAwesomeIcon icon={faPhone} color="white" />&nbsp;
                            06 31 42 00 45
                        </a >
                        {/* <button onClick={sendMail} onSubmit={(e)=>e.preventDefault()} className='mail'> 
                            <FontAwesomeIcon icon={faEnvelope} color="#434343" />&nbsp;
                            Mail
                        </button> */}
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default TopMainContainer;