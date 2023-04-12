import React from 'react';
import '../css/main.css';
function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="container footer_container">
                    <div className="items">
                        <h3>Contact Us</h3>
                        <a href="#"><i className="fas fa-phone" /> +91 9876543210</a><br />
                        <a href="mailto:deshpande007123@gmail.com"><i className="fas fa-envelope" /> abc@gmail.com</a><br />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;