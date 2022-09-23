import React, { useEffect } from 'react';
import "./_comparatif.scss";
import {city} from "../../utils/city"

const Comparatif = () => {

    return (
        <div className='comparatif'>
            <div className="title">
                <h1>Comparatif</h1>
                <p>Ce comparatif est réaliser grace à différentes données (notarials, differents site d'annonce immobilière). Il a été réalisé sur le secteur de bordeaux, son agglomeration et sur le bassin d'Aracachon. Il est mis à jour le plus régulièrement possible.</p>
            </div>
            <div className="cardContainer">
                {
                }
            </div>
        </div>
    );
};

export default Comparatif;