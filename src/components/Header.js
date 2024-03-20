import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assests/image/logo-new (1).svg";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  const closeDropdown1 = () => {
    setIsDropdownOpen1(false);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const closeDropdown2 = () => {
    setIsDropdownOpen2(false);
  };
  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
  };

  const closeDropdown3 = () => {
    setIsDropdownOpen3(false);
  };
  return (
    <div className="flex w-full border-b h-12 text-sm justify-center px-[5rem]">
      <div className='flex w-full justify-between items-center'>
        <div className="flex">
          <a href="/">
            <img src={logo} />
          </a>
        </div>

        <div className="">
          <ul className="flex w-full justify-end gap-11 font-medium text-gray-600">
            <li className="text-sm cursor-pointer">
              <span onClick={toggleDropdown1} className="flex gap-1">
                <div>Explore</div>
                <div className="flex justify-center items-center">
                  <IoMdArrowDropdown />
                </div>
              </span>
              {isDropdownOpen1 && (
                <ul className="absolute mt-8 bg-white shadow-md">
                  <li>
                    <Link to="/explore/course" onClick={closeDropdown1}>
                      Course
                    </Link>
                  </li>
                  <li>
                    <Link to="/explore/statistics" onClick={closeDropdown1}>
                      Statistics
                    </Link>
                  </li>
                  <li>
                    <Link to="/explore/job" onClick={closeDropdown1}>
                      Job
                    </Link>
                  </li>
                  <li>
                    <Link to="/explore/people" onClick={closeDropdown1}>
                      People
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="text-sm cursor-pointer">
              <span onClick={toggleDropdown2} className="flex gap-1">
                <div>Certifications</div>
                <div className="flex justify-center items-center">
                  <IoMdArrowDropdown />
                </div>
              </span>
              {isDropdownOpen2 && (
                <ul className="absolute mt-8 bg-white shadow-md">
                  <li>
                    <Link to="/explore/course" onClick={closeDropdown2}>
                      Course
                    </Link>
                  </li>
                  <li>
                    <Link to="/explore/statistics" onClick={closeDropdown2}>
                      Statistics
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="text-sm cursor-pointer">
              <span onClick={toggleDropdown3} className="flex gap-1">
                <div>Course Creation</div>
                <div className="flex justify-center items-center">
                  <IoMdArrowDropdown />
                </div>
              </span>
              {isDropdownOpen3 && (
                <ul className="absolute mt-8 bg-white shadow-md">
                  <li>
                    <Link to="/explore/job" onClick={closeDropdown3}>
                      Job
                    </Link>
                  </li>
                  <li>
                    <Link to="/explore/people" onClick={closeDropdown3}>
                      People
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="text-sm">
              <Link to="/about">About</Link>
            </li>
            <li className="text-sm">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="text-sm">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
