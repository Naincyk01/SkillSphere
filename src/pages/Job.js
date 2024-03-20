import React from 'react'
import { JobData } from '../assests/data/Job.data';
import JobCard1 from '../components/JobCard1';

const Job = () => {
  return (
    <div className='flex flex-col h-full w-full px-[5rem]'>
      <div className='flex h-full w-full justify-between'>
      <div className='h-[85px] flex items-center font-semibold text-2xl'>Job Openings</div>
      <div className='h-[30px] w-[90px] flex items-center justify-center font-semibold text-sm bg-black text-white mt-5 rounded-lg'>Post a job</div> 
      </div>
    <div className="flex flex-wrap justify-between item-center gap-y-4">
          {JobData.map((item, index) => {
            return <JobCard1 data={item} />;
          })}
        </div>

    </div>
  )
}

export default Job