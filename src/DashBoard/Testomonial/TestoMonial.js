import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './TestoMonial.css'
import Rating from 'react-rating'

const TestoMonial = (props) => {
    const { name, rate, star } = props.rating;
    return (
        <Container>

            <div className="single-rate">
                <q>{rate} </q>
                <br />
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly
                />
                <h6>Name: <span style={{ color: 'blue' }}> {name}</span></h6>
            </div>
        </Container>
    );
};

export default TestoMonial;