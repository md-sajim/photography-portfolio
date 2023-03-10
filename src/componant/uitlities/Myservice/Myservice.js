import React, { useEffect, useState } from 'react';
import VarticalTitle from '../VarticalTitle/VarticalTitle';
import { Link } from 'react-router-dom';
import { FaDollarSign, FaHeart, FaHeartBroken } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const Myservice = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        const url = 'https://assingment-clint-server.vercel.app/serves'
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-5 py-5'>
            <VarticalTitle title={"MY SERVICES"} st={1}></VarticalTitle>
            <div className='container px-0'>
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    {
                        services.map(servic => <div key={servic.id} className="col" >
                            <div className="card" >
                                <img style={{ height: "300px" }} src={servic.img} className="card-img-top" alt="..." />
                                <div className="card-body" >
                                    <h4 className="card-title fw-bold" > {servic.title}</h4>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <h6>Price: {servic.price} <FaDollarSign /></h6>
                                    <div class="d-flex justify-content-between">
                                        <Link to='/details' className='text-decoration-none'>Details</Link>
                                        <p><FaHeart className='text-danger' /> {servic.like} <span className='border-end me-1 border-2 border-info'></span> <FaHeartBroken className='text-warning' /> {servic.deslike}</p>
                                    </div>
                                </div >
                            </div >
                        </div >)
                    }

                </div >
                <Button variant="outline-secondary mt-5"><Link to='/moredetails' className='text-decoration-none text-warning'>MORE SERVICES</Link></Button>
            </div >
        </div >
    );
};

export default Myservice;