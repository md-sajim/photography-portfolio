import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaFacebookSquare, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../context/ContextProvider';
import './SignUp.css'

const SignUp = () => {
    const googleProvider = new GoogleAuthProvider()
    
    const { createAccout, signupWithGoogle } = useContext(AuthProvider)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const hendleSignForm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.first.value + " " + form.last.value;
        const email = form.email.value;
        const password = form.password.value;
        createAccout(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                form.reset();
                console.log(user)
            })
            .catch(err => console.log(err))
        console.log(name, email, password)
    }
    const hendelSigninGoogle = () => {
        signupWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(user);
            })
            .catch(error => console.error(error))
    }
 

    return (
        <section className="background-radial-gradient overflow-hidden">
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                        <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218,81%,95%)" }} >
                            The best offer <br />
                            <span style={{ color: "hsl(218, 81%, 85%)" }}>for Sign Up <span className='text-warning'>PHOTO</span>GRAFI</span>
                        </h1>
                        <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                            A good photography website is a showcase for photos. Take inspiration from real-world photo galleries to design your digital photo gallery/photography portfolio website. Notice how galleries are uncluttered and how they use whitespace to distinctly display each photo
                        </p>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                        <div className="card bg-glass">
                            <div className="card-body px-4 py-5 px-md-5">
                                <h3 className='mb-5'>Sign Up!</h3>
                                <form onSubmit={hendleSignForm}>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form3Example1">First name</label>
                                                <input type="text" name='first' id="form3Example1" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form3Example2">Last name</label>
                                                <input type="text" name='last' id="form3Example2" className="form-control" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                                        <input type="email" name='email' id="form3Example3" className="form-control" />
                                    </div>


                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example4">Password</label>
                                        <input type="password" name='password' id="form3Example4" className="form-control" />
                                    </div>
                                    <div className="form-check d-flex justify-content-center mb-4">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                                        <label className="form-check-label" htmlFor="form2Example33">
                                            Accept all terms and conditions?
                                        </label>
                                    </div>


                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                        Sign up
                                    </button>


                                    <div className="text-center">
                                        <p>or sign up with:</p>
                                        <button  type="button" className="btn btn-link btn-floating mx-1">
                                            <FaFacebookSquare />
                                        </button>

                                        <button onClick={hendelSigninGoogle} type="button" className="btn btn-link btn-floating mx-1">
                                            <FaGoogle />
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <FaTwitter />
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <FaGithub />
                                        </button>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center pt-4">
                                        <p className="mb-0 me-2">Have an account?</p>
                                        <Link to='/login'><button type="button" className="btn btn-outline-danger">Login new</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    );
};

export default SignUp;