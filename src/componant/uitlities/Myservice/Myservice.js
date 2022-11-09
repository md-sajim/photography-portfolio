import React from 'react';
import VarticalTitle from '../VarticalTitle/VarticalTitle';
import image1 from '../../../essetcs/img/services/service-1.jpg'
import image2 from '../../../essetcs/img/services/service-2.jpg'
import image3 from '../../../essetcs/img/services/service-3.jpg'
import image4 from '../../../essetcs/img/services/service-4.jpg'
import image5 from '../../../essetcs/img/services/service-5.jpg'
import image6 from '../../../essetcs/img/services/service-6.jpg'

const Myservice = () => {
    const services = [
        { id: 1, img: image1, title: "Wedding Photography" },
        { id: 2, img: image2, title: "Birth Photography" },
        { id: 3, img: image3, title: "Food Photography" },
        { id: 4, img: image4, title: "Fashion Photography" },
        { id: 5, img: image5, title: "Jewelery Photography" },
        { id: 6, img: image6, title: "Drink Photography" },
    ]
    return (
        <div className='my-5 py-5'>
            <VarticalTitle title={"MY SERVICES"} st={1}></VarticalTitle>
            <div className='container'>
                <div class="row row-cols-1 row-cols-md-3 g-3">
                    {
                        services.map(servic => <div key={servic.id} class="col">
                            <div class="card">
                                <img style={{ height: "300px" }} src={servic.img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h4 class="card-title fw-bold">{servic.title}</h4>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>)
                    }


                </div>
            </div>
        </div>
    );
};

export default Myservice;