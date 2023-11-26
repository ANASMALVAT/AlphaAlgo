import React from "react";
import ComponentTypeWriter from "./componentTypeWriter";
import { Link } from "react-router-dom";
import ComponentMainGrid from "./componentMainGrid";
import "./styles/componentMain.css"

const ComponentMain = () => 

{
    return (
        <>
            <div className=" h-[450px] w-full max-w-[1450px] m-auto min-w-screen flex flex-row flex-grow  bg-[#00182D] justify-center text-center ">
                <div className="w-full h-full absolute z-0 gap-0">
                    <div className=" div-container flex  w-full h-full gap-0 pt-4">
                        <ComponentMainGrid />
                    </div>
                </div>
                <div className=" alpha-info h-90 flex flex-col flex-grow  w-5/12 overflow-hidden text-left  z-10">
                    <div className=" alpha-info-detail flex flex-col text-start flex-grow pt-24 w-full p-2 z-10" >
                        <div className="plex-sans flex flex-row items-center mb-2 mt-4 z-10">
                            <h2 className="logo-name  tracking-wide font-normal antialiased text-white text-4xl">Alpha</h2>
                            <h2 className="tracking-wide font-bold antialiased text-[#4C5ADF] text-6xl hover:duration-200 hover:scale-125">X</h2>
                            <h2 className="logo-name  tracking-wide font-normal antialiased text-white text-4xl">Algo</h2>
                        </div>
                        <h2 className=" info mt-1 font-light text-lg text-gray-300 z-10">
                            Everything you need, just one click away.
                        </h2>
                        <h2 className=" info mt-1 font-light text-lg  text-gray-300 z-10">
                            Your definitive guide to crack coding interviews.
                        </h2>
                        
                        <Link to="/problems">
                        <button className={`what-button overflow-hidden mt-8 flex flex-row items-center text-center align-middle  rounded-sm px-4  font-mono font-normal justify-center text-white border bg-[#4C5ADF] hover:duration-300 border-b-8 border-[#4C5ADF]`}>
                            <h2 className=" text-xl">Explore</h2> 
                            <h1 className="ml-2 logo-com-3 font-bold antialiased text-[#2D33CA] hover:duration-300 hover:scale-125"> X </h1>
                        </button>   
                        </Link>
                    </div>
                </div>

                <div className="alpha-window w-7/12 h-60 m-auto flex justify-center align-middle overflow-visible z-10">
                    <ComponentTypeWriter/>
                </div>
            </div>
        </>
    )
}

export default ComponentMain;