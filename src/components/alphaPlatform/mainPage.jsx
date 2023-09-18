import React, { useLayoutEffect } from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { defineTheme } from "../../data/themeOptions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {setDifferentEditor, setConsole, setDefault,} from "../../redux/slices/alphaPlatformSlice";
import CodeEditorWindow from "./coding-page-components/code-editor/codeEditorWindow";
import SlidingPane from "./coding-page-components/sliding-panel/problemSlidingPane";
import AlgoButtons from "./coding-page-components/buttons/algoButtons";
import ConsoleInput from "./coding-page-components/console/ConsoleInput";
import AlphaGPTWindow from "./coding-page-components/alpha-gpt/alphaGptWindow";
import { codeCompile } from "./api/codeCompile";
import { codeStatus } from "./api/codeCompileStatus";
import { verifyToken } from "../../services/verifyToken";
import { authorizedUser } from "../../services/authorizedUser";

import "./styles/mainPage.css";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const AlphaPlatform = ({}) => {
  const alphaPlatformComponents = useSelector(
    (state) => state.alphaPlatform.value
  );
  const dropdownValue = useSelector(
    (state) => state.dropdownValues.dropdownValue
  );
  const layoutValue = useSelector((state) => state.layoutValue);
  const dispatch = useDispatch();
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState(dropdownValue.language);
  const [solution, setSolution] = useState(false);
  const [customInput, setCustomInput] = useState("");
  const [output, setOutput] = useState("");
  const [windowWidth, setwindowWidth] = useState(layoutValue.width);
  const [toggelWindow, setToggelWindow] = useState(layoutValue.swapWindow);
  const {problemId} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [authorizedMessage, setAuthorizedMessage] = useState("");


  useEffect (() => {
     async function fetchData() {
      if (localStorage.getItem('jwt-token') == null) {
        setIsLoading(false);
        setAuthorizedMessage("Please Login To Alpha Algo");
      }
      const response = await authorizedUser(problemId);
      console.log(response);
      setIsLoading(false);
    }

    fetchData();
  },[])
 
 
  const toastId = useRef(null);

  useEffect(() => {
    setLanguage(dropdownValue.language);
  }, [dropdownValue.language]);

  useEffect(() => {
    setwindowWidth(layoutValue.width);
  }, [layoutValue.width]);

  useEffect(() => {
    setToggelWindow(layoutValue.swapWindow);
  }, [layoutValue.swapWindow]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
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
      console.log(codeCompileResponse.error);
    }
  }

  useEffect(() => {
    if (["light", "vs-dark"].includes(dropdownValue.theme)) {
      defineTheme(dropdownValue.theme);
    } else {
      defineTheme(dropdownValue.theme);
    }
  }, [dropdownValue.theme]);

  const showError = (notification) => {
    toast.error(
      notification ? notification : `Something Went Wrong, Please Try Again!`,
      {
        position: "top-right",
        autoClose: 3000,
        theme:"dark"
      }
    );
  };

  const showSuccess = (notification) => {
    toast.success(notification ? notification : `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 3000,
      theme:"dark"
    });
  };

  return (
    <>
      <SlidingPane isOpen={solution} onRequestClose={closePane} />
      <div className="main-class min-w-[350px] w-full h-full flex flex-row flex-grow  min-w-screen max-h-screen bg-algoblack overflow-auto">
        {alphaPlatformComponents.isConsoleGpt && (
          <div className="show-buttons bg-algoblack justify-center h-14 p-2  border-1 w-[100%] border-[#1F2937]">
            <AlgoButtons
              buttonOne={`Editor`}
              buttonTwo={`Console`}
              buttonThree={`AlphaGPT`}
            />
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

        {alphaPlatformComponents.isConsoleGpt && alphaPlatformComponents.editor && <div className=" ml-2 mr-1 w-1 bg-gray-700 h-full min-h-[98vh] rounded-md m-auto flex-grow"></div> }
        
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
