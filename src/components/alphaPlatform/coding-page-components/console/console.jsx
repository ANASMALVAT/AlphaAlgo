import React from "react";
import CustomInput from "./customInput";
import CodeOutput from "../code-editor/codeOutput";
import ConsoleButton from "../buttons/consoleButtons";
import CodeProblem from "./codeProblem";
import AlphaGPTWindow from "../alpha-gpt/alphaGptWindow";
import CodeSolution from "./codeSolution";
import { useSelector } from "react-redux";
import ConsoleDropDown from "../drop-downs/consoleDropDown";

import "./styles/consoleInput.css";

const ConsoleInput = ({output,runCode}) =>{

    const alphaConsole = useSelector((state) => state.alphaConsole.consoleState);

    return (
        <div className="  main-console flex-grow overflow-hidden p-2 pb-0 border border-gray-500 min-h-[375px] bg-algoblack rounded-md">
            
            <div className="console-console-buttons flex flex-row items-start space-x-1  h-12 min-h-[10] w-full bg-algoblack">
                <div className="console-button flex h-full gap-1">
                  <ConsoleButton />
                </div>
            </div>

            <div className="flex-grow output-input  h-full mt-2 mb-2 border border-gray-600 rounded-md  p-2 overflow-hidden  ">
                {alphaConsole.isProblem && <CodeProblem />}
                {alphaConsole.isInput   && <CustomInput  /> }
                {alphaConsole.isAlphaGPT && <AlphaGPTWindow  /> }
                {alphaConsole.isSolution && <CodeSolution/> }
            </div>
        </div>
    );
}

export default ConsoleInput;