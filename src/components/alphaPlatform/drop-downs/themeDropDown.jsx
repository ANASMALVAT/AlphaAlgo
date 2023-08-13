import React from "react";
import Select from "react-select";
import { customStyles } from "../../../data/customCss";
import monacoThemes from "monaco-themes/themes/themelist";

const ThemeDropdown = ({ handleThemeChange, theme }) => {
  const scrollRef = React.useRef(null);

  return (
    <div className="mt-2">   
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