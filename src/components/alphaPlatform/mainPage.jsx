import React, { useLayoutEffect } from "react";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { defineTheme } from "../../data/themeOptions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {setDifferentEditor, setConsole, setDefault,} from "../../redux/slices/alphaPlatformSlice";
import CodeEditorWindow from "./coding-page-components/code-editor/codeEditorWindow";
import SlidingPane from "./coding-page-components/sliding-panel/solutionSlidingPane";
import AlgoButtons from "./coding-page-components/buttons/algoButtons";
import ConsoleInput from "./coding-page-components/console/ConsoleInput";
import AlphaGPTWindow from "./coding-page-components/alpha-gpt/alphaGptWindow";
import Draggable from 'react-draggable';
import { codeCompile } from "./api/codeCompile";
import { codeStatus } from "./api/codeCompileStatus";
import { authorizedUser } from "./api/authorizedUser";
import RestrictLogin from "./coding-page-components/alpha-restrictions/restrictLogin";
import RestrictUnauthorized from "./coding-page-components/alpha-restrictions/restrictUnauthorized";
import RestrictQuestion from "./coding-page-components/alpha-restrictions/restrictQuestion";

import "./styles/mainPage.css";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import RestrictServerSide from "./coding-page-components/alpha-restrictions/restrictServerSide";

