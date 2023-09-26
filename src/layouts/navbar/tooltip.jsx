import React, { Component } from 'react'
import "./styles/tooltip.css"
import { Link } from 'react-router-dom';
const ToolTip = () => {
    return <>    
            <div className="flex flex-col items-center h-full w-full rounded-sm">
                <div class="border-t-[0px] border-l-[10px] border-r-[10px] border-b-[10px] border-transparent border-b-[#F5F5F5]">
                </div>
                <div className=" flex h-full  flex-grow justify-evenly  flex-wrap w-full rounded-md bg-[#F5F5F5]">
                    <Link to='/problems' className='w-[47%] '>
                        <div className=" product-item  flex flex-col w-full justify-start p-3 mt-2 h-20 items-start rounded-[0.25rem] ">
                            <h1 className='font-bold text-xl'>AlphaX</h1>
                            <p className='text-p'>crack the next interview</p>
                        </div>
                    </Link>
                    <Link to='/' className='w-[47%] '>
                        <div className=" product-item  flex flex-col w-full justify-start p-3 mt-2 h-20 items-start rounded-[0.25rem] ">
                            <h1 className='font-bold text-xl'>Xblogs</h1>
                            <p className='text-p'>prepare for intreview</p>
                        </div>
                    </Link>
                </div>
            </div>
    </>

}

export default ToolTip;