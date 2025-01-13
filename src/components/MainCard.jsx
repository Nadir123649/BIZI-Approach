import React from 'react';

const MainCard = ({ card }) => {
    return (
        <div className='card-bordered'
            style={{
                backgroundImage: `url(${card.backgroundImage})`,
                // backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
            <img src={card.logo} alt="logo-card" />
            <div>
                <div>
                    <h3 className='leading-normal not-italic text-[16px] font-[400] text-[#FFFFFF]'>ACCELERATION</h3>
                    <img src={card.imageOne} alt="one-progress" />
                    <p className='text-right text-[10px] font-[400] text-[#FFFFFF] leading-normal not-italic'>{card.valueone}</p>
                </div>
                <div>
                    <h3 className='leading-normal not-italic text-[16px] font-[400] text-[#FFFFFF]'>max speed</h3>
                    <img src={card.imageTwo} alt="two-progress"  />
                    <p className='text-right text-[10px] font-[400] text-[#FFFFFF] leading-normal not-italic'>{card.valuetwo}</p>
                </div>
                <div>
                    <h3 className='leading-normal not-italic text-[16px] font-[400] text-[#FFFFFF]'>HANDLING</h3>
                    <img src={card.imageThree} alt="three-progress"  />
                    <p className='text-right text-[10px] font-[400] text-[#FFFFFF] leading-normal not-italic'>{card.valuethree}</p>
                </div>
                <div>
                    <h3 className='leading-normal not-italic text-[16px] font-[400] text-[#FFFFFF]'>BRAKING</h3>
                    <img src={card.imageFour} alt="four-progress" />
                    <p className='text-right text-[10px] font-[400] text-[#FFFFFF] leading-normal not-italic'>{card.valuefour}</p>
                </div>
            </div>
            <div className='upgrade-box'>
                <img src={card.upgrade} alt="upgrade" />
            </div>
        </div>
    );
}

export default MainCard;
