import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
    return (
        <Container>
            <div className="header-banner font">
                <div className="half-width">
                    <h2>Buy Toys for Every Kids.</h2>
                    <br />
                    <p>This is a colorful and responsive kids’ education  theme. It comes with 9 different homepage layouts that will help you make your website unique.
                        Creating a page is easy and provides you with the flexibility of customization with a lot of handcrafted elements and shortcodes..</p>
                    <br />
                    <button className="btn-appoinment">Start Now</button>
                </div>
                <div className="half-image">

                </div>
            </div>
        </Container>
    );
};

export default Banner;