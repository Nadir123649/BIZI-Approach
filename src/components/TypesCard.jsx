import React from 'react';

const TypesCard = ({ types }) => {
  return (
    <div className='typed-card flex justify-center items-center flex-col'>
      <h1 className='text-[#D2D3D4] text-[32px] font-[400] leading-normal'>{types.title}</h1>
    </div>
  );
}

export default TypesCard;
