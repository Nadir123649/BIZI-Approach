import React from 'react';
import { ScaleOne, ScaleRightOne, ScaleRightThree, ScaleRightTwo, ScaleThree, ScaleTwo } from '../utils';

const TitleComponent = ({ title }) => {
    return (
        <div className='px-[40px]'>
            <div className='flex items-center justify-start gap-[30px] mt-[52px] ml-[32px]'>
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
    );
}

export default TitleComponent;
