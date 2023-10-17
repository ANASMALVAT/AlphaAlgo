import React, {useState,useEffect}from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ConsoleSlidingPane from "../sliding-panel/consoleSlidingPane";

import "./styles/consoleButton.css"

const ConsoleButton = ({setConsole,isConsole, setInput, isInput, setProblem, isProblem,setAlpha, isAlphaGPT, isSolution, setSolution}) => {
    const [consolePane,setConsolePane] = useState(false);

    const openConsolePane = () => {
        setConsolePane(true);
    }
    const closeConsolePane = () => {
        setConsolePane(false);
    }

    return (
        <>
            < ConsoleSlidingPane isOpen={consolePane} onRequestClose={closeConsolePane} />

            <div className="flex gap-1">
                <button
                    onClick={setProblem}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-3 h-full font-mono text-sm font-normal text-white
                    ${isProblem ? 'bg-[#3e49b4]' : 'bg-[#002451]'}
                    sm:text-sm lg:text-md xl:text-md`}
                >
                    <span className="font-normal font-resize">Problem</span>
                </button>

                <button
                    onClick={setConsole}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-3 py-2 h-full font-mono text-sm font-normal text-white
                    ${isConsole ? 'bg-[#3e49b4]' : 'bg-[#002451]'}
                    sm:text-sm lg:text-md xl:text-md`}
                >
                    <pre className="font-normal font-resize">Console</pre>
                </button>

                <button
                    onClick={setInput}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-3 h-full  font-mono text-sm font-normal text-white
                    ${isInput ? 'bg-[#3e49b4]' : 'bg-[#002451]'}
                    sm:text-sm lg:text-md xl:text-md`}
                >
                    <pre className="font-normal font-resize">Test Cases</pre>
                </button>

                <button
                    onClick={setAlpha}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-3 h-full  font-mono text-sm font-normal text-white
                    ${isAlphaGPT ? 'bg-[#3e49b4]' : 'bg-[#002451]'}
                    sm:text-sm lg:text-md xl:text-md`}
                >
                    <pre className="font-normal font-resize">AlphaGPT</pre>
                </button>

                {/* <button
                    onClick={setSolution}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-3 h-full  font-mono text-sm font-normal text-white
                    ${isSolution ? 'bg-[#3e49b4]' : 'bg-[#002451]'}
                    sm:text-sm lg:text-md xl:text-md`}
                    >
                    <pre className="font-normal font-resize">Solution</pre>
                    </button> */}

            </div>

            <div className="ml-auto side-menu">
                <button
                    onClick={openConsolePane}
                    className={` border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-3 h-full  font-mono text-sm font-normal text-white
                    sm:text-sm lg:text-md xl:text-md`}
                >
                    <MenuIcon sx={{fontSize:'28px'}}/>
                </button>
            </div>


        </>
    )
}

export default ConsoleButton;