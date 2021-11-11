// import { Link } from '@mui/material';
// import React, { useState, useEffect } from 'react';
// import { Container, Button } from 'react-bootstrap';

// const AllOrder = () => {

//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         fetch('https://calm-shelf-61615.herokuapp.com/users')
//             .then(res => res.json())
//             .then(data => setOrders(data));
//     }, []);

//     const cancelOrder = id => {
//         const url = `https://calm-shelf-61615.herokuapp.com/users/${id}`
//         fetch(url, {
//             method: "DELETE"
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.deletedCount) {

//                     alert('Order cancel successfully')
//                     const remain = orders.filter(o => o._id !== id)
//                     setOrders(remain);
//                 }

//             })
//     }
//     return (
//         <div>
//             {
//                 orders.map(o => <Container>
//                     <div className="table">
//                         <table
//                             key={o._id}
//                             className="font" id="customers" >
//                             <tr>
//                                 {/* <th>Name</th> */}
//                                 <th>Email</th>
//                                 <th>Product Name</th>
//                                 <th>Action</th>
//                                 <th>Status</th>

//                             </tr>
//                             <tr>
//                                 {/* <td>{user.name}</td> */}
//                                 <td>{o.email}</td>
//                                 <td>{o.product}</td>
//                                 <td><button onClick={() => cancelOrder(o._id)}><i className="fas fa-trash-alt"> cancel order</i></button></td>
//                                 <td> <Button variant="danger"><Link style={{ textDecoration: 'none', color: "white" }} to={`update/${o._id}`}>{o.status}</Link></Button></td>
//                             </tr>

//                         </table>
//                     </div>
//                 </Container>)
//             }
//         </div>
//     );
// };

// export default AllOrder;