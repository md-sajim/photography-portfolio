import React from 'react';
import { FaDribbble, FaFacebookF, FaFacebookMessenger, FaGithub, FaGoogle, FaInstagramSquare, FaLinkedinIn, FaPhoneAlt, FaPinterest, FaRedditAlien, FaSlack, FaStackOverflow, FaTelegramPlane, FaTwitter, FaVk, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const data = new Date();
    const year = data.getFullYear()
    return (
        <div  className='bg-dark py-5 row m-0 text-secondary'>
            <div className='col-12 d-flex align-items-center justify-content-center col-lg-6'>
                <p><small className='text-white'>&copy; {year}  Sajim. All rights reserved.</small></p>
            </div>
            <div className='col-12 d-flex align-items-center justify-content-center col-lg-6'>
                {/* <!-- Facebook --> */}
                <a className="btn text-white" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
                    <FaFacebookF />
                </a>

                {/* <!-- Twitter --> */}
                <a className="btn text-white ms-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button">
                    <FaTwitter />
                </a>

                {/* <!-- Google --> */}
                <a className="btn text-white ms-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button">

                    <FaGoogle />
                </a>

                {/* <!-- Instagram --> */}
                <a className="btn text-white ms-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button">

                    <FaInstagramSquare></FaInstagramSquare>
                </a>

                {/* <!-- Linkedin --> */}
                

            </div>
        </div>
    );
};

export default Footer;