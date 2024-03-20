import React from "react";

const PeopleCard = ({ data }) => {
  return (
    <div className=" h-[95px] w-[250px] rounded-xl border-[1px] border-gray-200 items-center ">
      <div className=" h-[95px] w-[240px] flex justify-between px-[2rem] items-center gap-x-4">
        <div className=" h-[70px] w-[75px] rounded-full">
          <img src={data.photo}  className="h-[69px] w-[74px] rounded-full"/>
        </div>
        <div className="text-sm font-semibold">{data.name}</div>
      </div>
    </div>
  );
};

export default PeopleCard;
