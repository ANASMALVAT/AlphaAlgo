import React from "react";
import "./styles/componentOne.css"
import { Link } from "react-router-dom";

import ComponentTwo from "./componentTwo";
const ComponentOne = () => 
{
    return (
        <>
            <div className=" h-[450px] w-full  min-w-screen flex flex-row flex-grow  bg-[#00182D] justify-center text-center ">

                <div className=" alpha-info h-90 flex flex-col flex-grow  w-6/12 overflow-hidden text-left  ">

                    <div className=" alpha-info-detail flex flex-col text-start flex-grow pt-20 w-full max-w-[1400px] p-2">

                        <div className="plex-sans flex flex-row items-center mb-2 mt-4">
                            <h1 className="logo-name  tracking-wide font-normal antialiased text-white text-5xl">Alpha</h1>
                            <h1 className="logo  tracking-wide font-bold antialiased text-[#4C5ADF] text-8xl hover:duration-300 hover:scale-125">X</h1>
                            <h1 className="logo-name  tracking-wide font-normal antialiased text-white text-5xl">Algo</h1>
                        </div>

                        <p className="tracking-wide mt-1 text-white text-md font-normal selection:">
                            Your Definitive Guide For Cracking Coding Interviews.
                        </p>

                        <p className="tracking-wide text-white text-md mt-1 font-normal ">
                            20,000 Hours Devoted to Perfect Problem Solving for Coding Interviews.
                        </p>
                        <Link to="/problems">
                            <button  className={`alpha-info-button overflow-hidden mt-8 w-72  mr-2 flex flex-row items-center rounded-sm px-6 py-4 font-mono font-normal justify-center hover:duration-100 text-xl text-white bg-[#4C5ADF] border-b-8 border-[#2d33ca]`}>
                                Explore Problems
                            </button>
                        </Link>
                    </div>

                </div>
                    <div className="alpha-window w-6/12 h-60 m-auto flex justify-center align-middle overflow-visible">
                        <ComponentTwo/>
                    </div>
            </div>
        </>
    )
}

export default ComponentOne;