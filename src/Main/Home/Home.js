import React from 'react';
import Review from '../../DashBoard/Book/Review/Review';
import Banner from '../Banner/Banner';
import Customer from '../Customer/Customer';
import Featured from '../Featured/Featured';
import Service from '../Service/Service';
const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Service></Service>
            <Customer></Customer>
            <Review></Review>
        </div>
    );
};

export default Home;