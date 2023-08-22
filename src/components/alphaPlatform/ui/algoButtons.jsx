import React from "react";

const AlgoButtons = ({methodOne, methodTwo,methodThree,buttonOne,buttonTwo,buttonThree }) => {
    return (
        <>
        <button onClick={methodOne} className={` overflow-hidden w-28 rounded-sm  mr-2 flex flex-row items-center   px-2 py-3 font-mono text-sm font-normal justify-center border border-[#1F2937] text-white hover:border hover:border-[#07A7C3]`}>
                {buttonOne}
              </button>
              <button onClick={methodTwo}  className={`overflow-hidden rounded-sm w-20 mr-2 flex flex-row items-center   px-2 py-3 font-mono text-sm font-normal justify-center border border-[#1F2937] text-white hover:border hover:border-[#07A7C3]`}>
                {buttonTwo}
              </button>
              <button onClick={methodThree} className={`overflow-hidden rounded-sm w-20 mr-2 flex flex-row items-center  px-2 py-3 font-mono text-sm font-normal justify-center border border-[#1F2937] text-white hover:border hover:border-[#07A7C3]`}>
                {buttonThree}
        </button>
        </>
    )
}

export default AlgoButtons;