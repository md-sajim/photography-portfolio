import React, { useEffect, useState } from 'react';
import './MoreDetails.css'
import { FaDollarSign, FaHeart, FaHeartBroken } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import VarticalTitle from '../VarticalTitle/VarticalTitle';

const MoreDetails = () => {
    const [services, setServices] = useState([])
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [count, setCount] = useState(0)
    useEffect(() => {
        const url = `https://assingment-clint-server.vercel.app/moreserves?page=${page}&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setServices(data.servic)
                setCount(data.count)
            })
    }, [page, size])
    const pages = Math.ceil(count / size);
    return (
        <section className="background-radial-gradient overflow-hidden">
            <div className="container px-4 px-md-5 text-center text-lg-start">
                <div className='my-2'>
                    <VarticalTitle title={"All SERVICES"} st={1}></VarticalTitle>
                    <div className='container'>
                        <div className="row row-cols-1 row-cols-md-3 g-3">
                            {
                                services.map(servic => <div key={servic._id} className="col" >
                                    <div className="card" >
                                        <img style={{ height: "300px" }} src={servic.img} className="card-img-top" alt="..." />
                                        <div className="card-body" >
                                            <h4 className="card-title fw-bold" > {servic.title}</h4>
                                            <p className="card-text">
                                                {servic.details.slice(0, 140)}...
                                            </p>
                                            <h6>Price: {servic.price} <FaDollarSign /></h6>
                                            <div class="d-flex justify-content-between">
                                                <Link to={`/details/${servic._id}`} className='text-decoration-none'>Details</Link>
                                                <p><FaHeart className='text-danger' /> {servic.like} <span className='border-end me-1 border-2 border-info'></span> <FaHeartBroken className='text-warning' /> {servic.deslike}</p>
                                            </div>
                                        </div >
                                    </div >
                                </div >)
                            }

                        </div >
                        <div>
                            <div className="pagenation">
                                {
                                    [...Array(pages).keys()].map(num => <button
                                        onClick={() => setPage(num)}
                                        className={page === num ? "selected" : ""}
                                        key={num}>{num + 1}</button>)
                                }
                                <select className='selected-value'
                                    onChange={(e) => setSize(e.target.value)}
                                >
                                    <option value="5">5</option>
                                    <option value="10" selected>10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                </select>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </section >
    );
};

export default MoreDetails;