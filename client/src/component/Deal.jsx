import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Deal = () => {
  const [left, setLeft] = useState("bg-gray-200");
  const [right, setRight] = useState("bg-gray-300");
  const [slice, setSlice] = useState(0);
  const arrowright = () => {
    if (slice === 0) {
      setSlice(1);
      setLeft("bg-gray-300");
    }
    if (slice === 1) {
      setSlice(2);
      setRight("bg-gray-200");
    }
  };
  const arrowleft = () => {
    if (slice === 2) {
      setSlice(1);
      setRight("bg-gray-300");
    }
    if (slice === 1) {
      setSlice(0);
      setLeft("bg-gray-200");
    }
  };
  const offer = [
    {
      title: "Extra ₹30 Off",
      tag: "APPLICABLE OVER & ABOVE COUPONS",
      image: "/images/offer_1.avif",
    },
    {
      title: "Flat ₹100 Off",
      tag: "USE FORFOODIE",
      image: "/images/offer_2.avif",
    },
    {
      title: "40% Off Upto ₹80",
      tag: "USE TRYNEW",
      image: "/images/offer_2.avif",
    },
    {
      title: "Flat ₹125 Off",
      tag: "USE LNBINGE",
      image: "/images/offer_2.avif",
    },
    {
      title: "Flat ₹200 Off",
      tag: "USE CELEBRATIONS",
      image: "/images/offer_2.avif",
    },
  ];
  return (
    <>
      <div className="w-[800px] flex flex-wrap mt-5">
        <div className="w-full flex justify-between items-center p-3">
          <div>
            {" "}
            <h1 className="text-[18px] font-semibold">Deals for you</h1>
          </div>
          <div className="flex flex-wrap">
            <h1
              onClick={arrowleft}
              className={`${left} w-[35px] h-[35px] rounded-full mx-2 flex justify-center items-center`}
            >
              <IoIosArrowBack />
            </h1>
            <h1
              onClick={arrowright}
              className={`${right} w-[35px] h-[35px] rounded-full mx-2 flex justify-center items-center`}
            >
              <IoIosArrowForward />
            </h1>
          </div>
        </div>
        <div className="w-full flex items-center overflow-hidden ">
          {offer.map((each, index) => {
            return (
              <>
                <div
                  key={index}
                  className="w-[320px] rounded-3xl border border-gray-400 flex flex-wrap items-center p-2 mx-2 shrink-0 duration-300"
                  style={{ transform: `translateX(-${slice * 140}%)` }}
                >
                  <div className="w-[20%]">
                    <img
                      src={`${each.image}`}
                      alt={each.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[80%] flex flex-wrap text-left pl-3">
                    <div className="w-full">
                      <h1 className="text-[18px] font-bold">{each.title}</h1>
                    </div>
                    <div className="w-full">
                      <h1 className="text-[12px] font-semibold text-gray-400">
                        {each.tag}
                      </h1>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Deal;
