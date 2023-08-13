import React from "react";
import { useState } from "react";
import Editor, {loader} from "@monaco-editor/react";
import { constrainedEditor } from "constrained-editor-plugin";

// The editor receives the props onChange, language, code, and theme from its parent component, which is Landing.js.
// Every time the value in the code editor changes, we call the onChange handler that is present in the parent Landing component.
const CodeEditorWindow = ({ onChangeData, language, code, theme }) => {

    const [value,setValue] = useState(code || "");

    const editorChange = (value) => {
        setValue(value)
        onChangeData("code",value);
    };

    return(
        <div className="overlay w-full h-full overflow-hidden shadow-4xl  border-solid border border-white">
            <Editor
                theme={theme}
                height="90vh"
                width={`90vw`}
                language={language || "javascript"}
                value={value}
                defaultValue=""
                onChange={editorChange}
            />
        </div>
    );

};

export default CodeEditorWindow;