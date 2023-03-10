import React from 'react';
import { Link } from 'react-router-dom';
import'./NotFound.css'

const NotFound = () => {
    return (
        <div className='found-container'>
            <div id="error-page">
         <div className="content">
            <h2 className="header" data-text="404">
               404
            </h2>
            <h4 data-text="Opps! Page not found">
               Opps! Page not found
            </h4>
            <p>
               Sorry, the page you're looking for doesn't exist. If you think something is broken.
            </p>
            <div className="btns">
                <Link to="/"> return home</Link>
            </div>
         </div>
      </div>
        </div>
    );
};

export default NotFound;