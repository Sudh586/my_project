import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Category = () => {
  const [slide, setSlide] = useState(0);
  const [bgcolorleft, setBgcolorleft] = useState("bg-gray-200");
  const [bgcolorright, setBgcolorright] = useState("bg-gray-300");
  // const[slideleft,setSlideleft]=useState(0)
  const rightarrow = () => {
    if (slide === 0) {
      setSlide(1);
      setBgcolorleft("bg-gray-300");
    }
    if (slide === 1) {
      setSlide(2);
      setBgcolorright("bg-gray-200");
    }
  };
  const leftarrow = () => {
    if (slide === 2) {
      setSlide(1);
      setBgcolorright("bg-gray-300");
    }
    if (slide === 1) {
      setSlide(0);
      setBgcolorleft("bg-gray-200");
    }
  };
  const [categoryjson, setCatagoryjson] = useState([]);
  const [categoryjson2nd, setCatagoryjson2nd] = useState([]);
  const fetchcategory = async () => {
    const response = await fetch("https://my-project-server-3i71.onrender.com/categories");
  
    const data = await response.json();
    setCatagoryjson(data || []);
  };
  const fetchcetagory2 = async () => {
    const response = await fetch("https://my-project-server-3i71.onrender.com/categories2");
  
    const data = await response.json();
    setCatagoryjson2nd(data || []);
  };
  useEffect(() => {
    fetchcategory();
    fetchcetagory2();
  }, []);
  return (
    <>
      <div className="w-[1440px] mx-auto">
        <div className=" flex items-center mt-10 justify-between">
          <div className="flex">
            <h1 className="text-2xl font-extrabold capitalize">
              which food you want!
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
          </div>
        </div>
        <div className="flex items-center overflow-hidden">
          {categoryjson.map((cate, index) => {
            return (
              <div
                key={index}
                className="w-[180px] flex-grow shrink-0 duration-400"
                style={{
                  transform: `translateX(-${slide * 100}%)`,
                }}
              >
                <NavLink to={`/${cate.id}/${cate.name}/${cate.tagline}`}>
                  {" "}
                  <img src={`https://my-project-server-3i71.onrender.com${cate.image}`} alt={cate.name} />


                </NavLink>
              </div>
            );
          })}
        </div>
        {/* <div className=" flex items-center overflow-hidden">
          {categoryjson2nd.map((cate2, index) => {
            return (
              <div
                key={index}
                className="w-[180px] flex-grow shrink-0 duration-400 "
                style={{ transform: `translateX(-${slide * 100}%)` }}
              >
                <NavLink to={`/${cate2.id}/${cate2.name}`}>
                 <img src={`https://my-project-server.onrender.com${cate2.image}`} alt={cate2.name} />

                </NavLink>
              </div>
            );
          })}
        </div> */}
      </div>
    </>
  );
};

export default Category;
