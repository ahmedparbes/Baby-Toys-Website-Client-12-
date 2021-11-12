import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import './AllService.css'

const AllService = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://calm-shelf-61615.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    return (
        <div>
            <Header></Header>
            <Container>
                <p className="font" style={{ textAlign: 'center', marginTop: '40px' }}>SHOP JUNO TOYS & GAMES</p>
                <h2 className="font service-title">Popular In <span className="single-word">Store</span></h2>
                <div className='all-service font'>

                    {
                        service.map(s => <div className="single-service"
                            key={s.id}
                        >
                            <Link to={`/book/${s._id}`}>
                                <img src={s.img} alt="" />
                                <h4>{s.name}</h4>
                                <h6>{s.price}</h6>
                            </Link>

                        </div>)
                    }

                </div>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default AllService;