import React from 'react';
import image from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='shop-container'>
        <div className="logo">
            <img src={image} alt="" />
        </div >
        <div className="menu">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
        
        </div>
    );
};

export default Header;