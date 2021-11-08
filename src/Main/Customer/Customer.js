import React from 'react';
import { Container } from 'react-bootstrap';
import './Customer.css'

const Customer = () => {
    return (
        <Container>
            <div className="font header-banner banner">
                <div className="half-image service-image">
                    <img src="https://i.ibb.co/9TMWhtT/engin-akyurt-g-m8-EDc4-X6-Q-unsplash-1-min.png" alt="" />
                </div>
                <div className="half-width half-info">
                    <h2>Let us handle your screen <span className='single-word'> Professionally.</span></h2>
                    <br />
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
                </div>
            </div>
        </Container>
    );
};

export default Customer;