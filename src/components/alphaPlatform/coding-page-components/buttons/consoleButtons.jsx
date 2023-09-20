import React from "react";
import TerminalIcon from '@mui/icons-material/Terminal';
import InputIcon from '@mui/icons-material/Input';
import SpeedIcon from '@mui/icons-material/Speed';
const ConsoleButton = ({setConsole,isConsole, setInput, isInput, setProblem, isProblem}) => {
    return (
        <>
                <button
                    onClick={setConsole}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-4 py-2 h-full font-mono text-sm font-normal text-white
                    ${isConsole ? 'bg-[#3e49b4]' : 'bg-[#5867ea]'}
                    sm:text-sm lg:text-md xl:text-md`}
                    >
                   {/* <TerminalIcon className="mr-1"/> */}
                    <pre className="font-normal font-resize">Console</pre>
                </button>

                <button
                    onClick={setInput}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-4 h-full  font-mono text-sm font-normal text-white
                        ${isInput ? 'bg-[#3e49b4]' : 'bg-[#5867ea]'}
                        sm:text-sm lg:text-md xl:text-md`}
                    >
                    <pre className="font-normal font-resize">Input</pre>
                </button>

                <button
                    onClick={setProblem}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-4 h-full font-mono text-sm font-normal text-white
                        ${isProblem ? 'bg-[#3e49b4]' : 'bg-[#5867ea]'}
                           sm:text-sm lg:text-md xl:text-md`}
                    >
                    <span className="font-normal font-resize">Problem</span>
                </button>
        </>
    )
}

export default ConsoleButton;