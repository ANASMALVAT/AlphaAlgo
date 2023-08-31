import React, { useEffect, useState } from "react";
import Select from "react-select";
import { customStyles } from "./styles/customCss";
import {  useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../../redux/slices/dropDownSlice";


const ThemeDropdown = ({}) => {
  
  const monacoThemes = {
    active4d: "Active4D",
    "all-hallows-eve": "All Hallows Eve",
    amy: "Amy",
    blackboard: "Blackboard",
    "brilliance-black": "Brilliance Black",
    "brilliance-dull": "Brilliance Dull",
    "oceanic-next": "Oceanic Next",
  };

  const dispatch = useDispatch();
  const dropdownValue = useSelector((state) => state.dropdownValues.dropdownValue);
  const [currentTheme,setCurrentTheme]  = useState(dropdownValue.theme);

  const setDropdownTheme = (theme) => {
    dispatch(setTheme(theme.value));
  }

  useEffect(()=>{
    console.log(dropdownValue.theme);
    setCurrentTheme(dropdownValue.theme);
  },[dropdownValue.theme])


  return (
    <div className="mr-2 ">

      <Select
        placeholder={`Select Theme`}
        options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
          label: themeName,
          value: themeId,
          key: themeId,
        }))}
        value={{label:currentTheme}}
        styles={customStyles}
        onChange={(theme) => setDropdownTheme(theme)}
      />
    </div>
 
  );
};

export default ThemeDropdown;