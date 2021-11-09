// import React from 'react';
// import { Spinner } from 'react-bootstrap';
// import Route from 'react-router';
// import useAuth from '../Context/AuthProvider/useAuth/useAuth';

// const PrivateRoute = ({ children, ...rest }) => {

//     const { user, loading } = useAuth()
//     if (loading) {
//         return <Spinner animation="border" variant="danger" />
//     }
//     return (
//         <Route {...rest}
//         render={({ location }) => user.email ? children : <Redirect to={{
//             pathname: "/login",
//             state: { from: location }
//         }}></Redirect>}
//     >

//     </Route>
//     );
// };

// export default PrivateRoute;