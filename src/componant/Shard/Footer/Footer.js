import React from 'react';
import { FaDribbble, FaFacebookF, FaFacebookMessenger, FaGithub, FaGoogle, FaInstagramSquare, FaLinkedinIn, FaPhoneAlt, FaPinterest, FaRedditAlien, FaSlack, FaStackOverflow, FaTelegramPlane, FaTwitter, FaVk, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const data = new Date();
    const year = data.getFullYear()
    return (
        <div style={{ height: "100px" }} className='bg-dark  row  text-secondary'>
            <div className='col-12 d-flex align-items-center justify-content-center col-lg-6'>
                <p><small className='text-white'>&copy; {year}  Sajim. All rights reserved.</small></p>
            </div>
            <div className='col-12 d-flex align-items-center justify-content-center col-lg-6'>
                {/* <!-- Facebook --> */}
                <a class="btn text-white ms-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
                    <FaFacebookF />
                </a>

                {/* <!-- Twitter --> */}
                <a class="btn text-white ms-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button">
                    <FaTwitter />
                </a>

                {/* <!-- Google --> */}
                <a class="btn text-white ms-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button">

                    <FaGoogle />
                </a>

                {/* <!-- Instagram --> */}
                <a class="btn text-white ms-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button">

                    <FaInstagramSquare></FaInstagramSquare>
                </a>

                {/* <!-- Linkedin --> */}
                <a class="btn text-white ms-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button">

                    <FaLinkedinIn></FaLinkedinIn>
                </a>

                {/* <!-- Pinterest --> */}
                <a class="btn text-white ms-1" style={{ backgroundColor: '#c61118' }} href="#!" role="button">

                    <FaPinterest></FaPinterest>
                </a>

                {/* <!-- Vkontakte --> */}
                <a class="btn text-white ms-1" style={{ backgroundColor: '#4c75a3' }} href="#!" role="button">

                    <FaVk></FaVk>
                </a>

                {/* <!-- Stack overflow --> */}
                <a class="btn text-white ms-1" style={{ backgroundColor: '#ffac44' }} href="#!" role="button">

                    <FaStackOverflow></FaStackOverflow>
                </a>

                {/* <!-- Youtube --> */}
                <a class="btn text-white ms-1" style={{ backgroundColor: '#ed302f' }} href="#!" role="button">

                    <FaYoutube></FaYoutube>
                </a>

                {/* <!-- Slack --> */}
                <a class="btn text-white ms-1" style={{ backgroundColor: '#481449' }} href="#!" role="button">

                    <FaSlack></FaSlack>
                </a>

                {/* <!-- Github --> */}
                <a class="btn text-white ms-1" style={{ backgroundColor: '#333333' }} href="#!" role="button">

                    <FaGithub></FaGithub>
                </a>

                {/* <!-- Dribbble --> */}
                <a class="btn text-white ms-1" style={{ backgroundColor: '#ec4a89' }} href="#!" role="button">

                    <FaDribbble></FaDribbble>
                </a>

                {/* <!-- Reddit --> */}
                <a class="btn text-white ms-1" style={{ backgroundColor: '#ff4500' }} href="#!" role="button">

                    <FaRedditAlien></FaRedditAlien>
                </a>

                {/* <!-- Whatsapp --> */}
                <a class="btn text-white ms-1" style={{ backgroundColor: '#25d366' }} href="#!" role="button">

                    <FaWhatsapp></FaWhatsapp>
                </a>
            </div>
        </div>
    );
};

export default Footer;