import React, { useEffect, useState } from "react";
import { RxCaretDown } from "react-icons/rx";
const Grocery = () => {
  const [groty, setGroty] = useState([]);
  const[minigroty , setMinigroty]=useState([]);
  const[showmore , setShowmore]=useState(true)
  const[toggle , setToggle]=useState("show more")
  const groceryapi = async () => {
    const response = await fetch("http://localhost:3000/citynames");
    const data = await response.json();
    setGroty(data || []);
    setMinigroty(data.slice(0 , 11))
  };
  const show=()=>{
if(showmore){
    setMinigroty(groty),
    setShowmore(false)
    setToggle("show less")
}else{
    setMinigroty(groty.slice(0 , 11))
    setShowmore(true)
    setToggle("show more")
}
  }
  useEffect(() => {
    groceryapi();
  }, []);
  return (
    <>
      <div className="w-[1440px] mx-auto flex flex-wrap mt-10">
        <h1 className=" w-full text-2xl capitalize font-extrabold ml-4">
          Cities with grocery delivery
        </h1>
        <div className="w-full flex flex-wrap justify-between mt-3">
            {minigroty.map((name , index)=>{
return(<div key={index} className="w-[340px] rounded-xl py-3 bg-white border border-gray-400/60 mx-auto items-center my-2.5">
                <h1 className="text-center text-[13px] font-semibold">Order grocery delivery in {name.cityname}</h1>
</div>)
            })}
            <button onClick={show} type="button" className="w-[340px] rounded-xl py-3 bg-white border border-gray-400/60 mx-auto items-center my-2.5 text-center text-[13px] font-semibold capitalize">{toggle} <RxCaretDown className="inline text-[22px]"/></button>
        </div>
      </div>
    </>
  );
};

export default Grocery;
