import React from 'react';
import { Container } from 'react-bootstrap';
import './Customer.css'

const Customer = () => {
    return (

        <div className="font  banner">
            <div className="half-image service-image">
                <img src="https://i.ibb.co/DDKp9wF/hgg-21-hp-sq.webp" alt="" />
            </div>
            <div className="half-width half-info">
                <h2>Welcome To    <span className='single-word'> Fun Corp!</span></h2>
                <br />
                <p>The Internet's Favorite Toy Store!</p>
                <br />
                <p>We are the toy specialists. Our mission is to enrich families and provide "A Smarter Way to Play" by inspiring creativity and sparking curiosity. We design and curate world-class toys and games, while providing an extraordinary customer experience. Whether you're shopping for Christmas, Hanukkah, or a special birthday, we have the toys and games that will make a difference in a child's life..</p>
            </div>
        </div>

    );
};

export default Customer;