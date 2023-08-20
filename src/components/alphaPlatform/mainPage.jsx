import React from "react";
import { useState,useEffect,useRef } from "react";
import CodeEditorWindow from "./windows/codeEditorWindow";
import useKeyPress from "../../hooks/useKeyPress";
import { defineTheme } from "../../data/themeOptions";
import { languageOptions } from "../../data/codingLanguages";
import SlidingPane from "./ui/problemSlidingPane";
import { ToastContainer,toast } from "react-toastify";
import axios from "axios";
import ConsoleInput from "./console/ConsoleInput";
import "./styles/mainPage.css"
import "react-toastify/dist/ReactToastify.css";

const javascriptDefault = "";



const Landing = () => {
    const [code, setCode] = useState("");
    const [theme, setTheme] = useState("cobalt");
    const [language, setLanguage] = useState(languageOptions[0]);
    const [problem,setProblem] = useState(false)
    const [customInput, setCustomInput] = useState("");
    const [output, setOutput] = useState("")
    const toastId = useRef(null);
    const[editor,setEditor] = useState(true);
    const[isConsole,setConsole] = useState(true);
    const[gpt,setGpt] = useState(true);
    const[isConsoleGpt, setIsConsoleGpt] = useState(true);

  
    const enterPress = useKeyPress("Enter");
    const ctrlPress = useKeyPress("Control");
    const consoleGpt = document.getElementById("console-gpt");


  
    useEffect(() => {

      const handleResize = () => {
        if (window.screen.width >= 850) {
          setEditor(true);
          setConsole(true);
          setGpt(true);
          setIsConsoleGpt(true);
        }
        if(window.innerWidth < 850){

            if(editor && isConsoleGpt){
              setIsConsoleGpt(false);
            }

            if(isConsoleGpt){

                if(isConsole && gpt){
                  setGpt(false);
                }
            }
            
        }
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };

    }, []);

    const showEditor = () => {
        setEditor(edit => true);
        setIsConsoleGpt(consGtp => false);
        setConsole(cons => false);
        setGpt(gpt => false);
    }

    const showConsole = () => {
      setIsConsoleGpt(consGtp => true);
      setConsole(cons => true);
      setEditor(edit => false);
      setGpt(gpt => false);
     
    }

    const showGPT = () => {
      setIsConsoleGpt(consGtp => true);
      setGpt(gpt => true);
      setEditor(edit => false);
      setConsole(cons => false);
      
    }

    const onSelectChange = (Language) => {
      setLanguage(Language);
    };
  
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

    const showProblem = () => {
      if(problem.visible === false){ setProblem({visible:true}) }
      else{ setProblem({visible:false}) };
    }

    const closePane = () => {
       setProblem({visible:false});
    }

    const handleCompile = () => {

      toastId.current  = toast("Processing...",{
        autoClose:15000
      });

      if(code.trim() === ""){
          toast.update(toastId.current, {autoClose:1})
          showError("No Code Is Written!");
          return;
      }

      const requestData = {
        language_id: language.id,
        source_code: btoa(code),
        stdin: btoa(customInput)
      }

      axios.post('http://localhost:5000/api/compile',requestData)
           .then((response) => {
              console.log(response);
              checkStatus(response.data.token);
           })

           .catch((error) => {
              if (error.response && error.response.status === 429)
              {
                toast.update(toastId.current, { autoClose: 1 });
                showError('Quota of 100 requests exceeded for the Day!');
              } 
              else 
              {
                toast.update(toastId.current, { autoClose: 1 });
                showError('An error occurred during compilation.');
              } 
           })
    }

    const checkStatus = async (token) => 
    {
      try{
          const response = await axios.get(`http://localhost:5000/api/status/${token}`);
          if (response.data.status?.id === 1 || response.data.status?.id === 2)
            {
              setTimeout(() => {
                checkStatus(token);
              }, 2000);
            }
          else {
            setOutput(response.data);
            toast.update(toastId.current, { autoClose: 1 });
            showSuccess('Compiled Successfully');
          }
      } 
      catch (error) {
        toast.update(toastId.current, { autoClose: 1 });
        showError('An error occurred while checking the status.');
      }
    };
  
    function handleThemeChange(th) {
      const theme = th;
      if (["light", "vs-dark"].includes(theme.value)) {
        setTheme(theme);
      } else {
        defineTheme(theme.value).then((_) => setTheme(theme));
      }
    }

    useEffect(() => {
      defineTheme("oceanic-next").then((_) => {
            setTheme({ value: "oceanic-next", label: "Oceanic Next" })
        }
      );
    }, []);

    const showError = (notification) =>{

        toast.error(notification ? notification : `Something Went Wrong, Please Try Again!`,
          {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
    }

    const showSuccess = (notification) =>{

        toast.success(notification ? notification : `Compiled Successfully!`,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
    }

    return (
      <>
        <ToastContainer/>

        <SlidingPane isOpen={problem.visible} onRequestClose={closePane}/>

        <div  className="flex flex-row bg-algoblack overflow-hidden">

          { editor && 
            <div className="editor-class  mb-2 flex flex-col overflow-auto">

              
                    <CodeEditorWindow
                        code={code}
                        onChangeData={onChange}
                        language={language?.value}
                        theme={theme?.value}
                        themeOptions = {theme}
                        onSelectChange = {onSelectChange}
                        handleThemeChange = {handleThemeChange}
                    />
                
            </div>
          }

          { isConsoleGpt && 

            <div id="console-gpt" className="console-gpt none-display flex flex-col">
              {
              isConsole &&
                <div className="console mb-2">
                  <ConsoleInput className ="" output={output} handleCompile={handleCompile} showProblem={showProblem}/>
                </div>
              }

              { 
              gpt && 

                <div className="gpt">
                  <ConsoleInput output={output} handleCompile={handleCompile} showProblem={showProblem}/>
                </div>
              }

            </div>

          }

        </div>

        <div className="show-buttons bg-algoblack justify-center h-10 p-1">
            <button onClick={showEditor} className={` overflow-hidden w-20 mr-4 flex flex-row items-center break-keep  rounded-md px-2 py-2 font-mono text-sm font-normal justify-center border border-[#1F2937] text-white hover:border hover:border-[#07A7C3]`}>
              Editor
            </button>
            <button onClick={showConsole}  className={` overflow-hidden w-20 text-center mr-4 flex flex-row items-center  rounded-md px-2 py-2 font-sans text-sm justify-center border border-[#1F2937] font-normal text-white hover:border hover:border-[#07A7C3]`}>
              Console
            </button>
            <button onClick={showGPT} className={`overflow-hidden w-20 mr-2 flex flex-row items-center  rounded-md px-2 py-2 font-mono text-sm font-normal justify-center border border-[#1F2937] text-white hover:border hover:border-[#07A7C3]`}>
              AlphaGPT
            </button>
        </div>
      </>

    );
  };


  export default Landing;
