import React, { useEffect } from 'react';
import "./_conditions.scss"

const Conditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [])
    return (
        <div className='conditions'>
            <div className="imgContainer">

            </div>
            <div className="content contentOne">
                <h1 className='title'>CONDITIONS GÉNÉRALES</h1>
                <p>
                    Les présentes conditions générales régissent l’utilisation de ce site www.nc-immobilier.com.<br/>
                    Ce site appartient et est géré par Nicolas CASTERA<br/>
                    En utilisant ce site, vous indiquez que vous avez lu et compris les conditions d’utilisation et que vous acceptez de les respecter en tout temps.<br/>
                    <span>Type de site: vitrine</span>
                </p>
            </div>
            <div className="content contentTwo">
                <h2>Propriété intellectuelle</h2>
                <p>
                    Tout contenu publié et mis à disposition sur ce site est la propriété de Nicolas CASTERA et de ses créateurs. Cela comprend, mais n’est pas limité aux images, textes, logos, documents, fichiers téléchargeables et tout ce qui contribue à la composition de ce site.
                </p>
            </div>
            <div className="content contentThree">
                <h2>Indemnité</h2>
                <p>
                En tant qu’utilisateur, vous indemnisez par les présentes Nicolas CASTERA de toute responsabilité, de tout coût, de toute cause d’action, de tout dommage ou de toute dépense découlant de votre utilisation de ce site ou de votre violation de l’une des dispositions énoncées dans le présent document.
                </p>
            </div>
            <div className="content contentFour">
                <h2>Lois applicables</h2>
                <p>
                Ce document est soumis aux lois applicables en France et vise à se conformer à ses règles et règlements nécessaires. Cela inclut la réglementation à l’échelle de l’UE énoncée dans le RGPD.
                </p>
            </div>
            <div className="content contentFive">
                <h2>Divisibilité</h2>
                <p>
                    Si, à tout moment, l’une des dispositions énoncées dans le présent document est jugée incompatible ou invalide en vertu des lois applicables, ces dispositions seront considérées comme nulles et seront retirées du présent document. Toutes les autres dispositions ne seront pas touchées par les lois et le reste du document sera toujours considéré comme valide.
                </p>
            </div>
            <div className="content contentSix">
                <h2>Modifications</h2>
                <p>
                Ces conditions générales peuvent être modifiées de temps à autre afin de maintenir le respect de la loi et de refléter tout changement à la façon dont nous gérons notre site et la façon dont nous nous attendons à ce que les utilisateurs se comportent sur notre site. Nous recommandons à nos utilisateurs de vérifier ces conditions générales de temps à autre pour s’assurer qu’ils sont informés de toute mise à jour. Au besoin, nous informerons les utilisateurs par courriel des changements apportés à ces conditions ou nous afficherons un avis sur notre site.
                </p>
            </div>
            <div className="content contentSeven">
                <h2>Contact</h2>
                <p>
                Veuillez communiquer avec nous si vous avez des questions ou des préoccupations. Nos coordonnées sont les suivantes :
                </p>
                <h3>06 31 42 00 45</h3>
                <h3>casteranicolas.contact@gmail.com</h3>
                <h3>22 rue de libourne, 33100, Bordeaux</h3>
            </div>
            <div className="contentHeight">
                <p>Date d'entrée en vigueur : le 21 septembre 2022.</p>
            </div>
        </div>
    );
};

export default Conditions;