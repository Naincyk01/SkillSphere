import React, { useState } from "react";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import ExploreSlider from "../components/Exploreslider";
import { HomePageData } from "../assests/data/HomePage.data";

const Home = () => {
  const [activeItem, setActiveItem] = useState("live");
  return (
    <div className="flex h-full w-full flex-col justify-center px-[5rem]">
      <div className="h-[85px] w-full flex justify-between items-center">
        <div className="text-xl font-semibold">All Courses</div>
        <div className="flex gap-6">
          <div className=" flex items-center justify-center border-1 border-grey-600 bg-gray-100 rounded-lg text-gray-600 w-[120px] shadow-md">Most Popular ↧</div>
          <div className="border-1 border-grey-600 bg-gray-100 rounded-lg text-gray-600 w-[150px] flex items-center justify-center shadow-md">Search (Ctrl + K)</div>
        </div>
      </div>
      <ExploreSlider activeItem={activeItem} setActiveItem={setActiveItem} />
      {activeItem === "live" ? (
        <div className="flex flex-wrap justify-between item-center gap-y-6 max-lg:flex max-lg:justify-center max-lg:gap-4">
          {HomePageData.map((item, index) => {
            return <Card data={item} />;
          })}
        </div>
      ) : (
        <Card2 />
      )}
    </div>
  );
};
export default Home;
