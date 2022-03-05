import React from 'react';
import Basket from '../Basket/Basket';
import BodyContent from '../BodyContent/BodyContent';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import './HomePage.css'

const HomePage = () => {


    
    return (
        <div className='fon'>
            <div className='main'>
                <header className='header'>
                    <Logo />
                    <Header />
                    <Basket />
                </header>
                <section>
                    <BodyContent />
                </section>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    );
};

export default HomePage;