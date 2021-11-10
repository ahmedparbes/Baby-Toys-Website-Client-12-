import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';

const AddService = () => {

    const nameRef = useRef();
    const desRef = useRef();
    const imgRef = useRef();
    const priceRef = useRef();


    const handlehtmlForm = e => {
        e.preventDefault()
        const name = nameRef.current.value;
        const des = desRef.current.value;
        const imgs = imgRef.current.value;
        const pri_ce = priceRef.current.value;
        const newService = { name: name, description: des, price: pri_ce, img: imgs };

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Added Successfully.")
                }
                e.target.reset();

            });


    };


    return (
        <div className=" event-container font">
            <Container>
                <h2 className="h2-title text-danger">Add Service or Product ...</h2>
                <hr />
                <br />
                <br />
                <form onSubmit={handlehtmlForm}>
                    <label className="label-text"><b>Hotel Name</b></label>
                    <input ref={nameRef} type="text" required placeholder="Name" />
                    <label htmlFor="lname"><b>Description</b></label>
                    <input ref={desRef} required type="text" id="lname" name="lastname" placeholder="Product Description" />
                    <label htmlFor="lname"><b>Price</b></label>
                    <input ref={priceRef} required type="text" id="lname" name="lastname" placeholder="Price. eg: 12$" />
                    <label htmlFor="lname"><b>Image</b></label>
                    <input ref={imgRef} required type="text" id="lname" name="lastname" placeholder="Image Link" />

                    <input type="submit" value="Submit" />
                </form>

            </Container>

        </div>
    );
};

export default AddService;