import React from 'react'
import { setDifferentEditor,setConsole } from "../../../../redux/slices/alphaPlatformSlice";
import LanguageDropDown from '../drop-downs/languageDropDown';

import { useDispatch } from "react-redux";

const ConsoleSlidingPaneOptions = () => {

    const dispatch = useDispatch();
 

    const openEditor = () => 
        {
            dispatch(setDifferentEditor({ editor: true, console: false}))
        };

    const openConsole = () => 
        {
            dispatch(setConsole({ editor: false, console: true}))
        };

    return (
        <>
           <div className="bg-algoblack flex flex-col justify-center items-center w-full p-4">
                <div> 
                    <button onClick={openEditor} className={` overflow-hidden w-44 rounded-sm   flex flex-row items-center mb-2  px-2 py-2 font-mono text-sm font-normal justify-center border-4 border-algoXcolor text-white hover:border-b-4 hover:border-[#F5F5F5]`}>
                        Editor
                    </button>
                </div>
                <div>
                    <button onClick={openConsole}  className={`overflow-hidden rounded-sm w-44  flex flex-row items-center mb-2 px-2 py-2 font-mono text-sm font-normal justify-center border-4 border-algoXcolor text-white hover:border-b-4  hover:border-[#F5F5F5]`}>
                        Console
                    </button>
                </div>
                <LanguageDropDown/>
            </div>
        </>
    )
}

export default ConsoleSlidingPaneOptions;