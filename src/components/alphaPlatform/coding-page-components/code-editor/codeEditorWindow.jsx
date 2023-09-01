import React from "react";
import { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import LanguageDropDown from "../drop-downs/languageDropDown";
import SettingsIcon from '@mui/icons-material/Settings';
import RestoreIcon from '@mui/icons-material/Restore';
import SettingSlidingPane from "../sliding-panel/settingSlidingPane";
import ConsoleSlidingPane from "../sliding-panel/consoleSlidingPane";
import MenuIcon from '@mui/icons-material/Menu';
import {useSelector} from "react-redux";
import "./styles/codeEditorWindow.css";

const CodeEditorWindow = ({
    onChangeData,
    code,
    }) => {
    const dropdownValue = useSelector((state) => state.dropdownValues.dropdownValue);
    const [value,setValue] = useState(code || "");
    const [initialValue, setInitialValue] = useState(code || ""); // New state variable
    const [currentFontSize,setFontSize] = useState("16px");
    const [settingPane,setSettingPane] = useState(false);
    const [consolePane,setConsolePane] = useState(false);
    const [currentLanguage,setCurrentLanguagae] = useState(dropdownValue.language);
    const [currentTheme,setcurrentTheme] = useState("blackboard");


    useEffect(() => {
        setFontSize(dropdownValue.fontSize);
        setCurrentLanguagae(dropdownValue.language);
        setcurrentTheme(currentTheme => dropdownValue.theme);
    }, [dropdownValue.fontSize,dropdownValue.language,dropdownValue.theme]);

    const editorRef = useRef(null);

    const closeSettingPane = () => {
        setSettingPane(false);
    }
    const closeConsolePane = () => {
        setConsolePane(false);
    }

    const openSettingPane = () => {
        setSettingPane(true);
    }
    const openConsolePane = () => {
        setConsolePane(true);
    }

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    useEffect(() => {
        setInitialValue(code); 
    }, []);


    const editorChange = (value) => {
        setValue(value)
        onChangeData("code",value);
    };


    const handleRestore = () => {
        setValue(initialValue); 
        onChangeData("code",value);
        editorRef.current.setValue(initialValue);
    };

    const OriginalResizeObserver = window.ResizeObserver;

    window.ResizeObserver = function (callback) {

        const wrappedCallback = (entries, observer) => {
            window.requestAnimationFrame(() => {
            callback(entries, observer);
            });
        };
        return new OriginalResizeObserver(wrappedCallback);
    };

    for (let staticMethod in OriginalResizeObserver) {
        if (OriginalResizeObserver.hasOwnProperty(staticMethod)) {
            window.ResizeObserver[staticMethod] = OriginalResizeObserver[staticMethod];
        }
    }

    return(
    <>
        < SettingSlidingPane isOpen={settingPane} onRequestClose={closeSettingPane} />
        < ConsoleSlidingPane isOpen={consolePane} onRequestClose={closeConsolePane} />

        <div className="  code-editor  flex flex-col w-full min-w-[385px] border-4 border-[#1f2937]">
            
            <div className=" flex flex-row justify-between min-w-[385px]  rounded-sm border-4 m-1 border-[#1f2937] h-14 ">

                <div className=" buttons flex  text-center align-center rounded-sm ">

                    <button onClick={handleRestore}  className={`button-disappear overflow-hidden mr-2 h-12  flex flex-row items-center   border-t-4  border-b-4 border-[#4C5ADF] rounded-sm px-4 py-2 font-mono text-sm font-normal text-white ${false ? 'bg-[#1C283B]' : 'bg-[#12151D]'}`}>
                        <RestoreIcon style={{  fontSize: '26px',color:"purple", color:"white",marginRight:"4px"}}/>
                    </button>

                    <button  onClick={openSettingPane} className={`  overflow-hidden mr-2 flex h-12 flex-row items-center   border-b-4  border-t-4  border-[#4C5ADF] rounded-sm px-4 py-2 font-mono text-sm font-normal text-white ${false ? 'bg-[#1C283B]' : 'bg-[#12151D]'}`}>
                        <SettingsIcon style={{  fontSize: '26px',color:"purple", color:"white",marginRight:"4px"}}/>
                    </button>

                </div>

                <div className="editor-logo flex flex-row text-center overflow-hidden items-center h-full w-20 justify-center  border-4 border-[#4C5ADF]">
                    <h1 className=" font-mono tracking-wide font-semibold antialiased text-white text-[22px]">A</h1>
                    <h1 className=" font-mono   font-semibold  text-[#4C5ADF] text-[42px] hover:duration-500 hover:rotate-[540deg] ">X</h1>
                    <h1 className="font-mono tracking-wide font-semibold antialiased text-white text-[22px]">A</h1>
                </div>

                <div className="language-button ">
                    <LanguageDropDown />
                </div>

                <div className="side-menu flex  min-w-[100px] text-white ml-8 items-center justify-center p-2">
                    <button  onClick={openConsolePane} >
                        <MenuIcon sx={{fontSize:'28px'}}/>
                    </button>
                </div>

            </div>
            
            <div className="h-2 w-full flex-grow min-w-[385px]">
                <Editor
                    height={`100%`}
                    width={`100%`}
                    theme={currentTheme}
                    language={currentLanguage.value || "javascript"}
                    defaultValue="// Code Here"
                    onMount={handleEditorDidMount}
                    value={value}
                    onChange={editorChange}
                    options={{fontSize: currentFontSize}}
                />
            </div>
        </div>

    </>
    );

};

export default CodeEditorWindow;