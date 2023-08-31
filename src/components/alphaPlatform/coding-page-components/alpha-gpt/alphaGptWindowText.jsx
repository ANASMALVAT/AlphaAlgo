import React, { Component } from 'react'
import "./styles/alphaGptWindowText.css"
import { CodeBlock, dracula } from "react-code-blocks";


const AlphaGptWindowText = ({data,type}) =>{
    return (
        <div className={` gpt-window-text flex-1 rounded-md flex flex-row mb-4 bg-transparent  w-[full] font-mono ${type === 'User' ? 'text-right'  : 'text-left'} border border-gray-600  items-center `}>
            <div className=' h-full m-1 w-10  rounded-sm  justify-start  align-top  text-center border border-gray-600'>
                {type === 'Bot' 
                    ? <h1 className=" tracking-wide font-bold antialiased text-[#4C5ADF] text-4xl hover:duration-300 hover:scale-125">X</h1>
                    : <h1 className=" tracking-wide font-bold antialiased text-gray-300 text-4xl hover:duration-300 hover:scale-125">U</h1>
                }
            </div>
            <div className=' whitespace-pre-line text-data  w-full font-mono  h-full p-2 text-left text-[1rem] font-normal tracking-wide text-[white] dark:text-white overflow-hidden'>
                {data}
            </div>
        </div>
    )
}
export default AlphaGptWindowText;