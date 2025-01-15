import React from 'react';
import { ScaleOne, ScaleRightOne, ScaleRightThree, ScaleRightTwo, ScaleThree, ScaleTwo } from '../utils';

const TitleComponent = ({ title, className }) => {
    return (
        <div className='px-[0px] md:px-[40px]'>
            <div className={className ? className : 'flex items-center justify-start gap-[30px] mt-[10px] md:mt-[52px] ml:[1px] md:ml-[32px]'}>
                <div className='flex gap-[2px] items-center'>
                    <img src={ScaleOne} alt="Scale" className="scale-img" />
                    <img src={ScaleTwo} alt="Scale" className="scale-img" />
                    <img src={ScaleThree} alt="Scale" className="scale-img" />
                </div>
                <h1 className='text-[14px] mb-0 md:text-[64px] text-[#D2D3D4] text-[400] leading-normal'>{title}</h1>
                <div className='flex gap-[2px] items-center'>
                    <img src={ScaleRightOne} alt="Scale" className="scale-img" />
                    <img src={ScaleRightTwo} alt="Scale" className="scale-img" />
                    <img src={ScaleRightThree} alt="Scale" className="scale-img" />
                </div>
            </div>
        </div>
    );
}

export default TitleComponent;
