import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';

const Rating = () => {

    const nameRef = useRef();
    const desRef = useRef();
    const starRef = useRef()


    const handlehtmlForm = e => {

        const na_me = nameRef.current.value;
        const ra_te = desRef.current.value;
        const st_ar = starRef.current.value;

        const rating = { name: na_me, rate: ra_te, star: st_ar }

        fetch('https://calm-shelf-61615.herokuapp.com/rating', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rating)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Thanks for your Valuable rating')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <Container>
            <div style={{ marginTop: '60px' }} className="font register-volunteer">
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }} className="text-primary">Fell Free to rate us.</h2>
                <form onSubmit={handlehtmlForm}>
                    <legend className="legend-text">User Name</legend>
                    <input ref={nameRef} type="text" required placeholder="Full name" />
                    <legend className="legend-text">Your Feedback</legend>
                    <textArea ref={desRef} required type="text" id="lname" name="lastname" />
                    <br />
                    <legend className="legend-text">Give Us a Star</legend>
                    <textArea ref={starRef} required type="text" id="lname" name="lastname" placeholder="Between 0 to 5" />
                    <input type="submit" value="Submit Feedback" />
                </form>
            </div>
        </Container>
    );
};

export default Rating;