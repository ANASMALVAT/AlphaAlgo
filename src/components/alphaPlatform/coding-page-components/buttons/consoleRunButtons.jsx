import React from "react";

const ConsoleRunButtons = ({methodOne, methodTwo,methodThree,buttonOne,buttonTwo,buttonThree }) => {

    return (
        <>
            <div className="flex flex-row ">
                <button onClick={methodOne} className={` overflow-hidden w-24 rounded-sm  mr-2 flex flex-row items-center px-2 py-2 font-mono text-sm font-normal justify-center border border-gray-600 text-white  hover:border-[#4C5ADF]`}>
                    {buttonOne}
                </button>
                <button onClick={methodTwo}  className={`overflow-hidden rounded-sm w-24 mr-2 flex flex-row items-center   px-2 py-2 font-mono text-sm font-normal justify-center border border-gray-600 text-white   hover:border-[#4C5ADF]`}>
                    {buttonTwo}
                </button>
                <button onClick={methodThree} className={`overflow-hidden rounded-sm w-24 mr-2 flex flex-row items-center  px-2 py-2 font-mono text-sm font-normal justify-center border border-gray-600 text-white   hover:border-[#4C5ADF]`}>
                    {buttonThree}
                </button>
            </div>
        </>
    )
}

export default ConsoleRunButtons;