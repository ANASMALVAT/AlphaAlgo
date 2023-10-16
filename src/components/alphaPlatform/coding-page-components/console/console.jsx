import React, { useState } from "react";
import CustomInput from "./customInput";
import CodeOutput from "./codeOutput";
import ConsoleButton from "../buttons/consoleButtons";
import ConsoleRunButtons from "../buttons/consoleRunButtons";
import CodeProblem from "./codeProblem";
import AlphaGPTWindow from "../alpha-gpt/alphaGptWindow";

import "./styles/consoleInput.css";

const ConsoleInput = ({output,runCode,showSolution,}) =>{

    const [isConsole, setIsConsole] = useState(false);
    const [isInput, setIsInput] = useState(false);
    const [isProblem, setIsProblem] = useState(true);
    const [isAlphaGPT,setIsAlphaGPT] = useState(false);

    const setConsole = () => {
        setIsConsole(currentIsConsole => true);
        setIsInput(currentIsInput => false);
        setIsProblem(problem => false);
        setIsAlphaGPT(isAlphaGPT => false);
      };
      
      const setInput = () => {
        setIsInput(currentIsInput => true);
        setIsConsole(currentIsConsole => false);
        setIsProblem(problem => false);
        setIsAlphaGPT(isAlphaGPT => false);
      }

      const setProblem = () => {
        setIsProblem(problem => true);
        setIsConsole(currentIsConsole => false);
        setIsInput(currentIsInput => false);
        setIsAlphaGPT(isAlphaGPT => false);
      };

      const setAlpha = () => {
        setIsAlphaGPT(isAlphaGPT => true);
        setIsProblem(problem => false);
        setIsConsole(currentIsConsole => false);
        setIsInput(currentIsInput => false);
      };


    return (
        <div className="main-console flex-grow overflow-hidden p-2 pb-0 border border-gray-500 min-h-[375px] bg-algoblack rounded-md">

            <div className="console-console-buttons flex flex-row items-start space-x-1  h-12 min-h-[10] w-full bg-algoblack">
                <div className="console-button flex h-full gap-1">
                  <ConsoleButton setConsole={setConsole} setProblem={setProblem} setInput={setInput} setAlpha={setAlpha}  isConsole={isConsole} isInput={isInput} isProblem={isProblem} isAlphaGPT={isAlphaGPT}/>
                </div>
            </div>

            <div className="flex-grow output-input  h-full mt-2 mb-2 border border-gray-600 rounded-md overflow-hidden p-1 ">
                {isProblem && <CodeProblem />}
                {isConsole &&  <CodeOutput outputDetail={output} runCode={runCode} showSolution={showSolution}/> }
                {isInput   &&  <CustomInput  /> }
                {isAlphaGPT && <AlphaGPTWindow  /> }
            </div>

            {/* <div className="console-run-button flex gap-1">
              <ConsoleRunButtons runCode={runCode} showSolution={showSolution} />
            </div> */}
        </div>
    );
}

export default ConsoleInput;