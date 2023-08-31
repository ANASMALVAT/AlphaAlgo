import React from 'react'
import { setDifferentEditor,setGPT,setConsole } from "../../../../redux/slices/alphaPlatformSlice";
import LanguageDropDown from '../drop-downs/languageDropDown';

import { useDispatch } from "react-redux";

const ConsoleSlidingPaneOptions = () => {

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
           <div className="bg-algoblack flex flex-col justify-center items-center w-full p-4">
                <div> 
                    <button onClick={openEditor} className={` overflow-hidden w-44 rounded-sm   flex flex-row items-center mb-2  px-2 py-2 font-mono text-sm font-normal justify-center border-4 border-[#1F2937] text-white hover:border-b-4 hover:border-[#4C5ADF]`}>
                        Editor
                    </button>
                </div>
                <div>
                    <button onClick={openConsole}  className={`overflow-hidden rounded-sm w-44  flex flex-row items-center mb-2 px-2 py-2 font-mono text-sm font-normal justify-center border-4 border-[#1F2937] text-white hover:border-b-4  hover:border-[#4C5ADF]`}>
                        Console
                    </button>
                </div>
                <div>
                    <button onClick={openAlphaGPT} className={`overflow-hidden rounded-sm w-44 flex flex-row items-center mb-2 px-2 py-2 font-mono text-sm font-normal justify-center border-4 border-[#1F2937] text-white hover:border-b-4  hover:border-[#4C5ADF]`}>
                        AlphaGPT
                    </button>
                </div>

                <LanguageDropDown/>
            </div>
        </>
    )
}

export default ConsoleSlidingPaneOptions;