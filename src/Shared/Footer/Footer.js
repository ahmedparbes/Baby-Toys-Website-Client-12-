import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="full-footer">
            <div className="footer-info font">
                <div>
                    <p>H#000 (0th Floor), <br /> Road #00, <br />
                        New DOHS, Mohakhali, Dhaka, Bangladesh
                    </p>

                </div>
                <div>
                    <h4>ABOUT US</h4>
                    <p>Healthcare Success is a full-service <br /> marketing and advertising agency .
                    </p>
                </div>
                <div>
                    <h4> +564 7885 <span className="text-green">3222</span> </h4>
                    <p>Email: youremail@gmail.com</p>
                    <h4 >Subscribe to our newsletter</h4>
                    <input type="email" name="email" id="" placeholder="Enter Email" />
                    <br />
                    <button className="btn-primary mx-3 my-3 ">Subscribe</button>
                </div>

            </div>
            <div className=" font foooter-info">
                <p>© 2021 Fun Corp Operation LLC. All rights reserved.</p>

                <p >Created by <a href="fb.ahmedparbes">Ahmed Parbes</a></p>
            </div>
        </div>

    );
};

export default Footer;