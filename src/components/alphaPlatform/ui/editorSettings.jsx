import React from "react";
import { useState } from "react";
import  Select  from 'react-select';
import 'react-dropdown/style.css';
import { customStyles } from '../styles/customCss';
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
            <div className="flex flex-col w-full h-full">

                <div className="flex flex-row justify-between items-center text-center mb-6">

                    <h1 name = "example" className="text-center items-center font-sans text-xl antialiased font-normal text-white "> 
                        White Board 
                    </h1>
                    <button className="w-44 font-mono text-md whitespace-nowrap break-keep bg-transparent text-white font-normal hover:text-white py-2 px-6 border border-[#07A7C3] rounded-sm" > White Board </button>

                </div>

                <div className="flex flex-row justify-between items-center text-center mb-6">

                    <h1 name = "example" className="text-center items-center  font-sans text-xl antialiased font-normal text-white ">
                        Font Size 
                    </h1>
                    <FontDropDown onSelectChange={onSelectChange} fontOptions={options}/>
                </div>

                <div className="flex flex-row justify-between items-center text-center mb-6">

                    <h1 name = "example" className="text-center items-center  font-sans text-xl antialiased font-normal text-white ">
                        Editor Theme 
                    </h1>
                    <ThemeDropdown handleThemeChange={handleThemeChange} theme={themeOptions}/>
                    </div>
            </div>
        </>
    )

}

export default EditorSetting;