import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
    return (
        <Container>
            <div className="header-banner font">
                <div className="half-width">
                    <h2>BEAUTY SALON FOR EVERY WOMEN</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores tenetur unde suscipit rerum labore culpa cumque exercitationem quam odit architecto.</p>
                    <br />
                    <button className="btn-appoinment">Get an Appointment</button>
                </div>
                <div className="half-image">
                    <img src="https://i.ibb.co/85s25vg/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beau.png" alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Banner;