import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderOne, SliderTwo } from '../utils';

const GameLogos = () => {

    const sliderSettings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        dots: false,
        arrows: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        // rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className='overflow-hidden pt-[40px] pb-[40px] relative'>
            <div className='static-logos h-[300px]'>
                <div className='bg-[#FFCC2A] flex justify-between items-center py-[16px] h-[105px] absolute w-[105%] top-[150px] left-[-10px] z-10'
                    style={{ transform: 'rotate(-5deg)' }}>
                    <span className='text-[40px] text-[#0D1B21] font-[400]'>
                        Win!
                    </span>
                    <span className='text-[40px] text-[#0D1B21] font-[400]'>
                        Win!
                    </span>
                    <span className='text-[40px] text-[#0D1B21] font-[400]'>
                        Win!
                    </span>
                    <span className='text-[40px] text-[#0D1B21] font-[400]'>
                        Win!
                    </span>
                    <span className='text-[40px] text-[#0D1B21] font-[400]'>
                        Win!
                    </span>
                    <span className='text-[40px] text-[#0D1B21] font-[400]'>
                        Win!
                    </span>
                    <span className='text-[40px] text-[#0D1B21] font-[400]'>
                        Win!
                    </span>
                    <span className='text-[40px] text-[#0D1B21] font-[400]'>
                        Win!
                    </span>
                </div>

                <div
                    className="slideing-logos bg-[#0D1B21]/55  backdrop-blur-lg h-[112px] p-4 rounded-md   absolute z-20 w-[100%] top-[150px] left-[-10px] flex flex-col justify-center"
                    style={{ transform: 'rotate(4.5deg)' }}
                >
                    <Slider {...sliderSettings}>
                        <div className="slide flex justify-center items-center pt-3">
                            <img src={SliderOne} alt="logo" width={200} height={120} />
                        </div>
                        <div className="slide flex justify-center items-center pt-3">
                            <img src={SliderTwo} alt="logo" width={200} height={120} />
                        </div>
                        <div className="slide flex justify-center items-center pt-3">
                            <img src={SliderOne} alt="logo" width={200} height={120} />
                        </div>
                        <div className="slide flex justify-center items-center pt-3">
                            <img src={SliderTwo} alt="logo" width={200} height={120} />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default GameLogos;
