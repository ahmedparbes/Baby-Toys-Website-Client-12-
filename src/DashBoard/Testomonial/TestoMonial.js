import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './TestoMonial.css'

const TestoMonial = (props) => {
    const { name, rate } = props.rating;
    return (
        <Container>

            <div className="single-rate">
                <p>{rate}</p>
                <h6>Name: <span style={{ color: 'blue' }}> {name}</span></h6>
            </div>
        </Container>
    );
};

export default TestoMonial;