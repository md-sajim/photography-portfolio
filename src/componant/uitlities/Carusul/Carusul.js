import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../essetcs/img/carusol-1.jpg'
import img2 from '../../../essetcs/img/carusol-2.jpg'
import img3 from '../../../essetcs/img/carusol-3.jpg'
import img4 from '../../../essetcs/img/carusol-4.jpg'
import "./Carusol.css"

const Carusul = () => {
    const carusolData = [
        { tital: "This is tital", img: img1, p: 4, n: 2 },
        { tital: "This is tital", img: img2, p: 1, n: 3 },
        { tital: "This is tital", img: img3, p: 2, n: 4 },
        { tital: "This is tital", img: img4, p: 3, n: 1 }
    ]
    return (
        <Carousel fade>
            {
                carusolData.map(carusol => <Carousel.Item className='show_bg_2'>
                    <div className='img-gradent'>
                        <img
                            className="d-block w-100 catusol-items"
                            src={carusol.img}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>)
            }

            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    );
};

export default Carusul;