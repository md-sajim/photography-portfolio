import React, { useContext } from 'react';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../context/ContextProvider';
import './DetailsPage.css'

const DetailsPage = () => {
    const {user} = useContext(AuthProvider)
    const data = useLoaderData()
    const { _id, img, title, details, like, deslike, price } = data;
    console.log(data)
    return (
        <section className="background-radial-gradient overflow-hidden">
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-12 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                        <div className="card mb-3">
                            <img style={{ height: "75vh" }} src={img} className="card-img-top" alt="Wild Landscape" />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <div className='d-flex justify-content-between'>
                                    <h6 className="card-text text-muted">
                                        Price: {price} $
                                    </h6>
                                    <div class="d-flex justify-content-between">
                                        <p><FaHeart className='text-danger' /> {like} <span className='border-end me-1 border-2 border-info'></span> <FaHeartBroken className='text-warning' /> {deslike}</p>
                                    </div>
                                </div>
                                <p className="card-text">
                                    {details}
                                </p>
                            </div>
                        <form className='px-3 pt-5 pb-2'>
                            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                            <div class="row mb-4">
                                <div class="col">
                                    <div class="form-outline">
                                        <input type="text" id="form6Example1" class="form-control" />
                                        <label class="form-label" for="form6Example1">First name</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-outline">
                                        <input type="text" id="form6Example2" class="form-control" />
                                        <label class="form-label" for="form6Example2">Last name</label>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Text input --> */}
                            <div class="form-outline mb-4">
                                <input type="text" id="form6Example4" class="form-control" />
                                <label class="form-label" for="form6Example4">Address</label>
                            </div>

                            {/* <!-- Email input --> */}
                            <div class="form-outline mb-4">
                                <input type="email" id="form6Example5" value={user.email} readOnly class="form-control" />
                                <label class="form-label" for="form6Example5"></label>
                            </div>

                            {/* <!-- Number input --> */}
                            <div class="form-outline mb-4">
                                <input type="number" id="form6Example6" class="form-control" />
                                <label class="form-label" for="form6Example6">Phone</label>
                            </div>

                            {/* <!-- Message input --> */}
                            <div class="form-outline mb-4">
                                <textarea class="form-control" id="form6Example7" rows="4"></textarea>
                                <label class="form-label" for="form6Example7">Additional information</label>
                            </div>

                            {/* <!-- Submit button --> */}
                            <button type="submit" class="btn btn-primary btn-block mb-4">Place order</button>
                        </form>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <Link className="btn btn-primary" type="button" to='/'>Back To Home</Link>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    );
};

export default DetailsPage;
