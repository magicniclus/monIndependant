import React, { useEffect } from 'react';
import { questions } from '../../utils/questions';
import "./_faq.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Faq = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [])

    const sendMail = ()=>{
        window.open('mailto:casteranicolas.contact@gmail.com?subject=Estimation')
    }
    
    return (
        <div className='faq'>
            <div className="imgContainer">
            </div>
            <div className="content">
                <h1>FAQ</h1>
                {
                    questions.map((el, idx)=>
                        <div className="questionContainer" key={idx}>
                            <h2>{el.question}</h2>
                            <p>{el.reponse}</p>
                        </div>
                    )
                }
            </div>
            <div className="contact">
                <div className="bottomContainer">
                    <h3>Pour une estimation <span>100% gratuite et personnalisée</span>:</h3>
                    <div className="buttonContainer"> 
                        <a href="tel:0631420045" onSubmit={(e)=>e.preventDefault()} className='phone'> 
                            <FontAwesomeIcon icon={faPhone} color="white" />  
                            0631420045
                        </a >
                        <button onClick={sendMail} onSubmit={(e)=>e.preventDefault()} className='mail' type='mail'> 
                            <FontAwesomeIcon icon={faEnvelope} color="#434343" />  
                            Mail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;