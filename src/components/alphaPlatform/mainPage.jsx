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
import "react-toastify/dist/ReactToastify.css";

const javascriptDefault = "";



const Landing = () => {
    const [code, setCode] = useState("");
    const [theme, setTheme] = useState("cobalt");
    const [language, setLanguage] = useState(languageOptions[0]);
    const [problem,setProblem] = useState(false)
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

        <div  className="flex h-[100%] overflow-scroll bg-algoblack min-w-[700px]">

            <SlidingPane isOpen={problem.visible} onRequestClose={closePane}/>

            <div className=" w-[60%] min-h-[100%] mb-4">
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
            
            <div className=" min-h-[100vh] w-[39%] flex flex-col p-2 ">

              <ConsoleInput output={output} handleCompile={handleCompile} showProblem={showProblem}/>

              <div className="flex flex-wrap ml-2">
                <div className=" mr-4 mt-4" >
                  <button className="w-32 font-mono text-lg whitespace-nowrap break-keep bg-transparent text-white font-semibold hover:text-white py-2 px-6 border border-white shadow-[4px_4px_0px_0px_rgba(255,255,255)] hover:shadow transition duration-200 rounded-sm" onClick={showProblem}> Solution </button>
                </div>
              </div>

            </div>

        </div>

      </>
    );
  };


  export default Landing;
