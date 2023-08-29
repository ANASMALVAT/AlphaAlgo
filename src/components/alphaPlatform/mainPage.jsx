import React from "react";
import { useState,useEffect,useRef } from "react";
import { ToastContainer,toast } from "react-toastify";
import axios from "axios";
import CodeEditorWindow from "./coding-page-components/windows/codeEditorWindow";
import useKeyPress from "../../hooks/useKeyPress";
import { defineTheme } from "../../data/themeOptions";
import { languageOptions } from "../../data/codingLanguages";
import SlidingPane from "./coding-page-components/sliding-panel/problemSlidingPane";
import AlgoButtons from "./coding-page-components/buttons/algoButtons";
import ConsoleInput from "./coding-page-components/console/ConsoleInput";

import "./styles/mainPage.css"
import "react-toastify/dist/ReactToastify.css";

const javascriptDefault = "";

const AlphaPlatform = ({}) => {
    const [code, setCode] = useState("");
    const [theme, setTheme] = useState("cobalt");
    const [language, setLanguage] = useState(languageOptions[0]);
    const [problem,setProblem] = useState(false)
    const [customInput, setCustomInput] = useState("");
    const [output, setOutput] = useState("")
    const toastId = useRef(null);

    const[editor,setEditor] = useState(true);
    const[cons,setConsole] = useState(true);
    const[gpt,setGpt] = useState(true);
    const[isConsoleGpt, setIsConsoleGpt] = useState(true);

  

    useEffect(() => {

      const handleResize = () => {

          if(window.innerWidth > 950) {

            setEditor(cons => {
              return true;
            });
            setConsole(cons => {
              return true;
            });
            setGpt(cons => {
              return true;
            });
            setIsConsoleGpt(cons => {
              return true;
            });

          }
          else {

            if(editor === false && isConsoleGpt === false){
              setEditor(cons => {
                return true;
              });
            }

            else if (editor && isConsoleGpt || editor && cons || editor && gpt) {
                setConsole(cons => {
                  return false;
                });
                setGpt(cons => {
                  return false;
                });
                setIsConsoleGpt(cons => {
                  return false;
                });
            }   
            else if(isConsoleGpt && cons && gpt) {
              setGpt(cons => {
                return false;
              });
            }
           
          }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('beforeunload', handleResize);

        handleResize();
      
          return () => {

          window.removeEventListener('resize', handleResize);
          window.removeEventListener('beforeunload', handleResize);

        };


      },[editor, isConsoleGpt, cons, gpt]);

    const showEditor = () => {
      console.log("here editor")

        setEditor(edit => true);
        setIsConsoleGpt(consGtp => false);
        setConsole(cons => false);
        setGpt(gpt => false);
    }

    const showConsole = () => {
      
      console.log("here console")
      setIsConsoleGpt(consGtp => true);
      setConsole(cons => true);
      setEditor(edit => false);
      setGpt(gpt => false);
     
    }

    const showGPT = () => {
      console.log("here gpt")
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
        autoClose:10000
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

        <div className="w-full h-full min-w-[375px]  max-w-screen max-h-full">

          <div  className="flex flex-row bg-algoblack overflow-hidden min-h-screen">

            { 
            editor && 
            <div className="editor-class overflow-hidden  flex flex-col  w-[60%]  h-full max-h-[screen] min-h-[full]">
                      <CodeEditorWindow
                          code={code}
                          onChangeData={onChange}
                          language={language?.value}
                          theme={theme?.value}
                          themeOptions = {theme}
                          onSelectChange = {onSelectChange}
                          handleThemeChange = {handleThemeChange}
                          openEditor={showEditor}
                          openConsole={showConsole}
                          openAlphaGPT={showGPT}
                      />
              </div>
            }

            { isConsoleGpt && 
              <div id="console-gpt" className="overflow-hidden console-gpt flex flex-col flex-grow h-full  max-w-screen min-h-full">
                  { 
                  gpt && 
                    <div className="gpt text-center justify-center items-center h-full max-h-full">
                      <ConsoleInput output={output} handleCompile={handleCompile} showProblem={showProblem}/>
                    </div>
                  }
                  {
                  cons &&
                    <div className="console text-center justify-center items-center h-full max-h-full min-w-full">
                      <ConsoleInput  output={output} handleCompile={handleCompile} showProblem={showProblem}/>
                    </div>
                  }
                   <div className="show-buttons bg-algoblack justify-center h-12 p-2">
                    <AlgoButtons methodOne={showEditor} methodTwo={showConsole} methodThree={showGPT} buttonOne={`Editor`} buttonTwo={`Console`} buttonThree={`AlphaGPT`}/>
                  </div>
              </div>
            }
           
          
          </div>
        </div>
      </>

    );
  };


  export default AlphaPlatform;
