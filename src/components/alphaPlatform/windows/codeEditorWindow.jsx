import React from "react";
import { useState, useRef, useEffect } from "react";
import Editor, {loader} from "@monaco-editor/react";
import "../styles/codeEditorWindow.css"
import LanguageDropDown from "../drop-downs/languageDropDown";
import ThemeDropdown from "../drop-downs/themeDropDown";
import SettingsIcon from '@mui/icons-material/Settings';
import RestoreIcon from '@mui/icons-material/Restore';
import SettingSlidingPane from "../ui/settingSlidingPane";

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



    return(
    <>
        < SettingSlidingPane isOpen={settingPane} onRequestClose={closePane} theme={theme} themeOptions={themeOptions} handleThemeChange={handleThemeChange}/>

        <div  className=" flex flex-col  min-w-[350px] w-full h-[100%]  mt-2  border-4 border-[#1f2937] ">
            
            <div className=" flex flex-row justify-between m-1 rounded-sm border-4 border-[#1f2937] h-14">
           
                <div className=" flex  text-center align-center rounded-sm ">
                    <button onClick={handleRestore}  className={`button-disappear overflow-hidden mr-2 h-12  flex flex-row items-center border border-r border-[#07A7C3] rounded-sm px-4 py-2 font-mono text-sm font-normal text-white ${false ? 'bg-[#1C283B]' : 'bg-[#12151D]'}`}>
                        <RestoreIcon style={{  fontSize: '26px',color:"purple", color:"white",marginRight:"4px"}}/>
                        
                    </button>
                    <button  onClick={openPane} className={` button-disappear overflow-hidden mr-2 flex h-12 flex-row items-center  border border-r border-[#07A7C3] rounded-sm px-4 py-2 font-mono text-sm font-normal text-white ${false ? 'bg-[#1C283B]' : 'bg-[#12151D]'}`}>
                        <SettingsIcon style={{  fontSize: '26px',color:"purple", color:"white",marginRight:"4px"}}/>
                    </button>
                </div>

                <div className=" flex flex-row right">
                    <LanguageDropDown onSelectChange={onSelectChange}/>
                </div>
            </div>
            
            <Editor
                height="90vh"
                width={`100%`}
                theme={theme}
                language={language || "javascript"}
                defaultValue="// Code Here"
                onMount={handleEditorDidMount}
                value={value}
                onChange={editorChange}
                options={{
                    scrollBeyondLastLine:false,
                    fontSize:fontSize
                }}
                
            />
        </div>
    </>
    );

};

export default CodeEditorWindow;