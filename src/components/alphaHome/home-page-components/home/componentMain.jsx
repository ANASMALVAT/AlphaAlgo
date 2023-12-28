import React from "react";
import ComponentTypeWriter from "./componentTypeWriter";
import { Link } from "react-router-dom";
import ComponentMainGrid from "./componentMainGrid";
import "./styles/componentMain.css"

const ComponentMain = () => 

{
    return (
        <>
            <div className=" h-[450px] w-full max-w-[1450px] m-auto min-w-screen flex flex-row flex-grow  text-algoXcolor justify-center text-center ">
                <div className="w-full h-full absolute gap-0">
                    <div className=" div-container flex  w-full h-full gap-0 pt-4">
                        <ComponentMainGrid />
                    </div>
                </div>
                <div className=" alpha-info h-90 flex flex-col flex-grow  w-5/12 overflow-hidden text-left ">
                    <div className=" alpha-info-detail flex flex-col text-start flex-grow pt-24 w-full p-2 " >
                        <div className="plex-sans flex flex-row items-center mb-2 mt-4">
                            <h2 className="logo-name  tracking-wide font-normal antialiased text-white text-4xl">Alpha</h2>
                            <h2 className="tracking-wide font-bold antialiased  text-algoXcolor text-6xl hover:duration-200 hover:scale-125">X</h2>
                            <h2 className="logo-name  tracking-wide font-normal antialiased text-white text-4xl">Algo</h2>
                        </div>
                        <h2 className=" info mt-1 font-light text-lg text-gray-300 ">
                            Everything you need, just one click away.
                        </h2>
                        <h2 className=" info mt-1 font-light text-lg  text-gray-300 ">
                            Your definitive guide to crack coding interviews.
                        </h2>
                        
                        <Link to="/problems" className="h-[50px] mt-8">
                            <button className={`what-button  h-[50px] max-w-[175px] min-w-[175px] overflow-hidden  flex flex-row items-center text-center align-middle  rounded-sm  font-mono font-normal justify-center text-white border bg-[#392A6D] hover:duration-300 border-none`}>
                                <h1 className="  font-normal  text-xl text-[#F5F5F5] "> Explore </h1>
                                <h2 className="ml-1  font-semibold  text-2xl text-[#7d83d3] "> X </h2>
                            </button>   
                        </Link>
                    </div>
                </div>

                <div className="alpha-window w-7/12 h-60 m-auto flex justify-center align-middle overflow-visible ">
                    <ComponentTypeWriter/>
                </div>
            </div>
        </>
    )
}

export default ComponentMain;