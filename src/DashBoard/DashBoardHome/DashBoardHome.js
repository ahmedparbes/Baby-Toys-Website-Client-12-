import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/AuthProvider/useAuth/useAuth';
import './DashBoardHome.css'

const DashBoardHome = () => {
    const { user, admin } = useAuth()
    return (
        <Container>
            <div class="wrapper font">
                <div class="sidebar">
                    <ul className="siebar-nav">
                        <li><Link to="/"><i class="fas fa-home"></i>Home</Link></li>
                        <li><Link to="/my-orders"><i class="fas fa-user"></i> Your Order</Link></li>


                        {admin && <div>  <li><Link to="/makeAdmin"><i class="fas fa-user-lock"></i> Make Admin</Link></li>
                            <li><Link to="/add-service"><i class="fas fa-plus"></i> Add Product</Link></li>
                            <li><Link to="/allOrders"><i class="fas fa-plus"></i> AllOrders</Link></li>
                        </div>}

                        <li><Link to="/rate"><i class="fas fa-star"></i> Rate us</Link></li>
                        <li><Link to="/pay"><i class="fab fa-paypal"></i> Pay</Link></li>
                    </ul>
                </div>
                <div class="main_content">
                    <div class="header">Welcome! <span className="text-primary">{user.displayName}</span>. <br />  Have a nice day.</div>
                    <div className="font admin-panel">

                        {

                            // users.map(singleUser => <Container>
                            //     <div className="user-section">
                            //         <div className="half-img">
                            //             <img src={singleUser.img} alt="" />
                            //         </div>
                            //         <div className="half-width">

                            //             <h6>{singleUser.description}</h6>
                            //             <button onClick={() => handleDelete(singleUser._id)} className="cancel-btn">Cancel</button>
                            //         </div>
                            //     </div>
                            // </Container>)
                        }
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default DashBoardHome;