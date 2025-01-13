import React from 'react';
import { AboutWhite, AboutYellow } from '../utils';

const AboutBanner = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-80"
                autoPlay
                muted
                loop
                playsInline
            >
                {/* <source src={BannerOutCar} type="video/mp4" /> */}
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-[25%] right-0 -z-[3]">
                <img
                    src={AboutWhite}
                    alt="layer"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute top-[28%] right-[340px] -z-[3]">
                <h1 className='text-[64px] font-[400] text-[#D2D3D4] leading-normal'>
                    About
                </h1>
            </div>
            <div className="absolute bottom-[15%] left-0 -z-[3]">
                <img
                    src={AboutYellow}
                    alt="layer"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute bottom-[10%] left-[340px] -z-[3]">
                <h1 className='text-[64px] font-[400] text-[#FFCC2A] leading-normal'>
                    Game
                </h1>
            </div>

            <div className="relative z-10 flex justify-end items-center h-full min-h-screen px-8 text-center pr-[120px]  pt-[124px]">
                <div className="text-right">
                    <h1 className='text-[118px] text-[#0D1B218A] font-[400] leading-[87px]  opacity-70'>
                        Speed
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default AboutBanner;
