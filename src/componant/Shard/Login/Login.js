import React, { useContext, useState } from 'react';
import { FaFacebookSquare, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../context/ContextProvider';
import './Login.css'

const Login = () => {
    const [err, setErr] = useState('')
    const {login, setUser} = useContext(AuthProvider);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const hendleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const condition = form.checkbox.checked;
        if(password.length < 8){
         
            return setErr("Please give password menimum 8 caracters!")
        }
        if(condition === false){
            return setErr("please accept thrms condition")
        }
        login(email,password)
        .then(result =>{
            const user = result.user;
            setUser(user)
            navigate(from,{replace:true})

        })

    }
    return (
        <section className="background-radial-gradient overflow-hidden">
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                        <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218,81%,95%)" }} >
                            The best offer <br />
                            <span style={{ color: "hsl(218, 81%, 85%)" }}>for Login <span className='text-warning'>PHOTO</span>GRAFI</span>
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
                                <h3 className='mb-5'>LogIn!</h3>
                                <form onSubmit={hendleLogin}>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                                        <input type="email" name='email' id="form3Example3" className="form-control" required />
                                    </div>
                                    <p className='text-danger'>{err}</p>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3Example4">Password</label>
                                        <input type="password" name='password' id="form3Example4" className="form-control" required />
                                    </div>
                                    <div className="form-check d-flex justify-content-center mb-4">
                                        <input className="form-check-input me-2" name='checkbox' type="checkbox"  id="form2Example33" />
                                        <label className="form-check-label" htmlFor="form2Example33">
                                            Accept all terms and conditions?
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
                                    <div className="d-flex align-items-center justify-content-center pt-4">
                                        <p className="mb-0 me-2">Don't have an account?</p>
                                        <Link to='/signup'><button type="button" className="btn btn-outline-danger">Create new</button></Link>
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

export default Login;