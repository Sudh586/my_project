import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { FaRegCalendarCheck } from "react-icons/fa";
import { HiMiniPercentBadge } from "react-icons/hi2";
import { MdStars } from "react-icons/md";

const Dineout = () => {
  const [slide, setSlide] = useState(0);
  const [bgcolorleft, setBgcolorleft] = useState("bg-gray-200");
  const [bgcolorright, setBgcolorright] = useState("bg-gray-300");
  const [dinerestro, setDinerestro] = useState([]);
  const dineoutapi = async () => {
    const response = await fetch("https://my-project-server-3i71.onrender.com/dineout");
    const data = await response.json();
    setDinerestro(data || []);
  };
  useEffect(() => {
    dineoutapi();
  }, []);
  const rightarrow = () => {
    if (slide === 0) {
      setSlide(1);
      setBgcolorleft("bg-gray-300");
    }
    if (slide === 1) {
      setSlide(2);
    }
    if (slide === 1) {
      setSlide(2);
    }
    if (slide === 2) {
      setSlide(3);
    }
    if (slide === 3) {
      setSlide(4);setBgcolorright("bg-gray-200");
    }
  };
  const leftarrow = () => {
  
    if (slide === 4) {
      setSlide(3);
       setBgcolorright("bg-gray-300");
    }
    if (slide === 3) {
      setSlide(2);
    }
    if (slide === 2) {
      setSlide(1);
    }
    if (slide === 1) {
      setSlide(0);
      setBgcolorleft("bg-gray-200");
    }
  };

  return (
    <>
      <div className="w-[1440px] mx-auto mb-30 mt-25">
        <div className=" flex items-center  justify-between">
          <div className="flex">
            {/* <div className="w-[50px]"></div> */}
            <h1 className=" text-2xl font-extrabold capitalize">
            Discover best restaurants on Dineout
            </h1>
          </div>
          <div className="flex flex-wrap">
            <h1
              onClick={leftarrow}
              className={`${bgcolorleft} w-[35px] h-[35px] rounded-full mx-2 flex justify-center items-center`}
            >
              <IoIosArrowBack />
            </h1>
            <h1
              onClick={rightarrow}
              className={`${bgcolorright} w-[35px] h-[35px] rounded-full mx-2 flex justify-center items-center`}
            >
              <IoIosArrowForward />
            </h1>
            {/* <div className="w-[50px]"></div> */}
          </div>
        </div>
        <div className="flex items-center overflow-hidden">
          {dinerestro.map((dine, index) => {
            // const title ={`${dine.address}`};
            return (
              <div
                key={index}
                className="max-w-[400px] bg-white border border-gray-200 rounded-xl shadow-sm mt-7 mx-2 shrink-0 duration-400"
                style={{
                  transform: `translateX(-${slide * 300}%)`,
                }}
              >
                <a href="#">
                  <img
                    className="rounded-t-lg w-full relative "
                    src={`http://localhost:3000${dine.image}`}
                    alt={dine.restaurant_name}
                  />
                  <div className="w-[94%] absolute top-50 left-0 font-extrabold text-[14px] text-white flex justify-between mx-2">
                    <h1 className=" rounded-full swhead px-2">{dine.restaurant_name}</h1>
                    <h1>
                      <MdStars className="inline" />
                      {dine.review}
                    </h1>
                  </div>
                </a>
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h5 className="mb-2 text-[12px] font-bold tracking-tight text-gray-900 dark:text-gray-500 capitalize items-center">
                      {dine.food_category}
                      <span>
                        <GoDotFill className="inline" />
                      </span>
                      {dine.food_type}
                    </h5>
                    <h5 className="mb-2 text-[12px] font-bold tracking-tight text-gray-900 dark:text-gray-600 capitalize items-center">
                      ₹{dine.price} for two
                    </h5>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[13px] font-semibold text-gray-700 dark:text-gray-600 ">
                      {dine.address.slice(0, 35)}...
                    </p>
                    <p className=" text-[12px] font-semibold text-gray-700 dark:text-gray-600">
                      {dine.distance_km}km
                    </p>
                  </div>
                  <div className="w-full items-center mt-2">
                    <h1 className="text-[13px] capitalize font-semibold text-gray-600 bg-gray-200 w-[130px] text-center rounded-full">
                      <FaRegCalendarCheck className="inline text-[10px] mr-1" />
                      table booking
                    </h1>
                  </div>
                  <div className="w-full">
                    <div className="w-full mt-3 flex justify-between items-center px-3 py-2 text-sm text-[12px] font-semibold text-center text-white bg-[#19a672] rounded-lg   dark:bg-[#19a672] capitalize">
                      <a href="#" className="flex items-center">
                        <HiMiniPercentBadge className="text-[20px] mr-1" />
                        flat {dine.discount}% off on pre-booking
                      </a>
                      <h1 className=" text-sm text-[13px] font-semibold text-center text-white bg-[#19a672] rounded-lg focus:ring-4 focus:outline-none  dark:bg-[#19a672] capitalize">
                        + {dine.more} more
                      </h1>
                    </div>
                  </div>
                  <div className="w-full">
                    <a
                      href="#"
                      className="w-full mt-3 flex items-center px-3 py-2 text-sm text-center text-[#19a672] text-[14px] font-semibold bg-[#c8f9e5] rounded-lg focus:ring-4 focus:outline-none  dark:bg-[#c8f9e5] capitalize "
                    >
                      up to 10% off with bank offers
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dineout;
