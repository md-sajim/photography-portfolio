import React from 'react';
import { Link } from 'react-router-dom';
import VarticalTitle from '../VarticalTitle/VarticalTitle';
import "./MyLatastSort.css"
import img1 from "../../../essetcs/img/my latast short/myshort-3.jpg"
import img2 from "../../../essetcs/img/my latast short/myshort-4.jpg"
import img3 from "../../../essetcs/img/my latast short/myshort-8.jpg"
import img4 from "../../../essetcs/img/my latast short/myshort-7.jpg"
import img5 from "../../../essetcs/img/my latast short/myshort-6.jpg"
import img6 from "../../../essetcs/img/my latast short/myshort-1.jpg"
import img7 from "../../../essetcs/img/my latast short/myshort-2.jpg"
import img8 from "../../../essetcs/img/my latast short/myshort-5.jpg"

const MyLatastSort = () => {
    const arr = [
       {id:1,img:img1,title:"tsting title"},
       {id:2,img:img2,title:"tsting title"},
       {id:3,img:img3,title:"tsting title"},
       {id:4,img:img4,title:"tsting title"},
       {id:5,img:img5,title:"tsting title"},
       {id:6,img:img6,title:"tsting title"},
       {id:7,img:img7,title:"tsting title"},
       {id:8,img:img8,title:"tsting title"}
    ]
    return (
        <div className='bg-dark py-5'>
            <VarticalTitle title={'MY LATEST SHOTS'} st={null}></VarticalTitle>
            <p className='text-center mt-0 pt-0 text-secondary'>Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            <div className='row gap-0 my-5 mx-0'>
                {
                    arr.map(a => <div
                    key={a.id}
                    className=" col-12 col-md-6 col-sm-12 col-lg-3 p-0">
                        <div className='container p-0'>
                            <div className="hexagon">
                                <div className="shape">
                                    <img src={a.img} alt="" />
                                    <div className="content">
                                        <div className='content-2'>
                                            <h2>this is tital</h2>
                                            {/* <Link to={`/details/`} className='text-center font-semibold text-xl mt-5 cursor-pointer text-purple-400'>Detalis<FaInfoCircle className='inline ml-2' /></Link> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default MyLatastSort;