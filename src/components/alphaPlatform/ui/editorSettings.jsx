import React from "react";
import { useState } from "react";
import 'react-dropdown/style.css';
import ThemeDropdown from "../drop-downs/themeDropDown";
import FontDropDown from "../drop-downs/fontDropDown";


const EditorSetting = ({theme, themeOptions,handleThemeChange}) => 
{

    const [fontSize, setFontSize] = useState("")
    const options = [
        { value: '0.8x', label: '0.8x' },
        { value: '0.9x', label: '0.9x' },
        { value: '1x', label: '1x' },
        { value: '1.1x', label: '1.1x' },
        { value: '1.2x', label: '1.2x' },
        { value: '1.3x', label: '1.3x' },
        { value: '1.4x', label: '1.4x' },
    ]

    const onSelectChange = (fs) => {
            setFontSize(fs);
    }

    const label = { inputProps: { 'aria-label': 'Color switch demo' } };


    return (
        <>
            <div className="flex flex-col w-full h-full items-center">

                <div className="flex flex-row justify-between items-center text-center mb-6 mt-6">
                    <button className="w-44 font-mono text-md whitespace-nowrap break-keep bg-transparent text-white font-normal hover:text-white py-2 px-6 border border-[#4C5ADF] rounded-sm" > White Board </button>
                </div>

                <div className="flex flex-row justify-between items-center text-center mb-6">
                    <FontDropDown onSelectChange={onSelectChange} fontOptions={options}/>
                </div>

                <div className="flex flex-row justify-between items-center text-center mb-6">
                    <ThemeDropdown handleThemeChange={handleThemeChange} theme={themeOptions}/>
                    </div>
            </div>
        </>
    )

}

export default EditorSetting;