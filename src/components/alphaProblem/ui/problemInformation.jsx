import React from 'react'
import { Link } from 'react-router-dom';

import "./styles/problemInformation.css"
const ProblemInformation = () => {
    return (
    <>
       <div class="container h-40">
            <h1 class="header">Alpha Coding Questions.</h1>
            <div className=' flex'>
                <h2 className=' text-[white] text-[18px] font-light antialiased line-clamp-2 tracking-wide '>Crack </h2>
                <h2 className=' text-[#FACA15] text-[18px] font-light antialiased line-clamp-2 tracking-wide '> Your </h2>
                <h2 className=' text-[#FF8A4C] text-[18px] font-light antialiased line-clamp-2 tracking-wide '> Next </h2>
                <h2 className=' text-[#F05252] text-[18px] font-light antialiased line-clamp-2 tracking-wide '> Coding </h2>
                <h2 className=' text-[#9061F9] text-[18px] font-light antialiased line-clamp-2 tracking-wide '> Interview </h2>
            </div>
        </div>
    </>
    )
}

export default ProblemInformation;