import React from 'react';
import { Apple, BannerGrouped, BannerVideo, Down, Layer, LogoBigger, Playstore } from '../utils';

const Banner = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={BannerVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 w-full h-full -z-5">
                <img
                    src={Layer}
                    alt="layer"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute top-[70px] right-[10%] -z-[3]">
                <img
                    src={BannerGrouped}
                    alt="layer"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 flex justify-center items-center h-full min-h-screen px-8 text-center">
                <div className="text-center">
                    <h1 className='text-[36px] md:text-[64px] text-[#D2D3D4] font-[400] leading-[87px] max-w-[546px] w-full mx-auto text-center mb-[24px]'>
                        WELCOME TO
                        <span className='mx-auto text-center'>
                            <img src={LogoBigger} alt="logoBig" className='max-w-[230px] md:max-w-[326px] w-full mx-auto cursor-pointer' />
                        </span>
                    </h1>

                    <h3 className='capitalize text-[16px] md:text-[36px] font-[400] leading-normal text-[#D2D3D4]'>
                        Where <span className='text-[#FFCC2A]'> Adrenaline</span>  and <span className='text-[#FFCC2A]'>Asphalt</span> Meet
                    </h3>
                    <p className='inter italic text-[14px] md:text-[20px] font-[400] leading-normal text-center text-[#D2D3D4]'>
                        Ready for the race of a lifetime? <span className='inter italic'>DSCOFF</span> awaits – download, <span className='text-[#FFCC2A] font-[900] inter italic'>drive and earn $DSC</span>
                    </p>

                    <div className='max-[500px] w-full flex flex-col md:flex-row justify-center items-center gap-2 mt-[40px]'>
                        <img src={Apple} alt="apple" className='cursor-pointer ' />
                        <img src={Playstore} alt="playstore" className='cursor-pointer ' />
                    </div>
                    {/* <p className='inter italic text-[14px] font-[500] leading-normal text-center mt-[14px] text-[#D2D3D4]'>
                        Coming Soon
                    </p> */}
                </div>
                <img src={Down} alt="move" className='absolute cursor-pointer bottom-[20px] left-[48%] transform -translate-x-1/2 animate-float ' />
            </div>
        </section>
    );
};

export default Banner;
