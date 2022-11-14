import React from 'react';
import VarticalTitle from '../VarticalTitle/VarticalTitle';
import './FormJurmalest.css'
import img1 from '../../../essetcs/img/my latast short/myshort-1.jpg'
import img2 from '../../../essetcs/img/my latast short/myshort-5.jpg'
import img3 from '../../../essetcs/img/my latast short/myshort-4.jpg'
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FormJurnalest = () => {
    const formJurnalest = [
        { id: 1, title: "This is title", time: "1/02/20. 8:14", place: "Bangledesh", details: "this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails ", img: img1, like: 35 },
        { id: 2, title: "This is title", time: "1/02/20. 8:14", place: "Bangledesh", details: "this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails ", img: img2, like: 35 },
        { id: 3, title: "This is title", time: "1/02/20. 8:14", place: "Bangledesh", details: "this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails this is datails ", img: img3, like: 35 },
    ]
    return (
        <div className='bg-dark py-5'>
            <VarticalTitle title={'FROM THE JOURNAL'}></VarticalTitle>
            <div className='body1'>
                <div className='container1'>
                    {
                        formJurnalest.map(jurnal => <div
                            key={jurnal.id}
                            className="card1">
                            <div className="imgBx1">
                                <img src={jurnal.img} alt="" />
                            </div>
                            <div className="content1 text-secondary">
                                <h5>{jurnal.title}</h5>
                                <p><small>{jurnal.time} / {jurnal.place}</small></p>
                                <p>{jurnal.details.slice(0, 100)}</p>
                                <div>
                                    <Link to='/details' className='text-decoration-none'> <p className="border-success text-success d-inline border-bottom me-4 font-monospace">CONTINUE READING</p></Link>
                                    <FaRegHeart className='text-danger'></FaRegHeart><p className='d-inline ms-1'><small>{jurnal.like}</small></p>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>

        </div >
    );
};

export default FormJurnalest;