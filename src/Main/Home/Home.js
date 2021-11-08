import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Customer from '../Customer/Customer';
import Service from '../Service/Service';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Service></Service>
            <Customer></Customer>
            <Footer></Footer>
        </div>
    );
};

export default Home;