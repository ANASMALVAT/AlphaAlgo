import React from "react";
import { useSelector } from "react-redux";

const ConsoleRunButtons = ({runCode,showSolution}) => {

    const isRunning = useSelector((state) => state.alphaRunning.isRunning);
    function compileCode(runcode)  {
        runCode(runcode);
    }

    return (
        <>
            <div className="flex flex-row ">
                <button onClick={() => { compileCode(true)}} disabled={isRunning} className={` overflow-hidden w-24 rounded-sm  mr-2 flex flex-row items-center px-2 py-2 font-mono text-sm font-normal justify-center border border-gray-600 text-white  hover:border-[#4C5ADF]`}>
                    Run
                </button>
                <button onClick={() => { compileCode(false)}} disabled={isRunning} className={`overflow-hidden rounded-sm w-24 mr-2 flex flex-row items-center   px-2 py-2 font-mono text-sm font-normal justify-center border border-gray-600 text-white   hover:border-[#4C5ADF]`}>
                    Submit
                </button>
                <button onClick={() => { showSolution()}} className={`overflow-hidden rounded-sm w-24 mr-2 flex flex-row items-center  px-2 py-2 font-mono text-sm font-normal justify-center border border-gray-600 text-white   hover:border-[#4C5ADF]`}>
                    Solution
                </button>
            </div>
        </>
    )
}

export default ConsoleRunButtons;