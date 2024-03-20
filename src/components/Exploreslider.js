import React from 'react';

const ExploreSlider = ({ activeItem, setActiveItem }) => {
  return (
    <div className='flex gap-8 border-b mb-4 h-[2.5rem] text-sm'>
      <div
        className={`h-full cursor-pointer mb-2 flex items-center gap-1 box-border ${activeItem === "live" ? "border-b border-black  font-medium" : ""}`}
        onClick={() => setActiveItem("live")}
      > 
        Live {" "}
        <span className='h-4 px-[5px] flex items-center justify-center rounded-xl border border-black'>
          18
        </span>
      </div>
      
      <div
        className={`h-full cursor-pointer mb-2 flex items-center gap-1 box-border ${activeItem === "upcoming" ? "border-b border-black  font-medium" : ""}`}
        onClick={() => setActiveItem("upcoming")}
      >
        Upcoming {" "}
        <span className='h-4 px-[5px] flex items-center justify-center rounded-xl border border-black'>
          0
        </span>
      </div>
    </div>
  );
};

export default ExploreSlider;
