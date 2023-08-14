import React from "react";
import { useState } from "react";
import Editor, {loader} from "@monaco-editor/react";
import { constrainedEditor } from "constrained-editor-plugin";
import "../styles/codeEditorWindow.css"
// The editor receives the props onChange, language, code, and theme from its parent component, which is Landing.js.
// Every time the value in the code editor changes, we call the onChange handler that is present in the parent Landing component.
const CodeEditorWindow = ({ onChangeData, language, code, theme }) => {

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
        <div  className=" p-6 min-w-[300px] w-full h-[100%] overflow-hidden shadow-4xl  border-solid border border-[#30789e]">
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