import React, { Component } from 'react'
import "./styles/tooltip.css"
import { Link } from 'react-router-dom';
const ToolTip = () => {
    return <>    
            <div className="flex flex-col items-left   h-full w-full rounded-sm">
                <div class=" relative border-t-[0px] ml-4 border-l-[10px] border-r-[10px] border-b-[10px] w-4 border-transparent border-b-[#EDF2F7]"></div>

                <div className=" flex flex-col h-full  product-container flex-grow gap-2 p-2 flex-wrap w-full rounded-md bg-[#EDF2F7]">
                    <Link to='/problems' className='product-item-problems-link w-[100%] mt-2   rounded  bg-algoblack '>
                        <div className=" text-zinc-50 product-item-problems  flex flex-col w-full justify-start p-3  h-20 items-start rounded-[0.25rem] border-none ">
                            <h1 className=' text-xl'>AlphaX</h1>
                            <p className='text-p'>crack the next interview</p>
                        </div>
                    </Link>
                
                    {
                    /* <Link to='/' className='product-xblogs-link w-[100%]'>
                        <div className=" product-xblogs flex flex-col w-full justify-start p-3  h-20 items-start rounded-[0.25rem] border-none ">
                            <h1 className='font-bold text-xl'>Xblogs</h1>
                            <p className='text-p'>prepare for intreview</p>
                        </div>
                    </Link> */
                    }
                </div>
            </div>
    </>

}

export default ToolTip;