import React from 'react'
import { PiChatsThin } from "react-icons/pi";

const Card2 = () => {
  return (
    <div className='w-full border-[1px] rounded-xl border-gray-300 h-44 flex justify-center items-center gap-3'>
      <div className='text-gray-500 font-light'>
      <PiChatsThin size="50px"/>
      </div>
      <div>
        <h2 className='text-lg font-bold'>No Upcoming Courses</h2>
        <h3>There are no upcoming courses on this site.</h3>
      </div>
    </div>
  )
}

export default Card2