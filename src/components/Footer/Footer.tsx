import React from 'react';
const st1 = require('../../assets/stakan1.png')
const st2 = require('../../assets/stakan2.png')
const st3 = require('../../assets/stakan3.png')


const Footer = () => {
    return (
        <div className='footerBlock'>
            <div className='footerContent'>
                <img src={st1} alt="" />
            </div>
            <div className='footerContent'>
                <img src={st3} alt="" />
            </div> 
            <div className='footerContent'>
                <img src={st2} alt="" />
            </div>
        </div>
    );
};

export default Footer;