import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { BiLogoMediumOld } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import footerlogo from "../assests/image/logo-new (1).svg";

const Footer = () => {
  return (
    <footer className=" text-black h-full w-full border-t border-gray-200 mt-20">
      <div className="flex flex-col justify-start px-[5rem]">
          <div className="h-[100px] w-full flex items-center">
          <img src={footerlogo} className="bg-white h-[30px] w-[120px]" />
         </div>
         <div className="flex h-[140px] gap-x-12 max-sm:flex max-sm:flex-col bg-white max-sm:h-full">
          <ul className="flex flex-col gap-2 text-[15px]">
            <li className="text-gray-500">By Frappe</li>
            <li>Frappe Framework</li>
            <li>ERPNext</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-500 max-sm:mt-6">Terms</li>
            <li>Acceptable Use Policy</li>
            <li>Terms of Use</li>
            <li>Terms of Certification</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-500 max-sm:mt-6">Policies</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-gray-500 max-sm:mt-6">company</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
         </div>

       
          <div className="flex justify-end h-[100px] items-center gap-4 max-sm:flex max-sm:justify-start">
            <div className="text-gray-400">
           
            <BiLogoFacebook size="25px" />
            </div>
            <div  className="text-gray-400">
            <IoLogoTwitter size="25px" />
            </div>
            <div  className="text-gray-400">
            <BiLogoMediumOld size="25px" />
            </div>
            <div  className="text-gray-400">
            <BsGithub size="25px" />

            </div>
        </div>

        <div className="flex justify-between bg-white h-[40px] max-sm:h-full max-sm:flex max-sm:flex-col">
          <div>school@frappe.io</div>
          <div className="text-gray-600 max-sm:mt-4">Build on Frappe Framework and Frappe LMS</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
