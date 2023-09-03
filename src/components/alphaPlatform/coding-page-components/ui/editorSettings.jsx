import React from "react";
import 'react-dropdown/style.css';
import { setLanguage } from "../../../../redux/slices/dropDownSlice";
import ThemeDropdown from "../drop-downs/themeDropDown";
import FontDropDown from "../drop-downs/fontDropDown";
import SubmissionDropDown from "../drop-downs/submissionDropDown";
import {useDispatch} from  "react-redux"
import { Link } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import KeyboardIcon from '@mui/icons-material/Keyboard';



const EditorSetting = ({}) => 
{
    const dispatch = useDispatch();
    const setWhiteBoard = () => {
        dispatch(setLanguage({ id: 1, name: "text", label: "White Board", value: "text" }));
    }

    const label = { inputProps: { 'aria-label': 'Color switch demo' } };

    return (
        <>
            <div className="flex flex-col w-full h-full items-center">


                <div className="flex flex-row justify-between items-center text-center mt-6 ">
                        <Link to="/" >
                            <button  className={` overflow-hidden w-40 rounded-sm   flex flex-row items-center mb-2  px-2 py-2 font-mono text-sm font-normal justify-left border-2 border-[#4C5ADF] text-white hover:border-b-4 `}>
                                    <h1 className="tracking-wide font-bold mx-2 antialiased text-[#4C5ADF] text-[28px] hover:duration-500 hover:rotate-[900deg]">
                                        X
                                    </h1>
                                    <pre>
                                        Home
                                    </pre>
                            </button>
                        </Link>
                </div>

                <div className="flex flex-row justify-between items-center text-center mt-6 mb-6">
                    <Link to="/" >
                    <button  className={` overflow-hidden w-40 rounded-sm   flex flex-row items-center mb-2  px-2 py-2 font-mono text-sm font-normal justify-left border-2 border-[#4C5ADF] text-white hover:border-b-4 `}>
                            <MenuIcon className="mx-2"/>
                            <pre>
                                Problems
                            </pre>
                        </button>
                    </Link>
                </div>

                <div className="flex flex-row justify-between items-center text-center mb-6 ">
                <button onClick={setWhiteBoard} className={` overflow-hidden w-40 rounded-sm   flex flex-row items-center mb-2  px-2 py-2 font-mono text-sm font-normal justify-left border-2 border-[#4C5ADF] text-white hover:border-b-4 `}>
                        <KeyboardIcon className="mx-2"/>
                        <pre>
                            White Board         
                        </pre>
                    </button>
                </div> 

                <div className="flex flex-row justify-between items-center text-center mb-6">
                    <FontDropDown/>
                </div>

                <div className="flex flex-row justify-between items-center text-center mb-6">
                    <ThemeDropdown />
                </div>

                <div className="flex flex-row justify-between items-center text-center mb-6">
                    <SubmissionDropDown />
                </div>


            </div>
        </>
    )

}

export default EditorSetting;