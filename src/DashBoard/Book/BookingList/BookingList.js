import { useEffect, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from "../../../Context/AuthProvider/useAuth/useAuth";
import './BookingList.css'
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

const BookingList = () => {

    const { user } = useAuth()

    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                const remain = data.filter(u => u.email == user.email);
                setOrder(remain)
            })

    }, []);

    const cancelOrder = id => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {

                    alert('Order cancel successfully')
                    const remain = order.filter(o => o._id !== id)
                    setOrder(remain);
                }

            })
    }
    return (
        <div>
            {
                order.map(o => <Container>
                    <div className="table">
                        <table
                            key={o._id}
                            className="font" id="customers" >
                            <tr>
                                {/* <th>Name</th> */}
                                <th>Email</th>
                                <th>Product Name</th>
                                <th>Action</th>
                                <th>Status</th>

                            </tr>
                            <tr>
                                {/* <td>{user.name}</td> */}
                                <td>{o.email}</td>
                                <td>{o.product}</td>
                                <td><button onClick={() => cancelOrder(o._id)}><i className="fas fa-trash-alt"> cancel order</i></button></td>
                                <td> <Button variant="danger"><Link style={{ textDecoration: 'none', color: "white" }} to={`update/${o._id}`}>{o.status}</Link></Button></td>
                            </tr>

                        </table>
                    </div>
                </Container>)
            }
        </div>
    );
};

export default BookingList;