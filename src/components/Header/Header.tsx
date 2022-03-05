import React from 'react';

const Header = () => {
    return (
        <div className='headerBlock'>
            <div className='headerContent'>
                <span>Меню</span>
                <div>Сосиски в тесте</div>
            </div>
            <div className='headerContent'>
                <span>Стоимость</span>
                <div>45 сом</div>
            </div>
            <div className='headerContent'>
                <span>Напиток</span>
                <div>Бесплатно</div>
            </div>
        </div>
    );
};

export default Header;