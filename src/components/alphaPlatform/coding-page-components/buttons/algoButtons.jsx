import React from "react";
import { useDispatch } from "react-redux";
import { setDifferentEditor,setGPT,setConsole } from "../../../../redux/slices/alphaPlatformSlice";


const AlgoButtons = ({methodOne, methodTwo,methodThree,buttonOne,buttonTwo,buttonThree }) => {


  const dispatch = useDispatch();

  const openEditor = () => 
      {
          dispatch(setDifferentEditor({ editor: true, console: false, gpt: false, isConsoleGpt: false}))
      };

  const openConsole = () => 
      {
          dispatch(setConsole({ editor: false, console: true, gpt: false, isConsoleGpt: true}))
      };

  const openAlphaGPT = () => 
      {
          dispatch(setGPT({ editor: false, console: false, gpt: true, isConsoleGpt: true}))
      };

    return (
        <>
        <div className="flex flex-row ">
              <button onClick={openEditor} className={` overflow-hidden w-24 rounded-sm  mr-2 flex flex-row items-center px-2 py-2 font-mono text-sm font-normal justify-center border border-gray-600 text-white  hover:border-[#4C5ADF]`}>
                {buttonOne}
              </button>
              <button onClick={openConsole}  className={`overflow-hidden rounded-sm w-24 mr-2 flex flex-row items-center   px-2 py-2 font-mono text-sm font-normal justify-center border border-gray-600 text-white   hover:border-[#4C5ADF]`}>
                {buttonTwo}
              </button>
              <button onClick={openAlphaGPT} className={`overflow-hidden rounded-sm w-24 mr-2 flex flex-row items-center  px-2 py-2 font-mono text-sm font-normal justify-center border border-gray-600 text-white   hover:border-[#4C5ADF]`}>
                {buttonThree}
              </button>
        </div>
        </>
    )
}

export default AlgoButtons;