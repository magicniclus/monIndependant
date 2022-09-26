import React, { useEffect } from 'react';
import ArticleCard from '../../components/articleCard/ArticleCard';
import "./_articles.scss";
import article from "../../assets/articleOne.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Articles = () => {

    // const sendMail = ()=>{
    //     window.open('mailto:casteranicolas.contact@gmail.com?subject=Estimation')
    // }

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [])

    return (
        <div className='articles'>
            <div className="imgContainer">

            </div>
            <div className="title">
                <h1>Articles</h1>
            </div>
            <div className="content">
                <div className="articleOne article">
                    <ArticleCard img={article} title="Prix Moyen sur Bordeaux et Arcachon" text="Notre avis sur les  prix au m2 des différents quartiers de Bordeaux, sa métropole et sur le bassin d’arcachon.  Notre comparatif différencie les différents type de logement (appartement, maison, immeuble)." link="comparatif"/>
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

export default Articles;