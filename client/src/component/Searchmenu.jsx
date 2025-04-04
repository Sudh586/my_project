import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BiSolidCaretUpCircle } from "react-icons/bi";
import { MdStars } from "react-icons/md";
import Header from "./Header";

const Searchmenu = () => {
  const { id } = useParams();
  const [alldata, setAlldata] = useState([]);
  const [allbir, setAllbir] = useState([]);
  const [allrol, setAllroll] = useState([]);
  const [allsal, setAllsal] = useState([]);
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState({});
  const searchthings = async () => {
    const res = await fetch("http://localhost:3000/categories");
    const data = await res.json();
    const itter = data.find((e) => e.items.some((items) => items.id === id));
    if (itter) {
      const fetcher = itter.items.find((items) => items.id === id);
      setAlldata(fetcher || []);
      setAllbir(fetcher.biryani || []);
      setAllroll(fetcher.rolls || []);
      setAllsal(fetcher.salads || []);
    }
  };
  useEffect(() => {
    searchthings();
  }, [id]);

  const navigate = useNavigate();
  const navi = () => {
    navigate(`/productdetail/${id}`);
  };
  const showmore = (e) => {
      setToggle((perv)=>({
        ...perv,
        [e]: !perv[e]
      }))
  };
  const filtermenu = allbir.filter(
    (e) =>

      e.name?.toLowerCase().includes(search.toLowerCase()) ||
      allrol.some((e) =>
        e.name?.toLowerCase().includes(search.toLowerCase())
      ) ||
      allsal.some((e) => e.name?.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <>
      <Header />
      <div className="w-[800px] mx-auto border-b border-gray-500 mt-5 flex flex-wrap justify-between px-5 items-center">
        <div className="w-[400px] flex  items-center py-3">
          <FaArrowLeft className="inline text-[20px] mr-5" onClick={navi} />
          <input
            type="search"
            placeholder="search in naizam"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className="w-[300px]">
          <h1 className="text-[16px] text-right">
            <FiSearch className="inline text-[20px]" />
          </h1></div>
      </div>
          <div className="w-[800px] mx-auto border-t border-gray-400/50 mt-10 flex flex-wrap">
            <div className="w-full flex flex-wrap items-center mt-10">
              <h1 className="w-full text-[16px] font-extrabold capitalize">
               {alldata.sector_bir}
              </h1>
              {filtermenu.map((each, index) => {
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
                        <div
                          className="w-full mb-1 text-[12px]"
                          onClick={() => showmore(index)}
                        >
                          {toggle[index]
                            ? each.description
                            : `${each.description.slice(0, 120) + "...more"}`}
                        </div>
                      </div>
                      <div className="w-[22%] rounded-2xl relative">
                        <img
                          src="/images/onebir.webp"
                          alt={allbir.name}
                          className="rounded-2xl"
                        />
                        <div className="w-[100%] absolute flex justify-center -bottom-5 left-0">
                          <button
                            type="button"
                            className="w-[70%] rounded-xl text-green-800 uppercase font-extrabold text-[20px] border border-gray-400/70 bg-white px-8 py-1 cursor-pointer hover:bg-gray-200 duration-200"
                          >
                            add
                          </button>
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

export default Searchmenu;
