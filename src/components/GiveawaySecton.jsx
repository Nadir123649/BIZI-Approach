import React from 'react';
import { LeftUnion, ScaleOne, ScaleRightOne, ScaleRightThree, ScaleRightTwo, ScaleThree, ScaleTwo } from '../utils';

const GiveawaySecton = ({title}) => {
    return (
        <section className='bg-[#0D1B21] pt-[40px] pb-[60px] relative min-h-auto overflow-hidden ' >
            <img src={LeftUnion} alt="left-line" className='w-full absolute top-[60px]' />
            <div className='px-[40px]'>
                <div className='flex items-center justify-end gap-[30px] mt-[40px] mr-[32px]'>
                    <div className='flex gap-[2px] items-center'>
                        <img src={ScaleOne} alt="Scale" />
                        <img src={ScaleTwo} alt="Scale" />
                        <img src={ScaleThree} alt="Scale" />
                    </div>
                    <h1 className='text-[64px] text-[#D2D3D4] text-[400] leading-normal'>{title}</h1>
                    <div className='flex gap-[2px] items-center'>
                        <img src={ScaleRightOne} alt="Scale" />
                        <img src={ScaleRightTwo} alt="Scale" />
                        <img src={ScaleRightThree} alt="Scale" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GiveawaySecton;
