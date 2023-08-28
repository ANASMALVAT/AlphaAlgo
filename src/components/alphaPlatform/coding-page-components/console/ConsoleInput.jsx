import React, { useState } from "react";
import CustomInput from "./customInput";
import CodeOutput from "./codeOutput";
import ConsoleButton from "../buttons/consoleButtons";
import AlgoButtons from "../buttons/algoButtons";
import "../../styles/consoleInput.css";

const ConsoleInput = ({output,handleCompile,showProblem}) =>{

    const [isConsole, setIsConsole] = useState(true);
    const [isInput, setIsInput] = useState(false);
    const [isNote, setIsNote] = useState(false);


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
        <div className="flex flex-col h-full overflow-hidden p-2 m-2 mb-0 border-4 border-[#1F2937]  bg-algoblack">

            <div className="console-console-buttons flex flex-row items-start space-x-1  h-10 w-full  bg-algoblack">
                <ConsoleButton setConsole={setConsole} setInput={setInput} setNote={setNote} isConsole={isConsole} isInput={isInput} isNote={isNote}/>
            </div>

            <div className="overflow-hidden h-full mt-2 mb-2 ">
                {isInput   &&  <CustomInput/> }
                {isConsole &&  <CodeOutput outputDetail={output}/> }
            </div>

            <div className="console-algo-buttons overflow-hidden flex flex-row h-10 ">
                <AlgoButtons methodOne={showProblem} methodTwo={handleCompile} methodThree={handleCompile} buttonOne={`Problem`} buttonTwo={`Run`} buttonThree={`Submit`}></AlgoButtons>
            </div>
        </div>
    );
}

export default ConsoleInput;