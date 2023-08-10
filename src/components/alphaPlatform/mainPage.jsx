import React from "react";
import { useState,useEffect } from "react";

// import { ToastContainer, toast } from "react-toastify";

import CodeEditorWindow from "./windows/codeEditorWindow";
import CustomInput from "./ui/customInput";
import LanguageDropDown from "./ui/languageDropDown";
import ThemeDropdown from "./ui/themeDropDown";
import useKeyPress from "../../hooks/useKeyPress";
import { defineTheme } from "../../data/themeOptions";
import { languageOptions } from "../../data/codingLanguages";
import CodeOutput from "./ui/codeOutput";

// import "react-toastify/dist/ReactToastify.css";

const javascriptDefault = "";

const Landing = () => {
    const [code, setCode] = useState("");
    const [theme, setTheme] = useState("cobalt");
    const [language, setLanguage] = useState(languageOptions[0]);
  
    const enterPress = useKeyPress("Enter");
    const ctrlPress = useKeyPress("Control");
  
    const onSelectChange = (sl) => {
      setLanguage(sl);
    };
  
    useEffect(() => {
      if (enterPress && ctrlPress) {
        console.log("enterPress", enterPress);
        console.log("ctrlPress", ctrlPress);
        handleCompile();
      }
    }, [ctrlPress, enterPress]);
    const onChange = (action, data) => {
      switch (action) {
        case "code": {
          setCode(data);
          break;
        }
        default: {
          console.warn("case not handled!", action, data);
        }
      }
    };

    const handleCompile = () => {
      // We will come to the implementation later in the code
    };
  
    const checkStatus = async (token) => {
      // We will come to the implementation later in the code
    };
  
    function handleThemeChange(th) {
      // We will come to the implementation later in the code
      const theme = th;
    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
    }

    useEffect(() => {
      defineTheme("oceanic-next").then((_) => {
            console.log("here");
            setTheme({ value: "oceanic-next", label: "Oceanic Next" })
        }
      );
    }, []);

  
    return (
      <>
        <div  className="flex mb-4 space-x-4 w-full items-start px-4 py-4 bg-black">
            <div className=" w-8/12 ">
                <CodeEditorWindow
                code={code}
                onChange={onChange}
                language={language?.value}
                theme={theme?.value}
                />
            </div>
            
            <div className=" w-4/12 flex flex-col p-5">
                <div className="flex flex-row space-x-5 mb-6">
                  <LanguageDropDown onSelectChange = {onSelectChange} />
                  <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme}/>
                </div>
                <CustomInput/>
                <CodeOutput/>
                <div className="flex flex-row justify-end">
                  <button class="  bg-transparent m-1 mr-4 text-white font-semibold hover:text-white py-2 px-4 border border-white shadow-[4px_4px_0px_0px_rgba(255,255,255)]  hover:shadow transition duration-200 flex-shrink-0 rounded"> View Problem </button>
                  <button class="  bg-transparent m-1 mr-4 text-white font-semibold hover:text-white py-2 px-4 border border-white shadow-[4px_4px_0px_0px_rgba(255,255,255)]  hover:shadow transition duration-200 flex-shrink-0 rounded"> Compile </button>
                  <button class="  m-1 bg-transparent text-white font-semibold hover:text-white py-2 px-4 border border-white shadow-[4px_4px_0px_0px_rgba(255,255,255)] hover:shadow transition duration-200  flex-shrink-0 rounded"> Submit </button>

                </div>
            </div>
        </div>
      </>
    );
  };
  export default Landing;
