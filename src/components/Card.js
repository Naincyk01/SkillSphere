import React from "react";
import { PiBookOpenThin } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { SlPeople } from "react-icons/sl";

const Card = ({data}) => {
  return (
    
      
      <div className="h-[350px] border-[1px] border-grey-400 w-[22rem] rounded-t-xl overflow-hidden rounded-b-lg">
        {/* <div className="h-1/2 w-full"> */}
          <img className="h-[170px] w-full object-cover" src={data.imgUrl} alt="Image" />
        {/* </div> */}
        <div className="flex justify-between">
          <div className="flex gap-1 h-1/3 ml-4">
            <div className="mt-2">
              <PiBookOpenThin />
            </div>
            <div className="mt-1">8</div>
          </div>
          <div className=" flex gap-1 h-1/3">
            <div className="mt-2">
            <SlPeople />
            </div>
            <div className="mt-1">8</div>
          </div>
          <div className="flex gap-1 h-1/3 mr-4">
            <div className="mt-2">
            <CiStar />
            </div>
            <div className="mt-1">8</div>
          </div>
        </div>
        <div className="flex flex-col mt-2 ml-4">
          <div className="font-bold text-lg">{data.heading}</div>
          <div className="line">
            {data.description}
          </div>
        </div>
        <div className="mt-3 ml-2">
          <div className="flex justify-between">
            <div className="flex">
            <img src={data.userImage} alt="Person Logo" className=" w-10 rounded-full h-10 border border-black" />
            <span className="ml-3 mt-2">{data.userName}</span>

            </div>
            <span className="mr-4 mt-2">{data.isPaid}</span>
          </div>
        </div>
      </div>
 

)};

 


export default Card;
