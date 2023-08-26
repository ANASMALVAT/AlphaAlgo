import React from "react";

const AlgoButtons = ({methodOne, methodTwo,methodThree,buttonOne,buttonTwo,buttonThree }) => {
    return (
        <>
              <button onClick={methodOne} className={` overflow-hidden w-28 rounded-sm  mr-2 flex flex-row items-center   px-2 py-3 font-mono text-sm font-normal justify-center border border-[#6c7af4] text-white hover:border-b-4 hover:border-[#4C5ADF]`}>
                {buttonOne}
              </button>
              <button onClick={methodTwo}  className={`overflow-hidden rounded-sm w-20 mr-2 flex flex-row items-center   px-2 py-3 font-mono text-sm font-normal justify-center border border-[#6c7af4] text-white hover:border-b-4  hover:border-[#4C5ADF]`}>
                {buttonTwo}
              </button>
              <button onClick={methodThree} className={`overflow-hidden rounded-sm w-20 mr-2 flex flex-row items-center  px-2 py-3 font-mono text-sm font-normal justify-center border border-[#6c7af4] text-white hover:border-b-4  hover:border-[#4C5ADF]`}>
                {buttonThree}
              </button>
        </>
    )
}

export default AlgoButtons;