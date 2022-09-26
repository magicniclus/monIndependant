import React, { useEffect } from 'react';
import "./_comparatif.scss";
import {city} from "../../utils/city"
import Cards from '../../components/cards/Cards';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Comparatif = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [])

    // const sendMail = ()=>{
    //     window.open('mailto:casteranicolas.contact@gmail.com?subject=Estimation')
    // }

    return (
        <article className='comparatif'>
            <div className="imgContainer">
            </div>
            <div className="title">
                <h1>Comparatif</h1>
                <p>Ce comparatif des prix au m2 est réalisé grâce à différentes données (notarials, differents sites d'annonce immobilière). Il a été réalisé sur le secteur de Bordeaux, son agglomération et sur le bassin d'Aracachon. Il est mis à jour le plus régulièrement possible.</p>
            </div>
            <div className="cardContainer">
                <div className="Bordeaux city">
                    <div className="titleCity">
                        <h2>Bordeaux</h2>
                        {/* <p>Desciption</p> */}
                    </div>
                    {
                        city.gironde.bordeaux.map((el, idx)=>{
                            return(
                                <Cards key={idx} data={el} />
                            )
                        })
                    }
                </div>
                <div className="agglomeration city">
                    <div className="titleCity">
                        <h2>Proche Bordeaux</h2>
                        {/* <p>Desciption</p> */}
                    </div>
                    {
                        city.gironde.procheBordeaux.map((el, idx)=>{
                            return(
                                <Cards key={idx} data={el} />
                            )
                        })
                    }
                </div>
                <div className="bassin city">
                    <div className="titleCity">
                        <h2>Bassin d'Arcachon</h2>
                        {/* <p>Desciption</p> */}
                    </div>
                    {
                        city.gironde.bassin.map((el, idx)=>{
                            return(
                                <Cards key={idx} data={el} />
                            )
                        })
                    }
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
                        {/* <button onClick={sendMail} onSubmit={(e)=>e.preventDefault()} className='mail'>&nbsp;
                            <FontAwesomeIcon icon={faEnvelope} color="#434343" />  
                            Mail
                        </button> */}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Comparatif;