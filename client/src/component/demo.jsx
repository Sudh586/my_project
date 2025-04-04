import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdStars } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { BsFilterLeft } from "react-icons/bs";
import { RxCaretDown } from "react-icons/rx";

const Cetapage = () => {
  const [alldata, setAlldata] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Search state

  const { id, name, tagline } = useParams();

  const indufoodapi = async () => {
    const response = await fetch("http://localhost:3000/categories");
    const data = await response.json();
    const fetchdata = data.find((category) => category.id === id);
    if (fetchdata) {
      setAlldata(fetchdata.items);
    } else {
      setAlldata([]);
    }
  };

  useEffect(() => {
    indufoodapi();
  }, [id]);

  // Filter items based on search query
  const filteredItems = alldata.filter((item) =>
    item.food_name.toLowerCase().includes(searchQuery.toLowerCase()) &&
  item.restaurant_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-[1440px] mx-auto mt-30 text-left">
      <h1 className="text-5xl font-extrabold capitalize ml-5">{name}</h1>
      <h1 className="text-[20px] text-gray-600 pt-5 font-semibold capitalize ml-5">
        {tagline}
      </h1>

      {/* Search Bar */}
      <div className="w-full flex gap-3 items-center my-8 ml-5">
        <input
          type="text"
          placeholder="Search Biryani..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-400 rounded-4xl px-4 py-2 w-[300px] text-[14px] outline-none shadow-md"
        />
        <button className="border border-gray-400 shadow-md rounded-4xl capitalize px-4 py-1 font-semibold text-[13px]">
          Filter <BsFilterLeft className="inline ml-2 text-[18px]" />
        </button>
        <button className="border border-gray-400 shadow-md rounded-4xl capitalize px-4 py-1 font-semibold text-[13px]">
          Sort by <RxCaretDown className="inline ml-2 text-[18px]" />
        </button>
        <button className="border border-gray-400 shadow-md rounded-4xl capitalize px-4 py-1 font-semibold text-[13px]">
          10 Mins Delivery
        </button>
      </div>

      {/* Display Filtered Items */}
      <div>
        {filteredItems.length > 0 ? (
          filteredItems.map((each, index) => (
            <div
              key={index}
              className="w-[360px] inline-flex flex-wrap hover:scale-95 duration-200 cursor-pointer relative"
            >
              <div className="max-w-full m-4 flex flex-wrap relative rounded-2xl mb-0">
                <img
                  src={`http://localhost:3000${each.image}`}
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent rounded-2xl">
                  <h1 className="text-[20px] font-extrabold text-left mt-9 ml-3 text-white">
                    Item at ₹{each.price}/-
                  </h1>
                </div>
              </div>
              <div className="w-full text-[17px] ml-8 mt-0">
                <h1 className="w-full text-[17px] font-bold mt-3">
                  {each.restaurant_name}
                </h1>
                <h1 className="w-full font-semibold text-[16px]">
                  <MdStars className="inline text-[#1e913d] mr-1 mb-1" />
                  {each.ratings}
                  <GoDotFill className="inline" />
                  {each.delivery_time}
                </h1>
                <h1 className="w-full font-normal mt-1 ml-0.5 text-gray-600 text-[16px]">
                  {each.food_name.length > 26
                    ? each.food_name.slice(0, 26) + "..."
                    : each.food_name}
                </h1>
                <h1 className="w-full font-normal ml-0.5 text-gray-600 mb-0 text-[16px]">
                  {each.area_name}
                </h1>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-xl font-semibold text-gray-500 ml-5">
            No results found
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cetapage;


























const [product, setProduct] = useState(null);
  const [biryaniMenu, setBiryaniMenu] = useState([]);
  const { id } = useParams();

  // Fetch product details
  const fetchProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/categories");
      const data = await response.json();
      
      // Find the category that contains the item with the given ID
      const category = data.find((category) =>
        category.items.some((item) => item.id === id)
      );

      if (category) {
        const selectedProduct = category.items.find((item) => item.id === id);
        setProduct(selectedProduct);
        setBiryaniMenu(selectedProduct.biryani || []); // Store biryani menu
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
