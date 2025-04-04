import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Fotter = () => {
  const[arrow , setArrow]=useState(<IoIosArrowDown className="inline"/>);
  const[sehar , setSahar]=useState([]);
  const[dekho ,setDekho]=useState([])
  const[toggle , setToggle]=useState(false)
  const cityname=async()=>{
const response= await fetch("http://localhost:3000/cities")
const data= await response.json();
setSahar(data || [])
  }
  useEffect(()=>{
    cityname();
  },[])
  const seherdikhawo=()=>{
if(toggle=== false){
setDekho(sehar)
setToggle(true)
setArrow(<IoIosArrowUp className="inline"/>)
}else{
  setToggle(false)
  setDekho([])
  setArrow(<IoIosArrowDown className="inline"/>)
}
  }
  const foot = [
    {
      company: "about us",
      contact: "help & support",
      city: "bangalore",
      life:"explore with swiggy"
    },
    {
      company: "Swiggy Corporate",
      contact: "partner with us",
      city: "gurgaon",
      life:"swiggy news"
    },
    {
      company: "careers",
      contact: "ride with us",
      city: "hyderabad",
      life:"snackables"
    },
    {
      company: "team",
      legal: "term & condition",
      city: "delhi",
    },
    {
      company: "swiggy one",
      legal: "cookies policy",
      city: "mumbai",
    },
    {
      company: " swiggy instamart",
      legal: "privacy policy",
      city: "pune",
    },
    {
      company: "swiggy dineout",
    },
    {
      company: "swiggy genie",
    },
    {
      company: "minis",
    }
  ];
  return (
    <>
      <div className="w-full bg-[#f0f0f5] mt-15 pb-5">
        <div className="w-[1440px] mx-auto flex justify-between border-b-1 border-black">
          <div className="w-[432px]">
            <img
              src="images/footer_logo.png"
              alt="swiggy logo"
              className="max-w-[40%] pt-15 flex justify-center"
            />
            <h1 className="font-medium text-[15px] text-gray-600 pt-2">
              © 2025 Swiggy Limited
            </h1>
          </div>
          <div className="w-[1000px] flex justify-between  py-15">
            <div className="w-[200px] flex flex-wrap">
              <h1 className="font-semibold text-[18px] capitalize w-full ">
                Company
              </h1>
              <ul>
                {foot.map((name, index) => {
                  return (
                    <li key={index}>
                      <h1 className="capitalize my-3 font-medium text-[14px] text-gray-600 ">
                        {name.company}
                      </h1>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-[200px] flex flex-wrap">
              <div className="w-full">
                <h1 className="font-semibold text-[18px] capitalize w-full ">
                  contact us
                </h1>
                <ul>
                  {foot.map((name, index) => {
                    return (
                      <li key={index}>
                        <h1 className="capitalize my-3 font-medium text-[14px] text-gray-600 ">
                          {name.contact}
                        </h1>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="w-full">
                <h1 className="font-semibold text-[18px] capitalize w-full ">
                  legal
                </h1>
                <ul>
                  {foot.map((name, index) => {
                    return (
                      <li key={index}>
                        <h1 className="capitalize my-3 font-medium text-[14px] text-gray-600 ">
                          {name.legal}
                        </h1>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="w-[200px] flex flex-wrap">
              <h1 className="font-semibold text-[18px] capitalize w-full  ">
                available in:
              </h1>
              <ul className="w-full">
                {foot.map((name, index) => {
                  return (
                    <li key={index}>
                      <h1 className="capitalize my-3 font-medium text-[14px] text-gray-600 ">
                        {name.city}
                      </h1>
                    </li>
                  );
                })}
                <button className=" w-[70%] items-start"><h1 onClick={seherdikhawo} className=" text-[14px] font-semibold p-3 border border-gray-400/60 mx-auto items-center flex justify-between rounded-xl text-gray-600">685 cities {arrow} </h1></button>
              </ul>
            </div>
            <div className="w-[200px] flex flex-wrap">
              <div className="w-full">
              <h1 className="font-semibold text-[18px] capitalize w-full ">
                Life at Swiggy
              </h1>
              <ul>
                {foot.map((name, index) => {
                  return (
                    <li key={index}>
                      <h1 className="capitalize my-3 font-medium text-[14px] text-gray-600 ">
                        {name.life}
                      </h1>
                    </li>
                  );
                })}
              </ul>
              </div>
              <div className="w-full">
              <h1 className="font-semibold text-[18px] capitalize w-full ">
              Social Links
              </h1>
             <div className="w-[75%] flex justify-between items-center my-5">
                <FaLinkedin/> <FaInstagram/> <FaFacebookF/> <FaPinterest/> <FaTwitter/>
             </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 w-[1150px] mx-auto flex justify-between items-center p-5">
          <div className="w-[54%] text-[22px] font-semibold">
                <h1>For better experience, download the Swiggy app now</h1>
          </div>
          <div className="w-[44%] flex justify-center text-2xl font-bold">
                <button className="mx-5 hover:scale-110 duration-200">
                  <img src="images/icon-AppStore_lg30tv.avif"/>
                </button>
                <button className="mx-5 hover:scale-110 duration-200">
                  <img src="images/icon-GooglePlay_1_zixjxl.avif"/>
                </button>
          </div>
        </div>
      </div>
      {toggle ?  <div className=" w-full bg-[#f0f0f5] flex flex-wrap ">
        <div className="w-[1440px] mx-auto p-10 flex flex-wrap justify-between">
          <div className="w-full text-left">
            <h1 className="font-semibold ml-2.5 pb-5">Other cities that we deliver:</h1>
          </div>
                {dekho.map((name, index)=>{
                  return(
                    <div className="w-[320px] text-left text-[14px] font-semibold p-3  text-gray-600">
                      <h1>{name.city_name}</h1>
                    </div>
                  )
                })}
        </div>
      </div>:""}
     
    </>
  );
};

export default Fotter;
