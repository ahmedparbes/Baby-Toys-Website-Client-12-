import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './BuyOrder.css'

const BuyOrder = () => {

    const { id } = useParams();

    const [order, setOrder] = useState({});

    useEffect(() => {
        const url = `https://calm-shelf-61615.herokuapp.com/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, []);

    return (
        <Container>
            <h2 style={{ marginTop: '50px' }} className=" font order-title">Shop</h2>
            <div className="font buy-page">
                <div className="buy-half-image">
                    <img src={order.img} alt="" />
                </div>
                <div className="buy-half-page">
                    <h1>{order.name}</h1>
                    <h4 style={{ color: 'blue' }}>{order.price}</h4>
                    <br />
                    <p>{order.description}</p>
                    <div>
                        <div className="second-buy-element">
                            <Link to={`/buy/${order._id}`}>
                                <button style={{ padding: '10px 20px', backgroundColor: 'purple', color: 'white' }} >Buy Now</button>
                            </Link>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BuyOrder;