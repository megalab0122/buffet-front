import React from 'react';
const logo = require('../../assets/logo.png')

const Logo = () => {
    return (
        <div>
            <img src={logo} alt="" className='headerLogo'/>
        </div>
    );
};

export default Logo;