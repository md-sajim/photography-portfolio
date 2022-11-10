import React from 'react';
import { Link } from 'react-router-dom';
import './DetailsPage.css'

const DetailsPage = () => {
    return (
        <section className="background-radial-gradient overflow-hidden">
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-12 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                        <div className="card mb-3">
                            <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="card-img-top" alt="Wild Landscape" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
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
