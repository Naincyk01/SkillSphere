import React from "react";
import { PeopleData } from "../assests/data/People.data";
import PeopleCard from "../components/PeopleCard";

const People = () => {
  return (
    <div className="flex flex-col h-full w-full px-[5rem]">
      <div className="h-[85px] flex items-center font-semibold text-2xl">
      People
      </div>

      <div className="flex flex-wrap justify-between item-center gap-y-8">
        {PeopleData.map((item, index) => {
          return <PeopleCard data={item} />;
        })}
      </div>
      <div className="h-20 flex justify-center items-center">
        <span className="border-1 bg-gray-100 px-3 py-2 rounded-lg">Load More</span>
       
        </div>
    </div>
  );
};

export default People;
