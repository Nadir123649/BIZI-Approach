import React from 'react';

const TeamCard = ({ team }) => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <div className='img-box'>
                <img src={team.imageOne} alt="team" />
            </div>
            <div className='content text-center mt-[36px]  max-w-[245px] w-full mx-auto'>
                <h1 className='text-[#FFCC2A] text-[24px] font-[400] mb-[10px]'>{team.name}</h1>
                {team.description && <p className='text-[#D2D3D4] text-[16px] leading-normal font-[400]'>{team.description}</p>}
            </div>
        </div>
    );
}

export default TeamCard;
