import React from 'react';
import { NextFlight } from '../utils';

const NextSection = () => {
    return (
        <section className=' px-[10px] md:px-[40px] py-[60px] md:py-[120px] overflow-hidden'>
            <div className='next-bg flex justify-between items-center max-w-[330px] md:max-w-[1260px] w-full mx-auto md:px-[170px]'>
                <div className='next-text'>
                    <h4 className='text-[10px] md:text-[20px] text-[#EAEAEB] font-[400] leading-normal not-italic'>NEXT</h4>
                    <h2 className='text-[#EAEAEB] text-[16px] md:text-[48px] font-[400]'>
                        The Gane
                    </h2>
                </div>
                <img src={NextFlight} alt="Next" className='animate-right max-w-[40px] md:max-w-[120px]' />
            </div>
        </section>
    );
}

export default NextSection;