const AlphaPlatform = ({}) => {
 

  const alphaPlatformComponents = useSelector((state) => state.alphaPlatform.value);
  const dropdownValue = useSelector((state) => state.dropdownValues.dropdownValue);

  const layoutValue = useSelector((state) => state.layoutValue);
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState(dropdownValue.language);
  const [solution, setSolution] = useState(false);
  const [output, setOutput] = useState("");
  const [windowWidth, setwindowWidth] = useState(layoutValue.width);
  const [toggelWindow, setToggelWindow] = useState(layoutValue.swapWindow);
  const toastId = useRef(null);
  const dispatch = useDispatch();




  const {problemId} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [isQuestion,setIsQuestion] = useState(false);
  const [isServer,setIsServer] = useState(false);
  const [isAuthorised, setIsAuthorised] = useState(false);
  


  useLayoutEffect (() => 
  {
    async function fetchData() {
      try {
        if (localStorage.getItem('jwt-token') == null) {
          setIsLoading(false);
          setIsLoggedIn(false);
          return;
        }
  
        const getQuestionDetail = await authorizedUser(problemId);
        if (getQuestionDetail) {
          handleSuccess(getQuestionDetail.data);
        } else {
          handleServerFailure();
        }
      } catch (error) {
        handleResponse(error.response.status);
      }

      function handleResponse(status) {
        switch (status) {
          case 401:
            handleSessionExpired();
            break;
          case 402:
            handleAuthorizedButNotQuestion();
            break;
          case 403:
            handleUnauthorizedAccess();
            break;
          case 500:
            handleServerFailure();
            break;
          case 200:
            handleSuccess();
            break;
          default:
            handleServerFailure();
            break;
        }
      }

      function handleSessionExpired() {
        setIsLoading(false);
        toast("Session Expired, Please Login To Continue!", { autoClose: 3000 });
        setIsLoggedIn(false);
      }

      function handleUnauthorizedAccess() {
        setIsLoading(false);
        setIsLoggedIn(true);
        setIsQuestion(true);
        setIsAuthorised(false);
      }
    
      function handleAuthorizedButNotQuestion() {
        setIsLoading(false);
        setIsLoggedIn(true);
        setIsQuestion(false);
        setIsAuthorised(true);
      }
    
      function handleServerFailure() {
        setIsLoading(false);
        setIsLoggedIn(true);
        setIsQuestion(true);
        setIsAuthorised(true);
        setIsServer(false);
      }
    
      function handleSuccess(questionDetail) {
        setIsLoading(false);
        setIsLoggedIn(true);
        setIsQuestion(true);
        setIsAuthorised(true);
        setIsServer(true);
       
        sessionStorage.setItem(`problemData`,JSON.stringify(questionDetail?.question_detail));
        sessionStorage.setItem('problemSolution',JSON.stringify(questionDetail?.question_solution));
        sessionStorage.setItem('problemTestCases',JSON.stringify(questionDetail?.test_cases.SS));
        // setCode(questionDetail.driver_code);
      }
    }

    fetchData();

  },[]);


  useEffect(() => {
    setLanguage(dropdownValue.language);
  }, [dropdownValue.language]);

  useEffect(() => {
    let storedCode = sessionStorage.getItem(`user-code-${problemId}`);
    if(storedCode){
      setCode(storedCode);
    }
  },[problemId])

  useEffect(() => {
    setwindowWidth(layoutValue.width);
  }, [layoutValue.width]);

  useEffect(() => {
    setToggelWindow(layoutValue.swapWindow);
  }, [layoutValue.swapWindow]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        dispatch(
          setDefault({
            editor: true,
            console: true,
            gpt: true,
            isConsoleGpt: true,
          })
        );
      } else {
        if (
          alphaPlatformComponents.editor === true &&
          alphaPlatformComponents.isConsoleGpt === true
        ) {
          dispatch(
            setDifferentEditor({
              editor: true,
              console: false,
              gpt: false,
              isConsoleGpt: false,
            })
          );
        } else if (
          (alphaPlatformComponents.editor === true &&
            alphaPlatformComponents.isConsoleGpt === true) ||
          (alphaPlatformComponents.editor === true &&
            alphaPlatformComponents.console === true) ||
          (alphaPlatformComponents.editor === true &&
            alphaPlatformComponents.gpt === true)
        ) {
          dispatch(
            setDifferentEditor({
              editor: true,
              console: false,
              gpt: false,
              isConsoleGpt: false,
            })
          );
        } else if (
          alphaPlatformComponents.isConsoleGpt === true &&
          alphaPlatformComponents.console === true &&
          alphaPlatformComponents.gpt === true
        ) {
          dispatch(
            setConsole({
              editor: false,
              console: true,
              gpt: false,
              isConsoleGpt: true,
            })
          );
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("beforeunload", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("beforeunload", handleResize);
    };
  }, [
    alphaPlatformComponents.console,
    alphaPlatformComponents.gpt,
    alphaPlatformComponents.editor,
    alphaPlatformComponents.isConsoleGpt,
  ]);
 
 

  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        sessionStorage.setItem(`user-code-${problemId}`,code);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const showSolution = () => {
    setSolution((solution) => !solution);
  };

  const closePane = () => {
    setSolution((solution) => !solution);
  };

  async function checkCodeStatus(token) {
    try {
      const codeStatusResponse = await codeStatus(token);

      if (codeStatusResponse.success) {
        toast.update(toastId.current, { autoClose: 1 });
        setOutput(codeStatusResponse.code_output);
        showSuccess(codeStatusResponse.message);
      }
      else {
        toast.update(toastId.current, { autoClose: 1 });
        showError(codeStatusResponse.error);
      }

    } catch (error) {
      console.error(error);
    }
  }

  async function compileCode() {
    toastId.current = toast("Processing...", { autoClose: 10000 });
    const codeCompileResponse = await codeCompile(code, language);
    if (codeCompileResponse.success) {
      const token = codeCompileResponse.token;
      checkCodeStatus(token);
    } else {
      toast.update(toastId.current, { autoClose: 1 });
      showError(codeCompileResponse.error);
    }
  }

  const showError = (notification) => {
    toast.error(
      notification ? notification : `Something Went Wrong, Please Try Again!`,
      {
        position: "top-right",
        autoClose: 3000,
        theme:"light"
      }
    );
  };

  const showSuccess = (notification) => {
    toast.success(notification ? notification : `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 3000,
      theme:"light"
    });
  };

  if(isLoading)
    {
      return (
        <div className='flex h-full w-full min-h-screen min-w-screen bg-[#00182D]'>
            <div className='flex flex-col m-auto justify-center text-center items-center'>
                <div className='h-40 w-40 mb-4'>
                    <img className='animate-spin ' style={{ animationDuration: '2.5s' }} src='https://www.svgrepo.com//show/408307/cog-wheel-settings.svg'></img>
                </div>
            </div>
        </div>
        )
    }

  if(!isLoggedIn){
      return <RestrictLogin/>
    }
  if(!isQuestion){
    return <RestrictQuestion/>
  }
  if(!isAuthorised){
      return <RestrictUnauthorized/>
  }
  if(!isServer){
    return <RestrictServerSide/>
  }

  return (
    <>
      <SlidingPane isOpen={solution} onRequestClose={closePane} />
      <div className="main-class min-w-[350px] min-h-[450px] w-full h-full flex flex-grow flex-row-reverse  min-w-screen max-h-screen bg-algoblack overflow-auto">
        
        {alphaPlatformComponents.isConsoleGpt && (
          <div className="show-buttons bg-algoblack justify-center h-14 p-2  border-1 w-[100%] border-[#1F2937]">
            <AlgoButtons buttonOne={`Editor`} buttonTwo={`Console`} buttonThree={`AlphaGPT`} />
          </div>
        )}
      

        {alphaPlatformComponents.editor && (
          <div
            className={`editor-class overflow-hidden flex flex-col grow-1  ${
              windowWidth ? "w-[60%]" : "w-[40%]"
            }  h-[100vh]  min-h-[375px]  flex-grow transition-all duration-700 ease-in-out`}
          >
            <CodeEditorWindow code={code} onChangeData={onChange} />
          </div>
        )}

          {alphaPlatformComponents.isConsoleGpt && alphaPlatformComponents.editor && <div className=" vertical-divider ml-1 w-2 bg-gray-700 h-full min-h-[98vh] rounded-md m-auto flex-grow"></div> }
      
        {alphaPlatformComponents.isConsoleGpt && (
          <div
            className={`console-gpt ${windowWidth ? "w-[40%]" : "w-[60%]"} ${
              toggelWindow ? "alpha-first" : "console-first"
            } transition-all duration-700 ease-in-out max-h-[100vh] `}
          >
            {toggelWindow ? (
              <>
                {alphaPlatformComponents.console && (
                  <ConsoleInput
                    output={output}
                    handleCompile={compileCode}
                    showSolution={showSolution}
                  />
                )
                }

                { alphaPlatformComponents.console && alphaPlatformComponents.gpt && <div className=" w-full bg-gray-700 h-2 min-h-2 rounded-md"></div>}
                
                {alphaPlatformComponents.gpt && <AlphaGPTWindow />}

              </>
            ) : (
              <>
                {alphaPlatformComponents.gpt && <AlphaGPTWindow />}

                <div className="w-full bg-gray-700 h-2 min-h-2 rounded-md "></div>

                {alphaPlatformComponents.console && (
                  <ConsoleInput
                    output={output}
                    handleCompile={compileCode}
                    showSolution={showSolution}
                  />
                )}
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AlphaPlatform;
