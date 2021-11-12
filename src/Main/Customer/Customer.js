import React from 'react';
import Button from 'react-bootstrap/Button'
import { ButtonGroup, Card, Container } from 'react-bootstrap';
import './Customer.css'



const Customer = () => {

    const service = [
        { img: 'https://i.ibb.co/DDSKPRg/0001.jpg', age: 'UP TO 1 YEAR' },
        { img: 'https://i.ibb.co/FwwGFTh/0002.jpg', age: '1 YEAR' },
        { img: 'https://i.ibb.co/X42h5Rf/0003.jpg', age: '2 YEAR' },
        { img: 'https://i.ibb.co/5RJptTr/0004.jpg', age: '3-4 YEAR' },
        { img: 'https://i.ibb.co/p1w69Sz/0005.jpg', age: 'Over 4 YEAR' },
    ]

    return (

        <Container>
            <h2 style={{ fontWeight: '700', textAlign: 'center', marginTop: '20px', marginBottom: '40px' }} className="font text-danger">Selection by Age</h2>
            <div className="font  all-services">
                {
                    service.map(s => <Card className="border-0" style={{ width: '13rem', backgroundColor: '#00000000' }}>
                        <Card.Img className="card-img" variant="top" src={s.img} />
                        <button className="child-button">{s.age}</button>
                    </Card>)
                }

            </div>
        </Container>

    );
};

export default Customer;