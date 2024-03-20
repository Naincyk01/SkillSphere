import React from 'react';



const StatisticsCard = ({ data }) => {
  return (
    <div key={data.id} className=' h-[120px] w-[195px] rounded-lg flex flex-col gap-6 border-[1px] border-gray-300'>
      <h2 className='flex justify-start h-[40px] ml-4 items-center'>{data.title}</h2>
      <p className='flex justify-start font-semibold text-2xl ml-4'>{data.heading}</p>
    </div>
  );
};
export default StatisticsCard ;