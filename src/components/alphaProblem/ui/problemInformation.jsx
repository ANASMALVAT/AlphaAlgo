import React from 'react'
import { Link } from 'react-router-dom';

import "./styles/problemInformation.css"
const ProblemInformation = () => {
    return (
    <>
       <div class="container">
            <h1 class="header">Coding Interview Questions!</h1>
            <div class="button-container flex justify-center text-center align-middle">
                <Link to="/purchase">
                    <button className={`what-button overflow-hidden mt-8 mb-4 flex flex-row items-center text-center align-middle  rounded-sm px-6  font-mono font-normal justify-center text-white border bg-[#4C5ADF] hover:duration-300 border-b-8 border-[#4C5ADF]`}>
                        Purchase 
                        <h1 className="ml-2 logo-com-3 font-bold  antialiased text-[#2D33CA] hover:duration-300 hover:scale-125"> X </h1>
                    </button>   
                </Link>
            </div>
        </div>
    </>
    )
}

export default ProblemInformation;