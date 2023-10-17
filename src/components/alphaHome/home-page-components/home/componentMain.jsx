import React from "react";
import ComponentTypeWriter from "./componentTypeWriter";
import { Link } from "react-router-dom";
import "./styles/componentOne.css"



const ComponentMain = () => 

{
    return (
        <>
            <div className=" h-[450px] w-full  min-w-screen flex flex-row flex-grow  bg-[#00182D] justify-center text-center ">

                <div className=" alpha-info h-90 flex flex-col flex-grow  w-6/12 overflow-hidden text-left  ">

                    <div className=" alpha-info-detail flex flex-col text-start flex-grow pt-20 w-full max-w-[1400px] p-2">

                        <div className="plex-sans flex flex-row items-center mb-2 mt-4">
                            <h1 className="logo-name  tracking-wide font-normal antialiased text-white text-5xl">Alpha</h1>
                            <h1 className="tracking-wide font-bold antialiased text-[#4C5ADF] text-8xl hover:duration-200 hover:scale-125">X</h1>
                            <h1 className="logo-name  tracking-wide font-normal antialiased text-white text-5xl">Algo</h1>
                        </div>

                        <p className=" mt-1 font-normal text-lg text-gray-300">
                            Your definitive guide for cracking coding interviews.
                        </p>

                        <p className="mt-1 font-normal text-lg text-gray-300">
                            20,000 Hours devoted to perfect problem solving for coding interviews.
                        </p>
                        <Link to="/purchase">
                            <button className={`what-button overflow-hidden mt-8 mb-4 flex flex-row items-center text-center align-middle  rounded-sm px-6  font-mono font-normal justify-center text-white border bg-[#4C5ADF] hover:duration-300 border-b-8 border-[#4C5ADF]`}>
                                Purchase 
                                <h1 className="ml-2 logo-com-3 font-bold  antialiased text-[#2D33CA] hover:duration-300 hover:scale-125"> X </h1>
                            </button>   
                        </Link>
                    </div>

                </div>
                    <div className="alpha-window w-6/12 h-60 m-auto flex justify-center align-middle overflow-visible">
                        <ComponentTypeWriter/>
                    </div>
            </div>
        </>
    )
}

export default ComponentMain;