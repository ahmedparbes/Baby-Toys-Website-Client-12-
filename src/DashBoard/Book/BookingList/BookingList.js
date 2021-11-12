import { useEffect, useState } from "react";
import React from 'react';
import useAuth from "../../../Context/AuthProvider/useAuth/useAuth";
import './BookingList.css'
import { Container } from "react-bootstrap";

const BookingList = () => {

    const { user } = useAuth()

    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch('https://calm-shelf-61615.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                const remain = data.filter(u => u.email == user.email);
                setOrder(remain)
            })

    }, []);

    const cancelOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://calm-shelf-61615.herokuapp.com/users/${id}`
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
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '40px', marginBottom: '50px' }} className='font'>Your All Orders Summary</h2>
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
                                <td>{o.status}</td>
                            </tr>

                        </table>
                    </div>
                </Container>)
            }
        </div>
        // https://calm-shelf-61615.herokuapp.com/users/${id}
    );
};

export default BookingList;