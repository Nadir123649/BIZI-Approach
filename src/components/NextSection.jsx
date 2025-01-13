import React from 'react';
import { NextFlight } from '../utils';

const NextSection = () => {
    return (
        <section className='px-[40px] py-[120px] overflow-hidden'>
            <div className='next-bg flex justify-between items-center max-w-[300px] md:max-w-[1260px] w-full mx-auto px-[170px]'>
                <div>
                    <h4 className='text-[20px] text-[#EAEAEB] font-[400] leading-normal not-italic'>NEXT</h4>
                    <h2 className='text-[#EAEAEB] text-[48px] font-[400]'>
                        The Gane
                    </h2>
                </div>
                <img src={NextFlight} alt="Next" className='animate-right' />
            </div>
        </section>
    );
}

export default NextSection;
