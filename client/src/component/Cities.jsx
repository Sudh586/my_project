import React, { useEffect, useState } from "react";
import { RxCaretDown } from "react-icons/rx";

const Cities = () => {
  const [cname, setCname] = useState([]);
  const[city , setCity]= useState([]);
  const [toogle, setToggle] = useState(true);
  const [showmore, setShowmore] = useState("show more");

  const citydelivery = async () => {
    const response = await fetch("https://my-project-server-3i71.onrender.com/citynames");
    const data = await response.json();
    setCname(data || []);
    setCity(data.slice(0 ,11))
  };
  const show = () => {
    if (toogle) {
    setCity(cname)
    setShowmore("show less")
    setToggle(false)
    }else{
      setCity(cname.slice(0, 11))
      setShowmore("show more")
      setToggle(true)
    }
   
  };
  useEffect(() => {
    citydelivery();
  }, []);
  return (
    <>
      <div className="w-[1440px] mx-auto flex flex-wrap">
        <h1 className=" w-full text-2xl capitalize font-extrabold ml-4">
          Cities with food delivery
        </h1>
        <div className={`w-full flex flex-wrap mt-3`}>
          {city.map((name, index) => {
            return (
              <div
                key={index}
                className="w-[340px] shrink-0 py-3 bg-white border border-gray-400/60 mx-auto items-center my-2.5 rounded-xl"
              >
                <h1 className="text-center text-[13px] font-semibold">
                  Order food online in {name.cityname}
                </h1>
              </div>
            );
          })}
          <button
            onClick={show}
            type="button"
            className="w-[340px] text-center text-[13px] font-semibold py-3 bg-white border border-gray-400/60 mx-auto items-center my-2.5 rounded-xl"
          >
            {showmore} <RxCaretDown className="inline text-[22px]"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cities;
