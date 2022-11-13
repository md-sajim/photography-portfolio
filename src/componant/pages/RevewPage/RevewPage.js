import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../context/ContextProvider';
import VarticalTitle from '../../uitlities/VarticalTitle/VarticalTitle';
import './RevewPage.css'

const RevewPage = () => {
    const { user } = useContext(AuthProvider)
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/revew?email=${user?.email}`)
            .then(async (res) => await res.json())
            .then(data => setProduct(data))
    }, [user.email])


    const confirmOrder = id => {
        const confiem = window.confirm("If you confirm this order, After then you can not cancel or update any thing!!!")
        if (confiem) {

            fetch(`http://localhost:5000/order/${id}`, {
                method: 'PATCH',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ status: true })
            })
                .then(res => res.json())
                .then(data => {
                    alert("order confrim")
                    if (data.modifiedCount > 0) {
                        const remaining = products.filter(ord => ord._id !== id);
                        const approved = products.find(ord => ord._id === id);
                        approved.status = true
                        const newOrder = [...remaining, approved]
                        setProduct(newOrder)
                    }
                })
        }

    }
    const deleteItem = id => {
        fetch(`http://localhost:5000/order/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = products.filter(odr => odr._id !== id)
                    setProduct(remaining)
                }
            })

    }
    console.log(products)
    return (
        <section className="background-radial-gradient overflow-hidden pt-4">
            <VarticalTitle title={"ORDER REVEW"}></VarticalTitle>
            <div className=" px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row  align-items-center mb-5">
                    <div className="col-lg-12 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                        {
                            products.length === 0 && <h5 className="my-5 display-6 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 85%)" }}>
                                Order not found
                            </h5>
                        }
                        {
                            products.map(product => <div
                                key={product._id}
                                className="card mb-3 w-md-100 mx-auto brakpoint">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={product.img} style={{ height: "450px", width: "100%" }} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body text-start">
                                            <h5 className="card-title">Servic Name: {product.ServicName}</h5>
                                            <h5 className="card-title">Name: {product.castomerName}</h5>
                                            <h5 className="card-title">Email: {product.email}</h5>
                                            <h5 className="card-title">Adderss: {product.address}</h5>
                                            <h5 className="card-title">Phone: {product.phone}</h5>
                                            <p className="card-text">Important Commint: <strong>{product.castomerText}</strong></p>
                                            <div className={
                                                product.status ? 'd-none' : 'd-block'}>
                                                <Link className="btn btn-warning m-1" to={`/update/${product._id}`} ><small>Update</small>
                                                </Link>
                                                <button onClick={() => deleteItem(product._id)} className="btn btn-danger m-1"><small>Cancel</small></button>
                                                <button onClick={() => confirmOrder(product._id)} className="btn btn-success m-1"><small>Confirm</small></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }


                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Link className="btn btn-primary" type="button" to='/'>Back To Home</Link>
                    </div>

                </div >
            </div >
        </section >
    )
};

export default RevewPage;