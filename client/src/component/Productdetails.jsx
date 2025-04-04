import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdStars } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { BiSolidCaretUpCircle } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { FaRegStopCircle } from "react-icons/fa";
import Header from "./Header";
import Deal from "./Deal";
import Menu from "./Menu";
import Category from "./Category";
import Procfoot from "./Procfoot";

const Productdetails = () => {
  const[popup , setPopup]=useState("w-[500px]");
  const[modal , setModal]=useState(false);
 const [toggle , setToggle]=useState({});
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [databiryani, setDatabiryani] = useState([]);
  const [datarolls, setDatarolls] = useState([]); 
  const [datasalad, setDatasalad] = useState([]); 
  const [more, setMore] = useState(databiryani.description);
  const fetchProduct = async () => {
    const res = await fetch("http://localhost:3000/categories");
    const data = await res.json();
    const cetagory = data.find((Category) =>
      Category.items.some((items) => items.id === id)
    );
    console.log(cetagory);
    if (cetagory) {
      const fetcher = cetagory.items.find((items) => items.id === id);
      setProduct(fetcher || {});
      setDatabiryani(fetcher.biryani || []);
      setDatarolls(fetcher.rolls || []);
      setDatasalad(fetcher.salads || []);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]); // Re-fetch when the ID changes

  if (!product) return <p>Loading...</p>;
  const showmore = (e) => {
    setToggle((perv)=>({
      ...perv,
      [e]: !perv[e]
    }))
    
  };
  const menuover=()=>{
setModal(!modal)
  }
  const stop=(e)=>{
    e.stopPropagation();
  }
 
  return (
    <>
    <div className="w-[70px] h-[70px] rounded-full bg-black fixed bottom-5 right-[570px] z-30 flex items-center justify-center cursor-pointer"onClick={menuover}>
        <h1 className="text-white uppercase font-semibold text-[14px] ">menu</h1>
    </div>
    <div className={`black-overlay fixed w-full h-full z-20 ${
          modal ? "opacity-100 visible" : "opacity-0 invisible"
        }`} onClick={menuover}>
          <div className={`bg-black w-[500px] absolute flex flex-wrap rounded-2xl duration-300 ${modal ? "bottom-5 left-[700px]":"-bottom-72"}`}
          onClick={stop}>
            <div className="text-gray-300 text-[20px] flex justify-between items-center w-full py-5 px-10 capitalize font-semibold">
                <h1>{product.sector_bir}</h1>
                <h1>{databiryani.length || 0}</h1>
            </div>
            <div className="text-gray-300 text-[20px] flex justify-between items-center w-full py-5 px-10 capitalize font-semibold">
                <h1>{product.sector_rol}</h1>
                <h1>{datarolls.length || 0}</h1>
            </div>
            <div className="text-gray-300 text-[20px] flex justify-between items-center w-full py-5 px-10 capitalize font-semibold">
                <h1>{product.sector_sal}</h1>
                <h1>{datasalad.length || 0}</h1>
            </div>
          
          </div>
    </div>
      <Header />
      <div className="w-[800px] mx-auto flex flex-wrap">
        <div className="w-full text-left">
          <h1 className="capitalize text-[10px] font-semibold mt-10">
            <span className="text-gray-600">home / {product.area_name} /</span>{" "}
            {product.restaurant_name}
          </h1>
        </div>
        <div className="w-full text-left">
          <h1 className="capitalize text-[30px] font-bold mt-10 px-3">
            {product.restaurant_name}
          </h1>
        </div>
        <div className="w-full text-left flex mt-3 px-5 border-b border-gray-400/50">
          <h1 className="w-[120px] capitalize font-extrabold text-[16px] py-2 text-center border-b-4 border-[#fe4f05] rounded-2xl">order online</h1>
          <h1 className="w-[120px] capitalize font-extrabold text-[16px] py-2 text-center">dineout</h1>
        </div>
        <div className="w-[800px] h-[160px] bg-gradient-to-t from-[#cfcfd3] to-transparent relative mt-5 rounded-4xl">
          <div className="absolute w-[95%] mx-[2.5%] h-[90%] top-0 left-0 rounded-2xl flex flex-wrap border border-gray-400 bg-white p-5">
            <div className="w-full">
              <h1 className="items-center font-semibold text-[15px]">
                <MdStars className="text-[18px] inline text-[#1e913d] -mt-1" />
                {product.ratings} ({product.ratings_count} + ratings)
                <GoDotFill className="inline -mt-1 text-gray-400 text-[10px] mx-2" />
                ₹{product.price_two} for two
              </h1>
            </div>
            <div className="w-full text-[12px] text-[#fe4f05] font-bold underline mt-2">
              <h1>{product.food_name}</h1>
            </div>
            <div className="w-full flex flex-wrap mt-2">
              <div className="w-auto">
                <AiOutlineColumnHeight className="text-[40px] text-gray-400 mr-2 mt-0.5" />
              </div>
              <div className="w-[50%]">
                <div className="w-full">
                  <h1 className="capitalize text-[14px] font-bold">
                    outlet
                    <span className="font-medium mx-3">
                      {product.area_name}
                    </span>
                  </h1>
                </div>
                <div className="w-full">
                  <h1 className="capitalize text-[14px] font-bold mt-1">
                    {product.delivery_time}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Deal />
        <Menu />
        <div className="w-full border-t border-gray-400/50  mx-3 mt-10 flex flex-wrap">
          <div className="w-full flex flex-wrap items-center mt-10">
            <h1 className="w-full text-[16px] font-extrabold capitalize">
              {product.sector_bir} ({databiryani.length})
            </h1>
            {
            databiryani.map((each, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="w-full flex flex-wrap items-center justify-between my-5"
                      >
                        <div className="w-[70%] flex flex-wrap items-center">
                          <div className="w-full ">
                            <BiSolidCaretUpCircle className="text-red-500 text-[20px]" />
                          </div>
                          <div className="w-full font-bold mb-1 text-[18px]">
                            {each.name}
                          </div>
                          <div className="w-full font-semibold mb-1 text-[16px]">
                            ₹{each.price}
                          </div>
                          <div className="w-full font-semibold mb-1 text-[12px] items-center flex text-green-800">
                            <MdStars className="inline mr-1 -mt-0.5 text-[16px]" />
                            {each.ratings}{" "}
                            <span className="text-[12.5px] text-gray-500 ml-0.5">
                              ({each.reviews})
                            </span>
                          </div>
                          <div className="w-full mb-1 text-[12px]" onClick={()=> showmore(index)}>
                             {toggle[index]? each.description: `${each.description.slice(0 , 150)+"...more"}`}
                          </div>
                        </div>
                        <div className="w-[22%] rounded-2xl relative">
                          <img
                            src="/images/onebir.webp"
                            alt={databiryani.name}
                            className="rounded-2xl"
                          />
                          <div className="w-[100%] absolute flex justify-center -bottom-5 left-0">
                              <button type="button" className="w-[70%] rounded-xl text-green-800 uppercase font-extrabold text-[20px] border border-gray-400/70 bg-white px-8 py-1 cursor-pointer hover:bg-gray-200 duration-200">add</button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              }
              </div></div>
              <div className="w-full border-t border-gray-400/50  mx-3 mt-10 flex flex-wrap">
          <div className="w-full flex flex-wrap items-center mt-10">
            <h1 className="w-full text-[16px] font-extrabold capitalize">
              {product.sector_rol} ({datarolls.length})
            </h1>
            { datarolls.map((each, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="w-full flex flex-wrap items-center justify-between my-5"
                      >
                        <div className="w-[70%] flex flex-wrap items-center">
                          <div className="w-full ">
                            <BiSolidCaretUpCircle className="text-red-500 text-[20px]" />
                          </div>
                          <div className="w-full font-bold mb-1 text-[18px]">
                            {each.name}
                          </div>
                          <div className="w-full font-semibold mb-1 text-[16px]">
                            ₹{each.price}
                          </div>
                          <div className="w-full font-semibold mb-1 text-[12px] items-center flex text-green-800">
                            <MdStars className="inline mr-1 -mt-0.5 text-[16px]" />
                            {each.ratings}{" "}
                            <span className="text-[12.5px] text-gray-500 ml-0.5">
                              ({each.reviews})
                            </span>
                          </div>
                          <div className="w-full mb-1 text-[12px]" onClick={()=> showmore(index)}>
                             {toggle[index]? each.description: `${each.description.slice(0 , 150)+"...more"}`}
                          </div>
                        </div>
                        <div className="w-[22%] rounded-2xl relative">
                          <img
                            src="/images/rolls.jpg"
                            alt={datarolls.name}
                            className="rounded-2xl"
                          />
                          <div className="w-[100%] absolute flex justify-center -bottom-5 left-0">
                              <button type="button" className="w-[70%] rounded-xl text-green-800 uppercase font-extrabold text-[20px] border border-gray-400/70 bg-white px-8 py-1 cursor-pointer hover:bg-gray-200 duration-200">add</button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              }
          </div>
        </div>
        <div className="w-full border-t border-gray-400/50  mx-3 mt-10 flex flex-wrap">
          <div className="w-full flex flex-wrap items-center mt-10">
            <h1 className="w-full text-[16px] font-extrabold capitalize">
              {product.sector_sal} ({datasalad.length})
            </h1>
            { datasalad.map((each, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="w-full flex flex-wrap items-center justify-between my-5"
                      >
                        <div className="w-[70%] flex flex-wrap items-center">
                          <div className="w-full ">
                            <BiSolidCaretUpCircle className="text-red-500 text-[20px]" />
                          </div>
                          <div className="w-full font-bold mb-1 text-[18px]">
                            {each.name}
                          </div>
                          <div className="w-full font-semibold mb-1 text-[16px]">
                            ₹{each.price}
                          </div>
                          <div className="w-full font-semibold mb-1 text-[12px] items-center flex text-green-800">
                            <MdStars className="inline mr-1 -mt-0.5 text-[16px]" />
                            {each.ratings}{" "}
                            <span className="text-[12.5px] text-gray-500 ml-0.5">
                              ({each.reviews})
                            </span>
                          </div>
                          <div className="w-full mb-1 text-[12px]" onClick={()=> showmore(index)}>
                             {toggle[index]? each.description: `${each.description.slice(0 , 150)+"...more"}`}
                          </div>
                        </div>
                        <div className="w-[22%] rounded-2xl relative">
                          <img
                            src="/images/salad_2.avif"
                            alt={datasalad.name}
                            className="rounded-2xl"
                          />
                          <div className="w-[100%] absolute flex justify-center -bottom-5 left-0">
                              <button type="button" className="w-[70%] rounded-xl text-green-800 uppercase font-extrabold text-[20px] border border-gray-400/70 bg-white px-8 py-1 cursor-pointer hover:bg-gray-200 duration-200">add</button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              }
              </div>
              </div>
              <div className='w-full bg-[#f0f0f5] flex flex-wrap '>
            <div className='w-full bg-[#f0f0f5] flex flex-wrap items-center border-b mx-5'>
                <div className='w-[10%] '>
                <img src='/images/fssai_final_edss9i.avif' alt='' className='w-full py-5 '/>
                </div>
                <div>
                    <h1 className='text-[12px] mt-2 text-gray-500 ml-5'>License No. 12819019001328</h1>
                </div>
            </div>
            <div className='w-full bg-[#f0f0f5] flex flex-wrap items-center border-b  mt-4 mx-5'>
               <div className="w-full"><h1 className="px-3 font-semibold text-[14px] text-gray-500">{product.restaurant_name}</h1></div>
               <div className="w-full"><h1 className="px-3 font-semibold text-[14px] text-gray-500">(Outlet:Alipore)</h1></div>
               <div className="w-full"><h1 className="px-3 flex items-center font-medium text-[12px] text-gray-500 mt-3 mb-5">
              <HiLocationMarker className="inline mr-2 text-[14px]"/> 20, B.L Saha Road , Ward No-117, Kolkata Muncipal Corporation, Kolkata ( West Bengal)700053</h1></div>
            </div>
            <div className="w-full mx-5 mt-5 flex flex-wrap">
                  <h1 className="w-full text-center font-bold text-[14px]">For better experience, download the Swiggy app now</h1>
                  <div className="w-full flex justify-center mt-3 mb-30">
                    <img src="/images/icon-GooglePlay_1_zixjxl.avif" alt="google play store" className="w-[150px] mx-3"/>
                    <img src="/images/icon-AppStore_lg30tv.avif" alt="google play store" className="w-[150px] mx-3"/>
                  </div>
            </div>
      </div>
      </div>
    </>
  );
};

export default Productdetails;
