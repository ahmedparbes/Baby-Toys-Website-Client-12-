import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import TestoMonial from '../../Testomonial/TestoMonial';
import './Review.css'

const Review = () => {
    const [ratings, setRatings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/rating')
            .then(res => res.json())
            .then(data => setRatings(data))
    }, [])
    return (
        <Container>
            <h2 className="font" style={{ textAlign: 'center' }}>What our customer says before</h2>
            <div className="font">

                <div className="review-section">
                    {
                        ratings.map(rating => <TestoMonial rating={rating}></TestoMonial>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default Review;