// https://calm-shelf-61615.herokuapp.com/users/

import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const OrderStatusUpdate = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://calm-shelf-61615.herokuapp.com/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    // Update User
    const handleStatusChange = e => {
        const updatedName = e.target.value;
        const updatedUser = { name: updatedName, note: user.note };
        setUser(updatedUser);
    }

    const handleNoteChange = e => {
        const updatedEmail = e.target.value;
        const updatedUser = { name: user.name, note: updatedEmail }
        setUser(updatedUser);
    }
    const handleUpdateUser = e => {
        const url = `https://calm-shelf-61615.herokuapp.com/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setUser({});

                    e.target.reset();


                }
            })
        e.preventDefault();
    }

    return (
        <>
            <Header></Header>
            <Container>
                <div className="font order-status-handle">
                    <h2 className="order-title">Type <span className="text-primary">Approve</span> for approve this Order</h2>
                    <hr />
                    <form onSubmit={handleUpdateUser}>
                        <label className="label-text-status"><b>Default Status</b></label>
                        <input type="text" onChange={handleStatusChange} defaultValue={user.status || ''} />
                        <label className="label-text-status"><b>Add a note</b></label>
                        <input type="text" onChange={handleNoteChange} defaultValue={user.note || ''} />

                        <input type="submit" value="Update" />
                    </form>
                </div>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default OrderStatusUpdate;