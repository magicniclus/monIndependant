import React from 'react';
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import TopMainContainer from '../components/main/TopMainContainer';

const Accueil = () => {
    return (
        <>  
            <NavBar />
            <main>
                <TopMainContainer />
            </main>
            <Footer />
        </>
    );
};

export default Accueil;