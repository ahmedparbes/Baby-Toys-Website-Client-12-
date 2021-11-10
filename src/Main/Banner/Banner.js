import React from 'react';
import { Container } from 'react-bootstrap';
import BannerUnder from '../Banner-under/BannerUnder';
import './Banner.css'


const Banner = () => {
    return (

        <div>
            <div className="header-banner font">
                <div className="half-width">
                    <Container>
                        <h1 style={{ marginLeft: '40px' }}>WELCOME TO CHILD HEAVEN </h1>
                        <br />
                        <p>Bring happiness to your children with our help.  Purchase interesting toys using a special discount..</p>
                        <br />
                        <button className="btn-appoinment">Shop Now</button>
                    </Container>
                </div>
                <div className="half-image">
                    <img src="https://i.ibb.co/dLHnxqj/boy.png" alt="" />
                </div>
            </div>
            <BannerUnder></BannerUnder>
        </div>
    );
};

export default Banner;