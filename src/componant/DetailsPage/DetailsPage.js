import React, { useContext } from 'react';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../context/ContextProvider';
import VarticalTitle from '../uitlities/VarticalTitle/VarticalTitle';
import './DetailsPage.css'

const DetailsPage = () => {
    const {user} = useContext(AuthProvider)
    const data = useLoaderData()
    const { _id,img, title, details, like, deslike, price } = data;
    const navigate = useNavigate()
    
    const hendleOrder = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.first.value + " " + form.last.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const info = form.info.value;
        const email = user?.email||"Email not found"
        const orderDatals = {
            castomerName:name,
            address,
            phone,
            castomerText:info, 
            email,
            img,
            ServicName:title,
            id:_id
        }
        
        console.log(orderDatals)
        fetch("http://localhost:5000/order", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
           
            body: JSON.stringify(orderDatals)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    alert("order success")
                    navigate('/')
                }
            })
            .catch(err => console.error(err))



    }
    return (
        <section className="background-radial-gradient overflow-hidden">
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <VarticalTitle title={'PLACE ORDER'}></VarticalTitle>
                <div className="row gx-lg-5 align-items-center mt-1 mb-5">
                    <div className="col-lg-12 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                        <div className="card mb-3">
                            <img style={{ height: "75vh" }} src={img} className="card-img-top" alt="Wild Landscape" />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <div className='d-flex justify-content-between'>
                                    <h6 className="card-text text-muted">
                                        Price: {price} $
                                    </h6>
                                    <div className="d-flex justify-content-between">
                                        <p><FaHeart className='text-danger' /> {like} <span className='border-end me-1 border-2 border-info'></span> <FaHeartBroken className='text-warning' /> {deslike}</p>
                                    </div>
                                </div>
                                <p className="card-text">
                                    {details}
                                </p>
                            </div>
                        <form onSubmit={hendleOrder} className='px-3 pt-5 pb-2'>
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="text" name='first' id="form6Example1" className="form-control" />
                                        <label className="form-label" for="form6Example1">First name</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="text" name='last' id="form6Example2" className="form-control" />
                                        <label className="form-label" for="form6Example2">Last name</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-outline mb-4">
                                <input type="text" name='address' id="form6Example4" className="form-control" />
                                <label className="form-label" for="form6Example4">Address</label>
                            </div>
                            <div className="form-outline mb-4">
                                <input type="email" id="form6Example5" value={user.email} readOnly className="form-control" />
                                <label className="form-label" for="form6Example5"></label>
                            </div>
                            <div className="form-outline mb-4">
                                <input type="number" name='phone' id="form6Example6" className="form-control" />
                                <label className="form-label" for="form6Example6">Phone</label>
                            </div>
                            <div className="form-outline mb-4">
                                <textarea className="form-control" name='info' id="form6Example7" rows="4"></textarea>
                                <label className="form-label" for="form6Example7">Additional information</label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mb-4">Place order</button>
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
