import React from "react";
import { useState, useRef, useEffect } from "react";
import Editor, {loader} from "@monaco-editor/react";
import "../styles/codeEditorWindow.css"
import LanguageDropDown from "../drop-downs/languageDropDown";
import SettingsIcon from '@mui/icons-material/Settings';
import RestoreIcon from '@mui/icons-material/Restore';
import SettingSlidingPane from "../ui/settingSlidingPane";
import "../styles/codeEditorWindow.css";


const CodeEditorWindow = ({ onChangeData, language, code, theme, themeOptions, onSelectChange,handleThemeChange  }) => {

    const [value,setValue] = useState(code || "");
    const [initialValue, setInitialValue] = useState(code || ""); // New state variable
    // const [whiteBoard,setBoard] = useState("");
    const [fontSize,setFontSize] = useState("18px");
    const [settingPane,setSettingPane] = useState(false);
    


    const editorRef = useRef(null);

    const closePane = () => {
        setSettingPane(false);
    }

    const openPane = () => {
        setSettingPane(true);
    }

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    useEffect(() => {
        setInitialValue(code); // Update initial value when prop 'code' 
    }, []);


    const editorChange = (value) => {
        setValue(value)
        onChangeData("code",value);
    };

    const handleRestore = () => {
        setValue(initialValue); 
        onChangeData("code",value);
        editorRef.current.setValue(initialValue); // Also update the editor content
    };

        // Resize  observer issue of Code Editor
        const OriginalResizeObserver = window.ResizeObserver;

        // Create a new ResizeObserver constructor
        window.ResizeObserver = function (callback) {
        const wrappedCallback = (entries, observer) => {
            window.requestAnimationFrame(() => {
            callback(entries, observer);
            });
        };

        // Create an instance of the original ResizeObserver
        // with the wrapped callback
        return new OriginalResizeObserver(wrappedCallback);
        };

        // Copy over static methods, if any
        for (let staticMethod in OriginalResizeObserver) {
            if (OriginalResizeObserver.hasOwnProperty(staticMethod)) {
                window.ResizeObserver[staticMethod] = OriginalResizeObserver[staticMethod];
            }
        }




    return(
    <>
        < SettingSlidingPane isOpen={settingPane} onRequestClose={closePane} theme={theme} themeOptions={themeOptions} handleThemeChange={handleThemeChange}/>

        <div className="  code-editor flex flex-col w-full border-4 border-[#1f2937]">
            
            <div className=" flex flex-row justify-between  rounded-sm border-4 m-1 border-[#1f2937] h-14 ">

                <div className=" buttons flex  text-center align-center rounded-sm ">

                    <button onClick={handleRestore}  className={`button-disappear overflow-hidden mr-2 h-12  flex flex-row items-center   border-t-4  border-b-4 border-[#4C5ADF] rounded-sm px-4 py-2 font-mono text-sm font-normal text-white ${false ? 'bg-[#1C283B]' : 'bg-[#12151D]'}`}>
                        <RestoreIcon style={{  fontSize: '26px',color:"purple", color:"white",marginRight:"4px"}}/>
                    </button>

                    <button  onClick={openPane} className={`  overflow-hidden mr-2 flex h-12 flex-row items-center   border-b-4  border-t-4  border-[#4C5ADF] rounded-sm px-4 py-2 font-mono text-sm font-normal text-white ${false ? 'bg-[#1C283B]' : 'bg-[#12151D]'}`}>
                        <SettingsIcon style={{  fontSize: '26px',color:"purple", color:"white",marginRight:"4px"}}/>
                    </button>

                </div>

                <div className="flex flex-row text-center overflow-hidden items-center h-full w-20 justify-center border-t-4 border-b-4 border-[#4C5ADF]">
                            <h1 className=" font-mono tracking-wide font-semibold antialiased text-white text-[22px]">A</h1>
                            <h1 className=" font-mono   font-semibold  text-[#4C5ADF] text-[42px] hover:duration-500 hover:rotate-[540deg] ">X</h1>
                            <h1 className="font-mono tracking-wide font-semibold antialiased text-white text-[22px]">A</h1>
                </div>

                <div className="language-button flex flex-row right">
                    <LanguageDropDown onSelectChange={onSelectChange}/>
                </div>

            </div>

            <div className="h-2 w-full  flex-grow">
                <Editor
                    height={`100%`}
                    width={`100%`}
                    theme={theme}
                    language={language || "javascript"}
                    defaultValue="// Code Here"
                    onMount={handleEditorDidMount}
                    value={value}
                    onChange={editorChange}
                    options={{
                        fontSize: fontSize,
                    }}/>
            </div>
        </div>
            
           
    </>
    );

};

export default CodeEditorWindow;