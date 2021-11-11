// import React, { useEffect, useState } from 'react';
// import { Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
// import './AllOrder.css'

// const AllOrder = () => {

//     const [orders, setOrders] = useState([]);
//     useEffect(() => {
//         fetch('https://calm-shelf-61615.herokuapp.com/users')
//             .then(res => res.json())
//             .then(data => setOrders(data))
//     }, [])
//     return (
//         <>
//             <h2 className="font" style={{ marginTop: '40px', marginBottom: '70px', textAlign: 'center' }}>This is All Order</h2>
//             <div className="font">

//                 {
//                     orders.map(order => <Container>
//                         <table id="customers">
//                             <tr>
//                                 <th>Product Name</th>
//                                 <th>Email</th>
//                                 <th>Status</th>
//                                 <th>Action</th>
//                             </tr>
//                             <tr>
//                                 <td>{order.name}</td>
//                                 <td>{order.email}</td>
//                                 <td>{order.status}</td>
//                                 <td><Link>Delete</Link></td>
//                             </tr>


//                         </table>
//                     </Container>)
//                 }

//             </div>
//         </>
//     );

// };

// export default AllOrder;