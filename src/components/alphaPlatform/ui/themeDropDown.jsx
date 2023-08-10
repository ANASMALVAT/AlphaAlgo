import React from "react";
import Select from "react-select";
import { customStyles } from "../../../data/customCss";
import monacoThemes from "monaco-themes/themes/themelist";

const ThemeDropdown = ({ handleThemeChange, theme }) => {
  const scrollRef = React.useRef(null);

  return (
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
  );
};

export default ThemeDropdown;