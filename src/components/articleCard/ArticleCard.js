import React from 'react';
import "./_articleCard.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const ArticleCard = (props) => {
    return (
        <div className='articleCard'>
            <div className="leftContainer">
                <img src={props.img} alt="article" />
            </div>
            <div className="rightContainer">
                <div className="top">
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
                <div className="bottom">
                <NavLink to={"/articles/"+props.link}>En savoir plus <FontAwesomeIcon icon={faChevronRight} color="#434343"/></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;