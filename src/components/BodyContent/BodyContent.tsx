import React, { useState } from 'react';
const sosiski = require('../../assets/sosiska.png')
const bliny = require('../../assets/bliny.png')
const samsy = require('../../assets/samsy.png')
const cost = require('../../assets/стоимость.png')
const cost2 = require('../../assets/стоимость-2.png')



const BodyContent = () => {
    const [ mouse1, setMouse1 ] = useState(false)
    const [ mouse2, setMouse2 ] = useState(false)
    const [ mouse3, setMouse3 ] = useState(false)





    return (
        <div className='sectionContentBlock'>
            <div className='sectionContent' onMouseEnter={() => setMouse1(true)} onMouseLeave={() => setMouse1(false)}>  
                <div>
                    <img src={cost} alt="" className={mouse1 ? 'cost' : 'costnone'}/>
                </div>
                <img src={sosiski} alt="" className='foods'/>
                <div className={mouse1 ? 'sectionText' : 'costnone'}>Горячие и нежные сосиски в тесте</div>
                <button className={mouse1 ? 'sectionBtn' : 'costnone'}>В КОРЗИНУ</button>
            </div>
            <div className='sectionContent' onMouseEnter={() => setMouse2(true)} onMouseLeave={() => setMouse2(false)}>
                <div>
                    <img src={cost2} alt="" className={mouse2 ? 'cost' : 'costnone'}/>
                </div>
                <img src={bliny} alt="" className='foods'/>
                <div className={mouse2 ? 'sectionText' : 'costnone'}>Горячие и нежные сосиски в тесте</div>
                <button className={mouse2 ? 'sectionBtn' : 'costnone'}>В КОРЗИНУ</button>
            </div> 
            <div className='sectionContent' onMouseEnter={() => setMouse3(true)} onMouseLeave={() => setMouse3(false)}>
                <div>
                    <img src={cost} alt="" className={mouse3 ? 'cost' : 'costnone'}/>
                </div>
                <img src={samsy} alt="" className='foods'/>
                <div className={mouse3 ? 'sectionText' : 'costnone'}>Горячие и нежные сосиски в тесте</div>
                <button className={mouse3 ? 'sectionBtn' : 'costnone'}>В КОРЗИНУ</button>
            </div>
        </div>
    );
};

export default BodyContent;