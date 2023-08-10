import React from "react";
import { useState } from "react";
import Editor, {loader} from "@monaco-editor/react";

// The editor receives the props onChange, language, code, and theme from its parent component, which is Landing.js.
// Every time the value in the code editor changes, we call the onChange handler that is present in the parent Landing component.
const CodeEditorWindow = ({ onChange, language, code, theme }) => {
    const [value,setValue] = useState(code || "");

    const editorChange = (value) => {
        setValue(value)
        onchange("code",value);
    };

    return(
        <div className="overlay rounded-xl overflow-hidden w-full h-full shadow-4xl ">
            <Editor
                theme={theme}
                height="90vh"
                width={`100%`}
                language={language || "javascript"}
                value={value}
                defaultValue="// some comment"
                onChange={editorChange}
                
            />
        </div>
    );

};

export default CodeEditorWindow;