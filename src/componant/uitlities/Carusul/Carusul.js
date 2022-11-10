import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../essetcs/img/carusol-1.jpg'
import img2 from '../../../essetcs/img/carusol-2.jpg'
import img3 from '../../../essetcs/img/carusol-3.jpg'
import img4 from '../../../essetcs/img/carusol-4.jpg'
import "./Carusol.css"

const Carusul = () => {
    const carusolData = [
        { id:1, tital: "This is tital", img: img1, p: 4, n: 2 },
        { id:2, tital: "This is tital", img: img2, p: 1, n: 3 },
        { id:3, tital: "This is tital", img: img3, p: 2, n: 4 },
        { id:4, tital: "This is tital", img: img4, p: 3, n: 1 }
    ]
    return (
        <Carousel fade>
            {
                carusolData.map(carusol => <Carousel.Item key={carusol.id} className='show_bg_2'>
                    <div className='img-gradent'>
                        <img
                            className="d-block w-100 catusol-items"
                            src={carusol.img}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption className='mb-5 pb-5'>
                     
                            <h2><span className='text-warning'>PHOTO</span>GRAFI</h2>
                            <p className='mb-5 pb-5'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                       
                    </Carousel.Caption>
                </Carousel.Item>)
            }

           
        </Carousel>
    );
};

export default Carusul;