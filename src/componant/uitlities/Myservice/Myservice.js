import React from 'react';
import VarticalTitle from '../VarticalTitle/VarticalTitle';
import image1 from '../../../essetcs/img/services/service-1.jpg'
import image2 from '../../../essetcs/img/services/service-2.jpg'
import image3 from '../../../essetcs/img/services/service-3.jpg'
import image4 from '../../../essetcs/img/services/service-4.jpg'
import image5 from '../../../essetcs/img/services/service-5.jpg'
import image6 from '../../../essetcs/img/services/service-6.jpg'
import { Link } from 'react-router-dom';
import { FaDollarSign, FaHeart, FaHeartBroken } from 'react-icons/fa';

const Myservice = () => {
    const services = [
        { id: 1, img: image1, title: "Wedding Photography", like: 5000, deslike: 29, price:5000 },
        { id: 2, img: image2, title: "Birth Photography", like: 5000, deslike: 29, price:5000 },
        { id: 3, img: image3, title: "Food Photography", like: 5000, deslike: 29, price:5000 },
        { id: 4, img: image4, title: "Fashion Photography", like: 5000, deslike: 29, price:5000 },
        { id: 5, img: image5, title: "Jewelery Photography", like: 5000, deslike: 29, price:5000 },
        { id: 6, img: image6, title: "Drink Photography", like: 5000, deslike: 29, price:5000 },
    ]
    return (
        <div className='my-5 py-5'>
            <VarticalTitle title={"MY SERVICES"} st={1}></VarticalTitle>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    {
                        services.map(servic => <div key={servic.id} className="col" >
                            <div className="card" >
                                <img style={{ height: "300px" }} src={servic.img} className="card-img-top" alt="..." />
                                <div className="card-body" >
                                    <h4 className="card-title fw-bold" > {servic.title}</h4>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <h6>Price: {servic.price} <FaDollarSign/></h6>
                                    <div class="d-flex justify-content-between">
                                        <Link to='/details' className='text-decoration-none'>Details</Link>
                                        <p><FaHeart className='text-danger' /> {servic.like} <span className='border-end me-1 border-2 border-info'></span> <FaHeartBroken className='text-warning' /> {servic.deslike}</p>
                                    </div>
                                </div >
                            </div >
                        </div >)
                    }


                </div >
            </div >
        </div >
    );
};

export default Myservice;