import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/AuthProvider/useAuth/useAuth';
import './DashBoardHome.css'

const DashBoardHome = () => {
    const { user, admin, handleLogOut } = useAuth()
    return (
        <Container>
            <div class="wrapper font">
                <div class="sidebar">
                    <ul className="siebar-nav">
                        <li><Link to="/"><i class="fas fa-home"></i>Home</Link></li>
                        <li><Link to="/my-orders"><i class="fas fa-user"></i> Your Order</Link></li>


                        {admin && <div>  <li><Link to="/makeAdmin"><i class="fas fa-user-lock"></i> Make Admin</Link></li>
                            <li><Link to="/add-service"><i class="fas fa-plus"></i> Add Product</Link></li>
                            <li><Link to="/allOrders"><i class="fab fa-product-hunt"></i> AllOrders</Link></li>
                        </div>}

                        <li><Link to="/rate"><i class="fas fa-star"></i> Rate us</Link></li>
                        <li><Link to="/pay"><i class="fab fa-paypal"></i> Pay</Link></li>
                        {
                            user.email &&
                            <button style={{ backgroundColor: 'purple', color: 'white', marginRight: '10px' }} className="font" onClick={handleLogOut} ><i className="fa fa-sign-out" aria-hidden="true"><span className="font mx-1"> Logout</span></i></button>
                        }
                    </ul>
                </div>

            </div>
        </Container>
    );
};

export default DashBoardHome;