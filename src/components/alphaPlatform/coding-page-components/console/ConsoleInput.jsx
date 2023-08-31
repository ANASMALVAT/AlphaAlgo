import React, { useState,useRef } from "react";
import CustomInput from "./customInput";
import CodeOutput from "./codeOutput";
import ConsoleButton from "../buttons/consoleButtons";
import ConsoleRunButtons from "../buttons/consoleRunButtons";
import VerticalHorizontalButtons from "../buttons/verticalHorizontalButtons";
import ProblemLayout from "../ui/problemLayout";

import "./styles/consoleInput.css";

const ConsoleInput = ({output,handleCompile,showProblem}) =>{

    const [isConsole, setIsConsole] = useState(true);
    const [isInput, setIsInput] = useState(false);
    const [isNote, setIsNote] = useState(false);
    const outputInputRef = useRef();


    const setConsole = () => {
        setIsConsole(currentIsConsole => true);
        setIsInput(currentIsInput => false);
        setIsNote(currentIsNote => false);
      };
      
      const setInput = () => {
        setIsInput(currentIsInput => true);
        setIsConsole(currentIsConsole => false);
        setIsNote(currentIsNote => false);
      }

      const setNote = () => {
        setIsNote(currentIsNote => true);
        setIsConsole(currentIsConsole => false);
        setIsInput(currentIsInput => false);
      };


    return (
        <div className="main-console h-full overflow-hidden  p-2  border border-gray-600 bg-algoblack rounded-md">

            <div className="console-console-buttons flex flex-row items-start space-x-1  h-12 w-full  bg-algoblack">
                <ConsoleButton setConsole={setConsole} setInput={setInput} setNote={setNote} isConsole={isConsole} isInput={isInput} isNote={isNote}/>
                <VerticalHorizontalButtons/>
            </div>

            <div className="output-input flex-grow h-full mt-2 mb-2 border border-gray-600 rounded-md overflow-hidden p-4 ">
                {isInput   &&  <CustomInput/> }
                {isConsole &&  <CodeOutput outputDetail={output}/> }
            </div>

            <ConsoleRunButtons methodOne={showProblem} methodTwo={handleCompile} methodThree={handleCompile} buttonOne={`Problem`} buttonTwo={`Run`} buttonThree={`Submit`} />

        </div>
    );
}

export default ConsoleInput;