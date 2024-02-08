import React from 'react'
import { Link } from 'react-router-dom';

import "./styles/problemInformation.css"
const ProblemInformation = () => {
    return (
    <>
       <div class="container h-40">
            <h1 class="header">Alpha Problems.</h1>
            <div className=' flex'>
                <h2 className=' text-[20px] font-light text-gray-300  '>Your First Step To Crack Your Next coding Interview. </h2>
                {/* <h2 className=' text-[#9061F9] text-[18px] font-light antialiased line-clamp-2 tracking-wide '> Your &nbsp;</h2>
                <h2 className=' text-[#9061F9] text-[18px] font-light antialiased line-clamp-2 tracking-wide '> Next &nbsp;</h2>
                <h2 className=' text-[#9061F9] text-[18px] font-light antialiased line-clamp-2 tracking-wide '> Coding &nbsp;</h2>
                <h2 className=' text-[#9061F9] text-[18px] font-light antialiased line-clamp-2 tracking-wide '> Interview. </h2> */}
            </div>
        </div>
    </>
    )
}

export default ProblemInformation;