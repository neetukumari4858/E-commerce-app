import React from 'react';
import {Link} from "react-router-dom";
import "./Footer.css";

const Footer=()=>{
    return (
        <footer className='footer'>
            <div className="footer-content">
                <h3 className='heading-three'>Made by Neetu kumari</h3>
                <ul class="social-media">
                    <Link className="footer-icon" to="https://github.com/neetukumari4858/E-commerce"><i className="fa fa-github fa_custom"> </i></Link>
                    <Link className="footer-icon" to="https://www.linkedin.com/in/neetu-kumari-261244227/"><i className="fa fa-linkedin-square"> </i></Link>
                    <Link className="footer-icon" to="https://twitter.com/NeetuKu27618407"><i className="fa fa-twitter"></i></Link>
                </ul>
                <h3>© 2022 Royal Designs</h3>
            </div>
        </footer>
    )
};
export {Footer};