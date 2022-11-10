import React from 'react';
import VarticalTitle from '../VarticalTitle/VarticalTitle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img1 from '../../../essetcs/img/myflickStort/advertorial-1.jpg'
import img2 from '../../../essetcs/img/myflickStort/advertorial-2.jpeg'
import img3 from '../../../essetcs/img/myflickStort/advertorial-3.jpg'
import img4 from '../../../essetcs/img/myflickStort/myshort-1.jpg'
import img5 from '../../../essetcs/img/myflickStort/myshort-2.jpg'
import img6 from '../../../essetcs/img/myflickStort/myshort-3.jpg'
import img7 from '../../../essetcs/img/myflickStort/myshort-4.jpg'
import img8 from '../../../essetcs/img/myflickStort/myshort-5.jpg'
import img9 from '../../../essetcs/img/myflickStort/myshort-6.jpg'
import img10 from '../../../essetcs/img/myflickStort/myshort-7.jpg'
import img11 from '../../../essetcs/img/myflickStort/myshort-8.jpg'
import img12 from '../../../essetcs/img/myflickStort/service-1.jpg'
import img13 from '../../../essetcs/img/myflickStort/service-2.jpg'
import img14 from '../../../essetcs/img/myflickStort/service-2.jpg'
import img15 from '../../../essetcs/img/myflickStort/service-3.jpg'
import img16 from '../../../essetcs/img/myflickStort/service-4.jpg'
import img17 from '../../../essetcs/img/myflickStort/service-5.jpg'
import img18 from '../../../essetcs/img/myflickStort/service-6.jpg'



const LatastFlickerShort = () => {
    const arr = [
        { id: 1, img: img1 },
        { id: 2, img: img2 },
        { id: 3, img: img3 },
        { id: 4, img: img4 },
        { id: 5, img: img5 },
        { id: 6, img: img6 },
        { id: 7, img: img7 },
        { id: 8, img: img8 },
        { id: 9, img: img9 },
        { id: 10, img: img10 },
        { id: 11, img: img11 },
        { id: 12, img: img12 },
        { id: 13, img: img13 },
        { id: 14, img: img14 },
        { id: 15, img: img15 },
        { id: 16, img: img16 },
        { id: 17, img: img17 },
        { id: 18, img: img18 },
    ]
    const settings1 = {
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        autoplay: true,
        speed: 20000,
        autoplaySpeed: 20000,
        rtl: true,
        cssEase: "linear"
      };
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        autoplay: true,
        speed: 20000,
        autoplaySpeed: 20000,
        cssEase: "linear"
    };
    return (
        <div className='py-5 bg-dark'>
            <VarticalTitle title={'LATEST FLICKR SHOTS'} st={null}></VarticalTitle>
            <div>
                <div>
                    <Slider {...settings}>

                        {
                            arr.map(imgslider => <div className='bg-info'><img style={{ height: "250px", width: "100%" }} src={imgslider.img} alt="" />
                            </div>)
                        }


                    </Slider>
                    <Slider {...settings1}>

                        {
                            arr.map(imgslider => <div className='bg-info'><img style={{ height: "250px", width: "100%" }} src={imgslider.img} alt="" />
                            </div>)
                        }


                    </Slider>
                </div>
            </div>

        </div>
    );
};

export default LatastFlickerShort;