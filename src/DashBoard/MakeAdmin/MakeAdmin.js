// import { Alert } from '@mui/material';
// import React, { useState } from 'react';
// import { Container } from 'react-bootstrap';

// const MakeAdmin = () => {

//     const [email, setEmail] = useState('');
//     const [success, setSuccess] = useState(false);

//     const handleOnBlur = e => {
//         setEmail(e.target.value);
//     }
//     const handleAdminSubmit = e => {
//         const user = { email };
//         fetch('http://localhost:5000/users/admin', {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.modifiedCount) {
//                     console.log(data);
//                     setSuccess(true);
//                 }
//             })

//         e.preventDefault()
//     }


//     return (
//         <Container>
//             <div className="font order-status-handle">
//                 <h2 className="order-title">Type <span className="text-primary">Email</span> for make this person Admin</h2>
//                 <hr />
//                 <form onSubmit={handleAdminSubmit}>
//                     <label className="label-text-status"><b>Enter Email</b></label>
//                     <br />
//                     <input type="email"
//                         onBlur={handleOnBlur}
//                         name="name"
//                     />
//                     <br />

//                     <input type="submit" value="Make Admin" />
//                 </form>
//                 {success && <Alert severity="success">Made Admin successfully!</Alert>}
//             </div>
//         </Container>
//     );
// };

// export default MakeAdmin;