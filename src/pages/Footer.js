import React from 'react';
import '../css/main.css';
import { Link } from 'react-router-dom';
function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="container footer_container">
                    <div className="items">
                        <h3>Contact Us</h3>
                        <Link to="#"><i className="fas fa-phone" /> +91 9876543210</Link><br />
                        <Link to="mailto:deshpande007123@gmail.com"><i className="fas fa-envelope" /> abc@gmail.com</Link><br />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;