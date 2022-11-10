import React from 'react';
import { FaFacebookSquare, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <section className="background-radial-gradient overflow-hidden">
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                        <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218,81%,95%)" }} >
                            The best offer <br />
                            <span style={{ color: "hsl(218, 81%, 85%)" }}>for your business</span>
                        </h1>
                        <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Temporibus, expedita iusto veniam atque, magni tempora mollitia
                            dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                            ab ipsum nisi dolorem modi. Quos?
                        </p>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                        <div className="card bg-glass">
                            <div className="card-body px-4 py-5 px-md-5">
                                <h3 className='mb-5'>LogIn!</h3>
                                <form>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" for="form3Example3">Email address</label>
                                        <input type="email" id="form3Example3" className="form-control" />
                                    </div>


                                    <div className="form-outline mb-4">
                                        <label className="form-label" for="form3Example4">Password</label>
                                        <input type="password" id="form3Example4" className="form-control" />
                                    </div>

                                    <div class="d-flex align-items-center justify-content-center pb-4">
                                        <p class="mb-0 me-2">Don't have an account?</p>
                                        <Link to='/signup'><button type="button" class="btn btn-outline-danger">Create new</button></Link>
                                    </div>


                                    <div className="form-check d-flex justify-content-center mb-4">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                                        <label className="form-check-label" for="form2Example33">
                                            Subscribe to our newsletter
                                        </label>
                                    </div>


                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                        LogIn
                                    </button>


                                    <div className="text-center">
                                        <p>or LogIn with:</p>
                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <FaFacebookSquare />
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <FaGoogle />
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <FaTwitter />
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <FaGithub />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;