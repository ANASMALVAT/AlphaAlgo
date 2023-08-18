import React from "react";
import Select from "react-select";
import { customStyles } from "../styles/customCss";
// import monacoThemes from "monaco-themes/themes/themelist";


const ThemeDropdown = ({ handleThemeChange, theme }) => {
  const scrollRef = React.useRef(null);
  
  const monacoThemes = {
    active4d: "Active4D",
    "all-hallows-eve": "All Hallows Eve",
    amy: "Amy",
    blackboard: "Blackboard",
    "brilliance-black": "Brilliance Black",
    "brilliance-dull": "Brilliance Dull",
    "oceanic-next": "Oceanic Next",
  };

  return (
    <div className="mr-2 ">   
    <Select
      placeholder={`Select Theme`}
      options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
        label: themeName,
        value: themeId,
        key: themeId,
      }))}
      value={theme}
      styles={customStyles}
      onChange={handleThemeChange}
    />
    </div>
 
  );
};

export default ThemeDropdown;