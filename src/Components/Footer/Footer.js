import React from 'react';
import {Link} from "react-router-dom";
import "./Footer.css";

const Footer=()=>{
    return (
        <footer className='footer'>
            <div className="footer-content">
                <h3 className='heading-three'>Made by Neetu kumari</h3>
                <ul className="social-media">
                    <a className="footer-icon" href="https://github.com/neetukumari4858?tab=repositories" target="blank_"><i className="fa fa-github fa_custom"> </i></a>
                    <a className="footer-icon" href="https://www.linkedin.com/in/neetu-kumari-261244227/" target="blank_"><i className="fa fa-linkedin-square"> </i></a>
                    <a className="footer-icon" href="https://twitter.com/NeetuKu27618407" target="blank_"><i className="fa fa-twitter"></i></a>
                </ul>
                <h3>© 2022 Royal Designs</h3>
            </div>
        </footer>
    )
};
export {Footer};