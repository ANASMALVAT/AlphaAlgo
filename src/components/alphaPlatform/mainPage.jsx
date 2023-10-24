import React, { useLayoutEffect } from "react";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useSelector,useDispatch } from "react-redux";
import {setDifferentEditor, setDefault,} from "../../redux/slices/alphaPlatformSlice";
import { alphaRunning,alphaStopRunning } from "../../redux/slices/alphaRunning";
import { codeCompile } from "./api/codeCompile";
import { authorizedUser } from "./api/authorizedUser";
import { useParams } from "react-router-dom";
import { toggelUserLoginFalse } from "../../redux/slices/userAuthentication";

import CodeEditorWindow from "./coding-page-components/code-editor/codeEditorWindow";
import AlgoButtons from "./coding-page-components/buttons/algoButtons";
import ConsoleInput from "./coding-page-components/console/console";
import RestrictLogin from "./coding-page-components/alpha-restrictions/restrictLogin";
import RestrictUnauthorized from "./coding-page-components/alpha-restrictions/restrictUnauthorized";
import RestrictQuestion from "./coding-page-components/alpha-restrictions/restrictQuestion";
import RestrictServerSide from "./coding-page-components/alpha-restrictions/restrictServerSide";

import "./styles/mainPage.css";
import "react-toastify/dist/ReactToastify.css";
import { verifyToken } from "../../services/verifyToken";

const AlphaPlatform = ({}) => {

  const alphaPlatformComponents = useSelector((state) => state.alphaPlatform.value);
  const dropdownValue = useSelector((state) => state.dropdownValues.dropdownValue);
  const isRunning = useSelector((state) => state.alphaRunning.isRunning);
  const [editorWidth, setEditorWidth] = useState();
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState(dropdownValue.language);
  const [solution, setSolution] = useState(false);
  const [output, setOutput] = useState("");
  const {problemId} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [isQuestion,setIsQuestion] = useState(false);
  const [isServer,setIsServer] = useState(false);
  const [isAuthorised, setIsAuthorised] = useState(false);
  const toastId = useRef(null);
  const dispatch = useDispatch();


 

  const handleResize = (e) => {
    const newWidth = e.clientX;
    setEditorWidth(newWidth);
  };


  function updateCodeAndDriverCode() {

    const currentDropdownLanguage = dropdownValue.language?.value;
    if(sessionStorage.getItem('driverCode')){
      const presentDriverCode = sessionStorage.getItem('driverCode');
      const parsedDriverCode = JSON.parse(presentDriverCode);
      const currentLanguageDriverCode = parsedDriverCode[currentDropdownLanguage]?.M;
      sessionStorage.setItem('user_code', currentLanguageDriverCode?.user_code?.S || "");
      setCode(currentLanguageDriverCode?.user_code.S);
    }
  }

  function handleSessionExpired() {
    localStorage.clear();
    dispatch(toggelUserLoginFalse());
    setIsLoading(false);
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
    sessionStorage.setItem('driverCode',JSON.stringify(questionDetail.driver_codes.M));
    sessionStorage.setItem('custom_testcase',questionDetail?.custom_test_case.S);
    updateCodeAndDriverCode();
  }

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.body.style.cursor = 'col-resize';
    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleResize);
    });
  };

  useLayoutEffect (() => 
  {
    async function fetchData() {
      try {
        if (localStorage.getItem('csrf-token') == null) {
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
        if(error?.response?.status != 'undefined'){
          handleResponse(error.response.status);
        }
        else{
          handleServerFailure();
        }
      }

  async function handleResponse(status) {
    switch (status) {
      case 440:
        handleSessionExpired();
        break;
      case 404:
        handleAuthorizedButNotQuestion();
        break;
      case 401:
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
  }
  fetchData();
  },[]);

  useEffect(() => {
    setLanguage(dropdownValue.language);
    updateCodeAndDriverCode();
  }, [dropdownValue.language]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1225) {
        dispatch(
          setDefault({
            editor: true,
            console: true,
          })
        );
      }
      else if ( alphaPlatformComponents.editor === true && alphaPlatformComponents.console === true){
         dispatch(setDifferentEditor({editor: true, console: false}));
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("beforeunload", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("beforeunload", handleResize);
    };
  },
  [alphaPlatformComponents.console, alphaPlatformComponents.editor]);

  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        sessionStorage.setItem(`user-code`,code);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const closePane = () => {
    setSolution((solution) => !solution);
  };

  async function runCode(runOrSubmitCode) {
    
    if(isRunning){
      toast(" last execution still in progress!");
      return;
    }

    try{
      const verifyResult = await verifyToken();
      if(!verifyResult.success){
        dispatch(toggelUserLoginFalse);
        handleSessionExpired();
        return;
      }
    }catch(error){
      dispatch(toggelUserLoginFalse);
      handleSessionExpired();
      return;
    }

    try{

      toastId.current = toast("Processing...", { autoClose: 10000 });
      dispatch(alphaRunning());
      let codeCompileResponse;
      if(language.value === 'java'){
        codeCompileResponse = await codeCompile(code,language,problemId,runOrSubmitCode);
      }else{
        codeCompileResponse = await codeCompile(code,language,problemId,runOrSubmitCode);
      }
      if(codeCompileResponse.success){
        toast.update(toastId.current, { autoClose: 1 });
        setOutput(codeCompileResponse.data);
        showSuccess("Code compiled successfully!");
        setTimeout(function() {
          dispatch(alphaStopRunning());
        }, 2000);
      }
      else{
        toast.update(toastId.current, { autoClose: 1 });
        showError("Error compiling code!");
        setTimeout(function() {
          dispatch(alphaStopRunning());
        }, 2000);
      }
    }
    catch(error){
      toast.update(toastId.current, { autoClose: 1 });
      toast("Error compiling code!");
      setTimeout(function() {
        dispatch(alphaStopRunning());
      }, 2000);
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
      
      <div className="main-class min-w-[375px] min-h-[600px] w-full h-full flex flex-grow   min-w-screen max-h-screen bg-algoblack overflow-auto">

        { alphaPlatformComponents.editor && (
          <div
            className={`editor-class overflow-hidden flex flex-col grow-1 h-[100vh]  min-h-[375px]  flex-grow `}
            style={{ width: editorWidth }} 

          >
            <CodeEditorWindow code={code} onChangeData={onChange} />
          </div>
        )}

        <div id="resize" class="resize"
          onMouseDown={handleMouseDown} 
          className=" resize no-select w-1 h-full min-h-screen bg-[#002451] pt-2 pb-2 ml-1 mr-1 rounded-md">
        </div>


        {alphaPlatformComponents.console && (
          <div className={`console-gpt`} >
            <ConsoleInput
              output={output}
              runCode={runCode}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default AlphaPlatform;
