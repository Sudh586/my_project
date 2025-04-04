import React, { useEffect, useState } from 'react'

const Procfoot = () => {
    const[data , setData]=useState();
    const apicall=async()=>{
        const response= await fetch("http://localhost:3000/categories")
        const apidata= await response.json();
        const maindata= apidata.find((e)=> e.id === id)
        setData()
    }
    useEffect(()=>{
        apicall();
    },[])
  return (
    <>
      <div className='w-full bg-[#f0f0f5] flex flex-wrap '>
            <div className='w-full bg-[#f0f0f5] flex flex-wrap items-center'>
                <div className='w-[15%]'>
                <img src='/images/fssai_final_edss9i.avif' alt='' className='w-full p-5'/>
                </div>
                <div>
                    <h1 className='text-[12px] mt-2 text-gray-500'>License No. 12819019001328</h1>
                </div>
            </div>
      </div>
    </>
  )
}

export default Procfoot
