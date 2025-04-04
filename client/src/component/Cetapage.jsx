import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { MdStars } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { BsFilterLeft } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Header from "./Header";
import Fotter from "./Fotter";
const Cetapage = () => {
  const [alldata, setAlldata] = useState([]);
  const [search, setSearch] = useState("");
  const [suggesstion, setSuggesstion] = useState([]);
  const { id, name, tagline, } = useParams();
  const[cheack , setCheack]=useState("relevance (default)");
  const[active , setActive]=useState(false)
  const[filhead , setFilhead]=useState("sort")
  // const[decheack , setDecheack]=useState( <FaDotCircle className="text-[#fe4f05] inline mr-2" />);
  const cheacker=(e)=>{
    setCheack(e)
    setActive(true)
    // setDecheack(<FaRegCircle className=" inline mr-2" />)
  }
  const filcat=(e)=>{
      setFilhead(e)
  }
  const [modal, setModal] = useState(false);
  const togglebutton = () => {
    setModal(!modal);
    setCheack("relevance (default)")
    setActive(false)
  };
  const stop = (e) => {
    e.stopPropagation();
  };
  const indufoodapi = async () => {
    const response = await fetch("http://localhost:3000/categories");
    const data = await response.json();
    const fetchdata = data.find((category) => category.id === id);
    console.log(fetchdata)
    if (fetchdata) {
      setAlldata(fetchdata.items);
    } else {
      setAlldata([]);
    }
  };

  useEffect(() => {
    indufoodapi();
  }, []);

  console.log(id, name);
  const filterdata = alldata.filter(
    (item) =>
      item.food_name?.toLowerCase().includes(search.toLowerCase()) ||
      item.restaurant_name?.toLowerCase().includes(search.toLowerCase())
  );
  
  // const sugest=()=>{
  //   if(setSearch.length>0){
  //     const sugest= alldata.filter((ek)=> ek.food_name.toLowerCase().starsWith(setSearch.toLowerCase()))
  //     setSuggesstion(sugest)
  //   }else{setSearch([])}
  // }
  const procfil=[
    {
      name:"sort"
    },
    {
      name:"10 Mins Delivery"
    },
    {
      name:"Veg/Non-Veg"
    },
    {
      name:"Ratings"
    },
    {
      name:"Delivery Time"
    },
    {
      name:"Cost For Two"
    },
  ]
  const sortby=[
    {
      name:"relevance (default)"
    },
    {
      name:"delivery time"
    },
    {
      name:"rating"
    },
    {
      name:"Cost: Low to High"
    },
    {
      name:"Cost: high to low"
    }
  ]

  return (
    <>
      <div>
        {modal ? (
          <div
            onClick={togglebutton}
            className="black-overlay w-full h-full fixed z-20 flex justify-center items-center duration-1000"
          >
            <div
              onClick={stop}
              className="bg-white rounded-2xl w-[1000px] h-[500px] absolute  "
            >
              <div className="w-full text-left flex flex-wrap  ">
                <div className="w-full border-b-1 border-gray-300/60 font-bold text-2xl text-gray-600">
                  {" "}
                  <h1 className="mt-5 mb-3 px-5">Filter</h1>
                </div>
                <div className="w-full flex h-[360px]">
                  <div className="w-[100%] flex flex-wrap  border-r-1 border-gray-300/60">
                    <ul className=" w-[100%] text-left text-[16px] text-gray-600 font-semibold ">
                      {procfil.map((each , index)=>{
                        return( <li key={index} className="w-full flex px-8 py-3" onClick={()=> filcat(each.name)}>
                        <h1>{each.name}</h1>  
                          {filhead === each.name ?  <div className="w-[70%] flex flex-wrap ">
                    <div className="w-full">
                    <div className=" px-8 py-5">
                      <h1>sort by</h1>
                    </div>
                    <div>
                    <ul  className=" text-left text-[14px] text-gray-600 font-medium">
                      {sortby.map((each , index)=>{
                          return(<li key={index} className="w-full  px-8 mb-2" onClick={()=> cheacker(each.name)}>
                        <h1 className="item-center">
                          {cheack=== each.name ?  <FaDotCircle className="text-[#fe4f05] inline mr-2" />:<FaRegCircle className=" inline mr-2" /> }
                          {each.name}
                        </h1>
                      </li>)
                      })}
                      
                    </ul>
                    </div>
                    </div>
                  </div>:""}
                      </li>
                  
                    )
                      })}
                     
                      
                    </ul>
                  </div>
                 
                </div>
                {active ? <div className="w-full flex justify-end items-center h-[80px] shadow-[4px_0px_10px_rgba(0,0,0,0.2)]">
                  <h1 className=" w-[150px] mx-3 text-[20px] font-semibold text-[#fe4f05]">Clear Filters</h1>
                  <button type="button" className=" w-[200px] mx-3 text-[20px] font-semibold rounded-2xl text-white py-3 capitalize bg-[#fe4f05] text-center">active</button>
                </div>:""}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <Header />
      <div className="w-[1440px] mx-auto mt-20 text-left z-0 ">
        <h1 className="text-5xl font-extrabold capitalize ml-5">{name}</h1>
        <h1 className=" text-[20px] text-gray-600 pt-5 font-semibold capitalize ml-5">
          {tagline}
        </h1>
        <div className="w-full flex gap-3 items-center my-8 ml-5 relative ">
          <input
            type="search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            className=" w-[300px] border border-gray-400 shadow-[0_4px_10px_rgba(0,0,0,0.2)] rounded-4xl capitalize text-left px-4 py-2 font-semibold text-[13px]"
            placeholder={`search ${name}`}
          />

          <button
            onClick={togglebutton}
            className="  border border-gray-400 shadow-[0_4px_10px_rgba(0,0,0,0.2)] rounded-4xl capitalize text-center px-4 py-1 font-semibold text-[13px]"
          >
            filter <TbAdjustmentsHorizontal className="inline ml-2 text-[18px]" />
          </button>

          <button className="  border border-gray-400 shadow-[0_4px_10px_rgba(0,0,0,0.2)] rounded-4xl capitalize text-center px-4 py-1 font-semibold text-[13px]">
            sort by <RxCaretDown className="inline ml-2 text-[18px]" />
          </button>
          <button className="  border border-gray-400 shadow-[0_4px_10px_rgba(0,0,0,0.2)] rounded-4xl capitalize text-center px-4 py-1 font-semibold text-[13px]">
            10 Mins Delivery
          </button>

        </div>
            <div className="w-full">
              <h1 className="text-[22px] px-4 font-bold capitalize">{alldata.length} resturants to explore</h1>
            </div>
        <div>
          {filterdata.map((each, index) => {
            return (
              <>
              <NavLink to={`/productdetail/${each.id}`}>
                <div
                  key={index}
                  className="w-[360px] inline-flex flex-wrap  hover:scale-95 duration-200 cursor-pointer relative"
                >
                  <div className="max-w-full m-4 flex flex-wrap relative rounded-2xl mb-0">
                    <img
                      src={`http://localhost:3000${each.image}`}
                      alt=""
                      className=" w-full rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent rounded-2xl">
                      <h1 className=" text-[20px] font-extrabold text-left mt-9 ml-3 text-white">
                        Item at ₹{each.price}/-{" "}
                      </h1>
                    </div>
                  </div>
                  <div className="w-full text-[17px] ml-8 mt-0">
                    <div>
                      <h1 className="w-full text-[17px] font-bold mt-3 ">
                        {each.restaurant_name}
                      </h1>
                    </div>
                    <div className="flex items-center mt-1 ">
                      <h1 className=" w-full font-semibold text-[16px]">
                        <MdStars className="inline text-[#1e913d] mr-1 mb-1" />
                        {each.ratings}
                        <GoDotFill className="inline" />
                        {each.delivery_time}
                      </h1>
                    </div>
                    <div className="flex items-center ">
                      <h1 className=" w-full font-normal mt-1 ml-0.5 text-gray-600 text-[16px]">
                        {each.food_name 
                          ? each.food_name.slice(0, 26) + "..."
                          : ""}
                      </h1>
                    </div>
                    <div className="flex items-center ">
                      <h1 className=" w-full font-normal ml-0.5 text-gray-600 mb-0 text-[16px]">
                        {each.area_name}
                      </h1>
                    </div>
                  </div>
                </div>
                </NavLink>
              </>
            );
          })}
        </div>
      </div>
      <Fotter />
    </>
  );
};

export default Cetapage;
