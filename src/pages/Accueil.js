import React, { useEffect } from 'react';
import TopMainContainer from '../components/main/TopMainContainer';

const Accueil = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [])
    
    return (
        <>  
            <TopMainContainer />
        </>
    );
};

export default Accueil;