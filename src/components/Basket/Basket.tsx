import React, { useState } from 'react';
import './Basket.css'
const basket = require('../../assets/basket.png')
const x = require('../../assets/Group.png')

const Basket = () => {
    const [ state, setState ] = useState<boolean>(true)



    const toggleTrue = () => {
        setState(true)
    }

    const toggleFalse = () => {
        setState(false)
    }

    console.log(state)

    return (
        <>
            <div>
                <img src={basket} alt="" className='basket' onClick={toggleTrue}/>
            </div>
            {
                state ?
                    <div className='basketModal'>
                        <div className='basketFon'>
                            <div className='basketFonChild'>
                                <img src={x} alt="" className='x' onClick={toggleFalse}/>
                                <div>КОРЗИНА</div>
                                <img src={basket} alt="" className='basket bas'/>
                            </div>
                        </div>
                    </div>
                   :
                   null
            }
        </>
    );
};

export default Basket;