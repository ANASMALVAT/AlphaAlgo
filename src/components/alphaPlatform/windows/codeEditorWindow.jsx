import React from "react";
import { useState } from "react";
import Editor, {loader} from "@monaco-editor/react";
import { constrainedEditor } from "constrained-editor-plugin";
import "../styles/codeEditorWindow.css"
import LanguageDropDown from "../drop-downs/languageDropDown";
import ThemeDropdown from "../drop-downs/themeDropDown";
// The editor receives the props onChange, language, code, and theme from its parent component, which is Landing.js.
// Every time the value in the code editor changes, we call the onChange handler that is present in the parent Landing component.
const CodeEditorWindow = ({ onChangeData, language, code, theme, themeOptions, onSelectChange,handleThemeChange  }) => {

    const [value,setValue] = useState(code || "");

    const editorChange = (value) => {
        setValue(value)
        onChangeData("code",value);
    };
    const editorOptions = {
        mouseWheelZoom: true,
        scrollBeyondLastLine: false,
        minimap: {
          enabled: true, // Set to true to enable the minimap
        },
      };

    return(
        <div  className=" flex flex-col  min-w-[300px] w-full h-[100%] overflow-hidden border-r border-[#30789e]">
            <div className=" flex flex-row mt-1 ml-1">
                <LanguageDropDown onSelectChange={onSelectChange}/>
                <ThemeDropdown handleThemeChange={handleThemeChange} theme={themeOptions}/>
            </div>
            <Editor
                theme={theme}
                height="100%"
                width={`100%`}
                language={language || "javascript"}
                value={value}
                defaultValue=""
                onChange={editorChange}
                options={editorOptions}
            />
        </div>
    );

};

export default CodeEditorWindow;