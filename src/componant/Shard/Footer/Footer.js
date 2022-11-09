import React from 'react';
import { FaFacebookF, FaFacebookMessenger, FaGithub, FaInstagram, FaInstagramSquare, FaPhoneAlt, FaStackOverflow, FaTelegramPlane, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const data = new Date();
    const year = data.getFullYear()
    return (
        <div style={{ height: "100px" }} className='bg-dark  row  text-secondary'>
            <div className='col-12 d-flex align-items-center justify-content-center col-lg-6'>
                <p><small className='text-white'>&copy; {year}  Sajim. All rights reserved.</small></p>
            </div>
            <div className='col-12 d-flex align-items-center justify-content-center col-lg-6'>
                <p><span className="border border-2 p-1 rounded fs-4 border-warning text-warning ms-1"><FaStackOverflow/></span></p>
                <p><span className="border border-2 p-1 rounded fs-4 border-primary text-primary ms-1"><FaFacebookF/></span></p>
                <p><span className="border border-2 p-1 rounded fs-4 border-primary text-primary ms-1"><FaFacebookMessenger/></span></p>
                <p><span className="border border-2 p-1 rounded fs-4 border-info text-info ms-1"><FaTwitter/></span></p>
                <p><span style={{color:"rgb(136,11,243)"}} className="border border-2 p-1 rounded fs-4 border-warning ms-1"><FaInstagramSquare/></span></p>
                <p><span className="border border-2 p-1 rounded fs-4 border-danger text-danger ms-1"><FaYoutube/></span></p>
                <p><span className="border border-2 p-1 rounded fs-4 border-secondary ms-1"><FaGithub/></span></p>
                <p><span className="border border-2 p-1 rounded fs-4 border-info text-info ms-1"><FaTelegramPlane/></span></p>
                <p><span className="border border-2 p-1 rounded fs-4 border-success text-success ms-1"><FaPhoneAlt/></span></p>
            </div>
        </div>
    );
};

export default Footer;