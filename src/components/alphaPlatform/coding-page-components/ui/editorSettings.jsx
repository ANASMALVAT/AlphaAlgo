import React from "react";
import 'react-dropdown/style.css';
import { setLanguage } from "../../../../redux/slices/dropDownSlice";
import ThemeDropdown from "../drop-downs/themeDropDown";
import FontDropDown from "../drop-downs/fontDropDown";
import SubmissionDropDown from "../drop-downs/submissionDropDown";
import {useDispatch} from  "react-redux"
import { Link } from "react-router-dom";
import "./styles/editorSettings.css"



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

                <div className="flex flex-row justify-between items-center text-center mb-6">
                    <FontDropDown/>
                </div>

                <div className="flex flex-row justify-between items-center text-center mb-6">
                    <ThemeDropdown />
                </div>

                <div className="flex flex-row justify-between items-center text-center mb-6">
                    <SubmissionDropDown />
                </div>

                <div className="editor-button flex flex-row justify-between items-center text-center mb-6 ">
                    <button onClick={setWhiteBoard} className={` mb-4 bg-[#4C5ADF] overflow-hidden w-40 rounded-sm   flex flex-row items-center   px-2 py-2 font-mono text-sm font-normal justify-center  text-white hover:opacity-100 opacity-80`}>
                        White Board 
                    </button>
                </div> 

            </div>
        </>
    )

}

export default EditorSetting;