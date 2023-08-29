import React, { Component } from 'react'

const ConsoleSlidingPaneOptions = ({openEditor, openConsole, openAlphaGPT}) => {

    return (
        <>
            <div className="flex flex-row items-center ">
                <h1 className="logo-name font-mono tracking-wide font-semibold antialiased text-white text-5xl">Alpha</h1>
                <h1 className="logo font-mono tracking-wide font-semibold antialiased text-[#4C5ADF] text-8xl hover:duration-300 hover:scale-125">X</h1>
                <h1 className="logo-name font-mono tracking-wide font-semibold antialiased text-white text-5xl">Algo</h1>
            </div>

           <div className="bg-algoblack justify-center flex flex-cols w-full p-4">
                <div>
                    <button onClick={openEditor} className={` overflow-hidden w-28 rounded-sm  mr-2 flex flex-row items-center   px-2 py-3 font-mono text-sm font-normal justify-center border border-[#6c7af4] text-white hover:border-b-4 hover:border-[#4C5ADF]`}>
                        Editor
                    </button>
                </div>
                <div>
                    <button onClick={openConsole}  className={`overflow-hidden rounded-sm w-20 mr-2 flex flex-row items-center   px-2 py-3 font-mono text-sm font-normal justify-center border border-[#6c7af4] text-white hover:border-b-4  hover:border-[#4C5ADF]`}>
                        Console
                    </button>
                </div>
                <div>
                    <button onClick={openAlphaGPT} className={`overflow-hidden rounded-sm w-20 mr-2 flex flex-row items-center  px-2 py-3 font-mono text-sm font-normal justify-center border border-[#6c7af4] text-white hover:border-b-4  hover:border-[#4C5ADF]`}>
                        AlphaGPT
                    </button>
                </div>
            </div>
        </>
    )
}

export default ConsoleSlidingPaneOptions;