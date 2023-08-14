import React from "react";
import { useState,useEffect,useRef } from "react";
import CodeEditorWindow from "./windows/codeEditorWindow";
import CustomInput from "./ui/customInput";
import LanguageDropDown from "./drop-downs/languageDropDown";
import ThemeDropdown from "./drop-downs/themeDropDown";
import useKeyPress from "../../hooks/useKeyPress";
import { defineTheme } from "../../data/themeOptions";
import { languageOptions } from "../../data/codingLanguages";
import CodeOutput from "./ui/codeOutput";
import SlidingPane from "./ui/slidingPane";
import { ToastContainer,toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const javascriptDefault = "";
const REACT_APP_JUDGE0_URL = 'https://judge0-ce.p.rapidapi.com/submissions'
const REACT_APP_JUDGE0_HOST = 'judge0-ce.p.rapidapi.com'
const REACT_APP_JUDGE0_API_KEY = '5076ef1933mshdeca93c0698d71cp114d45jsn3010b1bb3a30'


const Landing = () => {
    const [code, setCode] = useState("");
    const [theme, setTheme] = useState("cobalt");
    const [language, setLanguage] = useState(languageOptions[0]);
    const [problem,setProblem] = useState({visible: false, data : "" })
    const [customInput, setCustomInput] = useState("");
    const [output, setOutput] = useState("")
    const toastId = useRef(null)
  
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

    const showProblem = () => {
      if(problem.visible === false){ setProblem({visible:true}) }
      else{ setProblem({visible:false}) };
    }

    const closePane = () => {
       setProblem({visible:false});
    }

    const handleCompile = () => {

      toastId.current  = toast("Processing...",{
        autoClose:5000
      });

      if(code.trim() === ""){
          toast.update(toastId.current, {autoClose:10})
          showError("No Code Is Written!");
          return;
      }

      const requestData = {
        language_id: language.id,
        source_code: btoa(code),
        stdin: btoa(customInput)
      }

      const request = {
          method: "post",
          url: REACT_APP_JUDGE0_URL,
          params: {base64_encoded: "true", fields: "*" },
          headers: {
            "content-type" : "application/json",
            "X-RapidAPI-Host" : REACT_APP_JUDGE0_HOST,
            "X-RapidAPI-Key" : REACT_APP_JUDGE0_API_KEY,
            accept: "application/json"
          },
        data: requestData
      };

      axios.request(request)
            .then((response) => {
              checkStatus(response.data.token);
          })
            .catch((error) => {
               if(error.response.status === 429){
                toast.update(toastId.current, {autoClose:10})
                showError("Quota of 100 requests exceeded for the Day!");
               }
        });

      };
     
    const checkStatus = async (token) => {

        const request = {
          method: "GET",
          url: REACT_APP_JUDGE0_URL + "/" + token,
          params: { base64_encoded: "true", fields: "*" },
          headers: {
            "X-RapidAPI-Host": REACT_APP_JUDGE0_HOST,
            "X-RapidAPI-Key": REACT_APP_JUDGE0_API_KEY,
          }
        };
        axios.request(request)
              .then((response) => {
                  if(response.data.status?.id == 1 || response.data.status?.id == 2){
                        setTimeout( () => {
                          checkStatus(token);
                        },2000);
                  }
                  else{
                    setOutput(response.data);
                    toast.update(toastId.current, {autoClose:10})
                    showSuccess("Compiled Successfully")
                  }
              })
              .catch((error)=> {
                toast.update(toastId.current, {autoClose:10})
                showError();
              })
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

        <div  className="flex flex-wrap w-[100vw] h-[100vh]  py-4 bg-algoblack min-w-[700px]">

            <SlidingPane isOpen={problem.visible} onRequestClose={closePane}/>

            <div className=" w-8/12  mb-4">
                <CodeEditorWindow
                  code={code}
                  onChangeData={onChange}
                  language={language?.value}
                  theme={theme?.value}
                />
            </div>
            
            <div className=" w-4/12 overflow-hidden flex flex-col p-5 ">
              <div className="flex flex-wrap mb-8 ml-2 ">
                <div className=" justify-start mb-2">
                  <LanguageDropDown onSelectChange={onSelectChange} />
                </div>
                <div className=" justify-start mb-2">
                  <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
                </div>

              </div>

              <CustomInput/>
              <CodeOutput outputDetail={output}/>

              <div className="flex flex-wrap ml-2">
                
                <div className="mr-4 mt-4">
                  <button className="w-28 	bg-transparent text-white font-semibold hover:text-white py-2 px-6 border border-white shadow-[4px_4px_0px_0px_rgba(255,255,255)] hover:shadow transition duration-200 rounded-sm" onClick={handleCompile}> Compile </button>
                </div>
                <div className="mr-4 mt-4">
                  <button className= "w-28  bg-transparent text-white font-semibold hover:text-white py-2 px-6 border border-white shadow-[4px_4px_0px_0px_rgba(255,255,255)] hover:shadow transition duration-200 rounded-sm" onClick={handleCompile}> Submit </button>
                </div>
                <div className=" mr-4 mt-4" >
                  <button className="w-28  whitespace-nowrap break-keep bg-transparent text-white text-justify font-semibold hover:text-white py-2 px-6 border border-white shadow-[4px_4px_0px_0px_rgba(255,255,255)] hover:shadow transition duration-200 rounded-sm" onClick={showProblem}> Problem </button>
                </div>
              </div>

            </div>

        </div>

      </>
    );
  };


  export default Landing;
