import React from 'react';
import "./_notFound.scss";

const NotFound = () => {
    return (
        <div className='notFound'>
            <h1>Page 404</h1>
            <p>Oups, la page demandé n'existe pas...</p>
        </div>
    );
};

export default NotFound;