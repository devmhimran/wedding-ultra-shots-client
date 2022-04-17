import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const fullYear = date.getFullYear();
    return (
        <div className='bg-light py-4'>
            <div className="container text-center">
                <p>Copyright ©{fullYear}. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;