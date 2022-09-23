import React from 'react';
import "./_cards.scss";

const Cards = (props) => {
    const data = props.data
    console.log(data);

    return (
        <div className='cards'>
            <h4 className='titleCard'>{data.qaurtier}</h4>
            <div className="priceContainer">
                <div className="houseContainer logement">
                    <p className='house logementTitle'>Maison:</p>
                    <p className='logementPrice'>{data.maison}€/m²</p>
                </div>
                <div className="appartmentContainer logement">
                    <p className='appartment logementTitle'>Appartement:</p>
                    <p className='logementPrice'>{data.appartement}€/m²</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;