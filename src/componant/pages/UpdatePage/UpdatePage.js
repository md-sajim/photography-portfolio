import React, { useContext } from 'react';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../context/ContextProvider';
import VarticalTitle from '../../uitlities/VarticalTitle/VarticalTitle';
import'./UpdatePage.module.css'


const UpdatePage = () => {


    const data = useLoaderData();
    console.log(data);
    const {user} = useContext(AuthProvider)
   
    const { _id,img, ServicName,frist,lest,address,phone,castomerText} = data;
    const navigate = useNavigate()

    const hendleOrder = (e) =>{
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
            ServicName,
           
        }

        console.log(orderDatals,_id)
        fetch(`http://localhost:5000/update/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderDatals)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert("update success")
                }
            })



    }
    const hendleAlart = ()=>{
        alert("email con not change")
    }
    return (
       <section className="background-radial-gradient overflow-hidden">
            <div className="container py-5  text-center text-lg-start ">
            <VarticalTitle title={'OUDATE INFORMATION'}></VarticalTitle>
                <div className="row gx-lg-5 align-items-center mt-1 mb-5">
                    <div className="col-lg-12 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                        <div className="card mb-3">
                            <img style={{ height: "75vh" }} src={img} className="card-img-top" alt="Wild Landscape" />
                            <div className="card-body">
                                <h5 className="card-title">{ServicName}</h5>
                            </div>
                        <form onSubmit={hendleOrder} className='px-3 pt-5 pb-2'>
                            <div className="row mb-4">
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="text" name='first' defaultValue={frist} id="form6Example1" className="form-control" />
                                        <label className="form-label" for="form6Example1">First name</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <input type="text" name='last' defaultValue={lest} id="form6Example2" className="form-control" />
                                        <label className="form-label" for="form6Example2">Last name</label>
                                    </div>
                                </div>
                            </div>
                            <div  className="form-outline mb-4">
                                <input  type="text" name='address' defaultValue={address} id="form6Example4" className="form-control" />
                                <label className="form-label" for="form6Example4">Address</label>
                            </div>
                            <div  className="form-outline mb-4">
                                <input type="email" id="form6Example5" defaultValue={user.email} readOnly className="form-control" />
                                <label className="form-label" for="form6Example5"></label>
                            </div>
                            <div className="form-outline mb-4">
                                <input type="number" name='phone' defaultValue={phone} id="form6Example6" className="form-control" />
                                <label className="form-label" for="form6Example6">Phone</label>
                            </div>
                            <div className="form-outline mb-4">
                                <textarea className="form-control" defaultValue={castomerText} name='info' id="form6Example7" rows="4"></textarea>
                                <label className="form-label" for="form6Example7">Additional information</label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mb-4">Update new</button>
                        </form>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <Link className="btn btn-primary" type="button" to='/'>Back To Home</Link>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    )
};

export default UpdatePage;
