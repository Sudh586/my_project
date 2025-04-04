import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const sidemenu = () => {
    setToggle(true);
  };

  const togglebar = (e) => {
    e.stopPropagation();
  };
  const hidesidemenu = () => {
    setToggle(false);
  };
  const menu =
    [
      {
        icon: <FiSearch />,
        name: "search",
        path:"/search"
      },
      {
        icon: <MdOutlineLocalOffer />,
        name: "offer",
        sup:"new"
      },
      {
        icon: <IoMdHelpCircleOutline />,
        name: "help",
      },
      {
        icon: <FaRegCircleUser />,
        name: "sign in",
      },
      {
        icon: <IoCartOutline />,
        name: "cart",
        num:2
      },
    ];
 
  return (
    <>
      <div
        className={`w-full h-full fixed black-overlay duration-500 z-10 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={hidesidemenu}
      >
        <div
          onClick={togglebar}
          className={`w-[500px] h-full bg-white duration-[400] absolute inset-y-0 top-0  ${
            toggle ? "left-[0px]" : "left-[-500px]"
          }`}
        ></div>
      </div>
      <div className="w-full shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
      <div className="w-[1540px] mx-auto p-4 flex items-center justify-between ">
        <div className="flex items-center">
          <div className="w-[30px]">
            <img src="images/logo.png" className="w-full" alt="swiggy logo" />
          </div>
          <div className="">
            <h1 className="ml-5 capitalize font-semibold">
              <span className="font-bold mr-2 border-b-[3px] pb-1">
                thakurpukur
              </span>
              kolkata, westbengal, india
              <RxCaretDown
                className="inline text-2xl ml-2 text-[#fe4f05] cursor-pointer "
                onClick={sidemenu}
              />
            </h1>
          </div>
        </div>

        <nav className="w-[600px]">
          <ul className="flex justify-between items-center">
            {menu.map((menu, index) => {
              return (
                <NavLink to={menu.path} key={index}>
                   <li  className=" flex font-semibold capitalize text-[16px] mr-2 items-center cursor-pointer">
              {menu.icon}
              <span className="ml-2">{menu.name}</span>
              <sup className="ml-1 text-[#fe4f05]">{menu.sup}</sup>
              <sup className=" text-[#fe4f05] text-base font-semibold">{menu.num}</sup>
              </li>
                </NavLink>
              )
            })}
          </ul>
        </nav>
      </div>
      </div>
    </>
  );
};

export default Header;
