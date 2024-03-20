import React from "react";
import { CiLocationOn } from "react-icons/ci";

const JobCard1 = ({ data }) => {
  return (
    <div className="h-[120px] border-[1px] border-grey-400 w-[33rem] rounded-xl flex justify-start items-center gap-6">
      <div className=" h-[100px] flex px-[1rem] w-full justify-start items-center gap-6">

        <div className=" w-[60px] h-[50px]">
          <img
            className="h-[50px] w-[60px] object-cover rounded-lg"
            src={data.logo}
            alt="Image"
          />
        </div>

        <div className="flex flex-col w-full">

          <div className="font-semibold text-sm">{data.jobField}</div>
          <div className="flex justify-start text-sm h-[50px] items-center gap-x-4">
            <div className="h-[25px]">{data.companyName}</div>
            <div className="flex mr-4">
              <span className="mt-1">
                <CiLocationOn />
              </span>
              {data.location}
            </div>
          </div>

          <div className="flex text-sm gap-x-6">
            <div className="rounded-lg text-sm w-[80px] flex justify-center items-center text-green-900 bg-green-100">{data.jobType}</div>
            <div className="text-gray-400">{data.lastDate}</div>
          </div>

        </div>

        
      </div>
    </div>
  );
};

export default JobCard1;
