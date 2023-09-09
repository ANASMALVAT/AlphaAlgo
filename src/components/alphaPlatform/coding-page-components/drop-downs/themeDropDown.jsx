import React, { useEffect, useState } from "react";
import Select from "react-select";
import { customStyles } from "./styles/customCss";
import {  useDispatch, useSelector } from "react-redux";
import  {monacoThemes} from "../../../../data/themeOptions";
import { setTheme } from "../../../../redux/slices/dropDownSlice";


const ThemeDropdown = ({}) => {
  
  const dispatch = useDispatch();
  const dropdownValue = useSelector((state) => state.dropdownValues.dropdownValue);

  const setDropdownTheme = (theme) => {
    dispatch(setTheme(theme.value));
  }

  return (
    <div className="mr-2 ">
      <Select
        placeholder={`Select Theme`}
        options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
          label: themeName,
          value: themeId,
          key: themeId,
        }))}
        value={{label:dropdownValue.theme}}
        styles={customStyles}
        onChange={(theme) => setDropdownTheme(theme)}
      />
    </div>
  );
};

export default ThemeDropdown;