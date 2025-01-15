import React from 'react';

const MainCard = ({ card }) => {
    return (
        <div className='card-bordered relative'
            style={{
                backgroundImage: `url(${card.backgroundImage})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundOrigin: 'border-box',
                backgroundClip: 'border-box',
                borderRadius: '20px',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className='relative top-[-26px]'>
                <img src={card.logo} alt="logo-card" className='mx-auto block ' />
            </div>
            <div className='max-w-[255px] w-full mx-auto pr-[0px]'>
                <div className='h-[70px]'>
                    <h3 className='leading-normal not-italic text-[16px] font-[400] text-[#FFFFFF] mb-[2px]'>ACCELERATION</h3>
                    <img src={card.imageOne} alt="one-progress" className='w-full' />
                    <p className='text-right text-[10px] font-[400] text-[#FFFFFF] leading-normal not-italic mt-[2px] mb-[2px]'>{card.valueone}</p>
                </div>
                <div className='h-[70px]'>
                    <h3 className='leading-normal not-italic text-[16px] font-[400] text-[#FFFFFF] mb-[2px]'>max speed</h3>
                    <img src={card.imageTwo} alt="two-progress" className='w-full' />
                    <p className='text-right text-[10px] font-[400] text-[#FFFFFF] leading-normal not-italic mt-[2px] mb-[2px]'>{card.valuetwo}</p>
                </div>
                <div className='h-[70px]'>
                    <h3 className='leading-normal not-italic text-[16px] font-[400] text-[#FFFFFF] mb-[2px]'>HANDLING</h3>
                    <img src={card.imageThree} alt="three-progress" className='w-full' />
                    <p className='text-right text-[10px] font-[400] text-[#FFFFFF] leading-normal not-italic mt-[2px] mb-[2px]'>{card.valuethree}</p>
                </div>
                <div className='h-[70px]'>
                    <h3 className='leading-normal not-italic text-[16px] font-[400] text-[#FFFFFF] mb-[2px]'>BRAKING</h3>
                    <img src={card.imageFour} alt="four-progress" className='w-full' />
                    <p className='text-right text-[10px] font-[400] text-[#FFFFFF] leading-normal not-italic mt-[2px] mb-[2px]'>{card.valuefour}</p>
                </div>
            </div>
            <div className='upgrade-box relative top-[-10px] ml-[20px]'>
                <img src={card.upgrade} alt="upgrade" />
            </div>
        </div>
    );
}

export default MainCard;
