import React, { Component } from 'react'
import "./styles/alphaGptWindowText.css"


const AlphaGptWindowText = ({data,type}) =>{
    return (
        <div className={` gpt-window-text flex-1 rounded-sm flex flex-row mb-4 bg-[#0e2b44]  w-[full] font-mono ${type === 'User' ? 'text-right'  : 'text-left'} border border-gray-700  items-center `}>
            <div className=' h-full m-1 w-10  rounded-sm  justify-center text-center border border-gray-600'>
                {type === 'Bot' 
                    ? <h1 className=" tracking-wide font-bold antialiased text-[#4C5ADF] text-4xl hover:duration-300 hover:scale-125">X</h1>
                    : <h1 className=" tracking-wide font-bold antialiased text-gray-300 text-4xl hover:duration-300 hover:scale-125">U</h1>
                }
            </div>
            <div className=' whitespace-pre-line text-data w-full  h-full p-4 text-left text-lg font-light tracking-tight text-[white] dark:text-white overflow-hidden'>
                {data}
            </div>
        </div>
    )
}
export default AlphaGptWindowText;