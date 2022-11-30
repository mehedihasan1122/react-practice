
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart, faSignature } from '@fortawesome/free-solid-svg-icons'
import React from 'react';


import "./Header.css";

const Header = () => {
    return (
        <div className='header'>

           <FontAwesomeIcon Icon={faShoppingCart}></FontAwesomeIcon>

            <h1> This is my first React website</h1>

        </div>
    );
};

export default Header;