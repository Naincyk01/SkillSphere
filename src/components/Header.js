import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../assests/image/logo-new (1).svg";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  

  const toggleDropdown = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };



  return (
    <div className="flex w-full border-b h-12 text-sm justify-center px-[5rem]">
      <div className="flex w-full justify-between items-center">
        <div className="flex">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <div className="">
        <ul className="flex w-full justify-end gap-11 font-medium text-gray-600 max-lg:hidden">
            <li className="text-sm cursor-pointer">
              <span
                onClick={() => toggleDropdown("explore")}
                className="flex gap-1"
              >
                <div>Explore</div>
                <div className="flex justify-center items-center">
                  <IoMdArrowDropdown />
                </div>
              </span>
              {activeDropdown === "explore" && (
                <ul className="absolute mt-4 shadow-md w-[160px] flex flex-col justify-start px-[1rem] h-[135px] gap-y-4 rounded-lg border-[1px] border-gray-200 bg-white">
                  <li>
                    <Link to="/" onClick={closeDropdown}>
                      Course
                    </Link>
                  </li>
                  <li>
                    <Link to="/statistics" onClick={closeDropdown}>
                      Statistics
                    </Link>
                  </li>
                  <li>
                    <Link to="/job" onClick={closeDropdown}>
                      Job
                    </Link>
                  </li>
                  <li>
                    <Link to="/people" onClick={closeDropdown}>
                      People
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="text-sm cursor-pointer">
              <span
                onClick={() => toggleDropdown("certifications")}
                className="flex gap-1"
              >
                <div>Certifications</div>
                <div className="flex justify-center items-center">
                  <IoMdArrowDropdown />
                </div>
              </span>
              {activeDropdown === "certifications" && (
                <ul className="absolute mt-4 shadow-md w-[160px] flex flex-col justify-start px-[1rem] h-[135px] gap-y-4 rounded-lg border-[1px] border-gray-200 bg-white">
                  <li>
                    <Link to="/" onClick={closeDropdown}>
                      Course
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={closeDropdown}>
                      Statistics
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="text-sm cursor-pointer">
              <span
                onClick={() => toggleDropdown("courseCreation")}
                className="flex gap-1"
              >
                <div>Course Creation</div>
                <div className="flex justify-center items-center">
                  <IoMdArrowDropdown />
                </div>
              </span>
              {activeDropdown === "courseCreation" && (
                <ul className="absolute mt-4 shadow-md w-[160px] flex flex-col justify-start px-[1rem] h-[135px] gap-y-4 rounded-lg border-[1px] border-gray-200 bg-white">
                  <li>
                    <Link to="/job" onClick={closeDropdown}>
                      Job
                    </Link>
                  </li>
                  <li>
                    <Link to="/people" onClick={closeDropdown}>
                      People
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="text-sm">
              About Us
            </li>
            <li className="text-sm">
              Blog
            </li>
            <li className="text-sm">
              Login
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
