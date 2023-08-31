import React from "react";
import axios from "axios";
import { useState,useEffect,useRef } from "react";
import { ToastContainer,toast } from "react-toastify";
import { defineTheme } from "../../data/themeOptions";
import {useSelector} from 'react-redux'
import { useDispatch } from "react-redux";
import { setDifferentEditor,setConsole,setDefault} from "../../redux/slices/alphaPlatformSlice"
import CodeEditorWindow from "./coding-page-components/code-editor/codeEditorWindow";
import SlidingPane from "./coding-page-components/sliding-panel/problemSlidingPane";
import AlgoButtons from "./coding-page-components/buttons/algoButtons";
import ConsoleInput from "./coding-page-components/console/ConsoleInput";
import AlphaGPTWindow from "./coding-page-components/alpha-gpt/alphaGptWindow";


import "./styles/mainPage.css"
import "react-toastify/dist/ReactToastify.css";


const AlphaPlatform = ({}) => {
  
    const alphaPlatformComponents = useSelector((state) =>  state.alphaPlatform.value);
    const dropdownValue = useSelector((state) => state.dropdownValues.dropdownValue);
    console.log(dropdownValue.theme);
    const dispatch = useDispatch();
    const [code, setCode] = useState("");
    const [theme, setTheme] = useState("oceanic-next");
    const [language, setLanguage] = useState(dropdownValue.language);
    const [problem,setProblem] = useState(false)
    const [customInput, setCustomInput] = useState("");
    const [output, setOutput] = useState("")
    const toastId = useRef(null);


    useEffect(() => {
      setLanguage(dropdownValue.language);
    },[dropdownValue.language]);

    useEffect(() => {

      const handleResize = () => {

          if(window.innerWidth > 1000) {
            dispatch(setDefault({editor:true,console:true,gpt:true,isConsoleGpt:true}));
          }

          else {

            if(alphaPlatformComponents.editor === true && alphaPlatformComponents.isConsoleGpt === true){
              dispatch(setDifferentEditor({ editor: true, console: false, gpt: false, isConsoleGpt: false}))
            }

            else if (alphaPlatformComponents.editor === true && alphaPlatformComponents.isConsoleGpt === true || alphaPlatformComponents.editor === true && alphaPlatformComponents.console === true || alphaPlatformComponents.editor === true && alphaPlatformComponents.gpt === true) {
              dispatch(setDifferentEditor({ editor: true, console: false, gpt: false, isConsoleGpt: false}))
            }

            else if(alphaPlatformComponents.isConsoleGpt === true && alphaPlatformComponents.console === true && alphaPlatformComponents.gpt === true) {
              dispatch(setConsole({ editor: false, console: true, gpt: false, isConsoleGpt: true}))
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

      },
      [alphaPlatformComponents.console,
        alphaPlatformComponents.gpt, 
        alphaPlatformComponents.editor,
        alphaPlatformComponents.isConsoleGpt
      ]);

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
      
      setProblem(problem => !problem);
    }

    const closePane = () => {
       setProblem(problem => !problem);
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
  
    useEffect(() => {
        if (["light", "vs-dark"].includes(dropdownValue.theme)) {
          setTheme(dropdownValue.theme);
        } 
        else 
        {
          defineTheme(dropdownValue.theme).then((_) => setTheme(dropdownValue.theme));
        }
      
    },[dropdownValue.theme])

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

        <SlidingPane isOpen={problem} onRequestClose={closePane}/>

        <div className="main-class min-w-[350px] w-full h-full flex flex-row min-h-[100vh]  min-w-screen max-h-full bg-algoblack">
        
            {
              alphaPlatformComponents.isConsoleGpt &&
                <div className="show-buttons bg-algoblack justify-center h-14 p-2  border-1 w-[100%] border-[#1F2937]">
                  <AlgoButtons buttonOne={`Editor`} buttonTwo={`Console`} buttonThree={`AlphaGPT`}/>
                </div>
            }

            { 
              alphaPlatformComponents.editor && 
                <div className="editor-class overflow-hidden  flex flex-col  w-[60%]  h-full max-h-[screen] min-h-[full]">
                    <CodeEditorWindow
                      code={code}
                      onChangeData={onChange}
                      theme={theme}
                    />
                </div>
            }

            { 
              alphaPlatformComponents.isConsoleGpt && 

                <div className="console-gpt ">
                    {
                    alphaPlatformComponents.console &&
                      <ConsoleInput output={output} handleCompile={handleCompile} showProblem={showProblem} />
                    }
                    { 
                    alphaPlatformComponents.gpt && 
                      <AlphaGPTWindow/>
                    }
                </div>
              }

          </div>
      </>
    );
  };


  export default AlphaPlatform;
