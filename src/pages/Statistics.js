import React from "react";
import StatisticsCard from "../components/StatisticsCard";
import graph1 from "../assests/image/graph1.png"
import graph2 from "../assests/image/graph2.png"
import graph3 from "../assests/image/graph3.png"
import graph4 from "../assests/image/graph4.png"
const StatisticsData = [
  {
    id: 1,
    title: "Published Course",
    heading: "18",
  },
  {
    id: 2,
    title: "Total Signups",
    heading: "26,744",
  },
  {
    id: 3,
    title: "Enrollment Count",
    heading: "51,856",
  },
  {
    id: 4,
    title: "Courses Completed",
    heading: "9,281",
  },
  {
    id: 5,
    title: "Lessons Completed",
    heading: "1,78,703",
  },
];
const Statistics = () => {
  return (
    <div className="flex h-full w-full flex-col px-[5rem]">
      <div className="h-[95px] w-full flex items-center font-semibold text-2xl">Statistics</div>
      <div className="flex justify-between items-center h-full w-full max-lg:flex max-lg:justify-center max-lg:flex-col max-lg:gap-5">
        {StatisticsData.map((item, index) => {
          return <StatisticsCard key={item.id} data={item} />;
        })}
      </div>
      <div className="h-full w-full flex flex-wrap justify-between gap-4 mt-10">
        <div className=" h-[300px] border-[1px] border-grey-400 w-[33.5rem] overflow-hidden rounded-xl flex justify-center items-center">
          <img src={graph1} className="h-[240px] object-cover"/>
        </div>
        <div className=" h-[300px] border-[1px] border-grey-400 w-[33.5rem] overflow-hidden rounded-xl flex justify-center items-center">
          <img src={graph2} className="h-[240px] object-cover"/>
        </div>
        <div className=" h-[300px] border-[1px] border-grey-400 w-[33.5rem] overflow-hidden rounded-xl flex justify-center items-center">
          <img src={graph3} className="h-[240px] object-cover"/>
        </div>
        <div className=" h-[300px] border-[1px] border-grey-400 w-[33.5rem] overflow-hidden rounded-xl flex justify-center items-center">
          <img src={graph4} className="h-[240px] object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
