import React, { useState,useRef } from "react";
import CustomInput from "./customInput";
import CodeOutput from "./codeOutput";
import ConsoleButton from "../buttons/consoleButtons";
import ConsoleRunButtons from "../buttons/consoleRunButtons";
import VerticalHorizontalButtons from "../buttons/verticalHorizontalButtons";
import CodeSolution from "./codeSolution";

import "./styles/consoleInput.css";

const ConsoleInput = ({output,handleCompile,showSolution}) =>{

    const [isConsole, setIsConsole] = useState(true);
    const [isInput, setIsInput] = useState(false);
    const [isProblem, setIsProblem] = useState(false);
    const outputInputRef = useRef();


    const setConsole = () => {
        setIsConsole(currentIsConsole => true);
        setIsInput(currentIsInput => false);
        setIsProblem(problem => false);
      };
      
      const setInput = () => {
        setIsInput(currentIsInput => true);
        setIsConsole(currentIsConsole => false);
        setIsProblem(problem => false);
      }

      const setProblem = () => {
        setIsProblem(problem => true);
        setIsConsole(currentIsConsole => false);
        setIsInput(currentIsInput => false);
      };

      const testcases = [
        "[1,2,3,4,5,6]",
        "[1,6,7,8,9,0,1]",
        "[1,2,3,4,5,6]",
        "[1,6,7,8,9,0,1]",
        "[1,2,3,4,5,6]",
        "[1,6,7,8,9,0,1,1,2,3,3,4,5,5,6,7,8,8,9,9,0,3,1,3,4,2,1,34,5,123,12,124,2,123,123]",
      ];

    return (
        <div className="main-console flex-grow overflow-hidden  p-2  border border-gray-700 min-h-[150px] bg-algoblack rounded-md">

            <div className="console-console-buttons flex flex-row items-start space-x-1  h-12 min-h-[10] w-full bg-algoblack">
                <ConsoleButton setConsole={setConsole} setProblem={setProblem} setInput={setInput} isConsole={isConsole} isInput={isInput} isProblem={isProblem}/>
                <VerticalHorizontalButtons/>
            </div>

            <div className="flex-grow output-input  h-full mt-2 mb-2 border border-gray-600 rounded-md overflow-hidden p-4 ">
                {isInput   &&  <CustomInput testCases={testcases} /> }
                {isConsole &&  <CodeOutput outputDetail={output}/> }
                {isProblem && <CodeSolution />}
            </div>

            <ConsoleRunButtons methodOne={handleCompile} methodTwo={handleCompile} methodThree={showSolution} buttonOne={`Run`} buttonTwo={`Submit`} buttonThree={`Solution`} />

        </div>
    );
}

export default ConsoleInput;