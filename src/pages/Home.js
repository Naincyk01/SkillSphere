import React, { useState } from "react";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import ExploreSlider from "../components/Exploreslider";
import {HomePageData} from "../assests/data/HomePage.data"

const Home = () => {
  const [activeItem, setActiveItem] = useState("live");
  return (
    <div className="flex h-full w-full flex-col justify-center px-[5rem]">
      <div className="">
        <div className="w-full h-9"></div>
        <div className="text-xl font-semibold">All Courses</div>
        <div className="h-8 w-full"></div>
      </div>
      <ExploreSlider activeItem={activeItem} setActiveItem={setActiveItem} />
      { activeItem === "live" ? 
        <div className="flex flex-wrap justify-between item-center gap-y-6">
        {HomePageData.map((item, index) => {
          return(
            <Card data={item}/>
            )
          })}
        </div>
        :
        <Card2/>
      }
    </div>
  );
};
export default Home;
