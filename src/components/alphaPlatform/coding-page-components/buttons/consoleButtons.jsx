import React from "react";

const ConsoleButton = ({setConsole,isConsole, setInput, isInput, setProblem, isProblem}) => {
    return (
        <>
                <button
                    onClick={setConsole}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-2 py-2 h-full font-mono text-sm font-normal text-white
                    ${isConsole ? 'bg-[#3e49b4]' : 'bg-[#5867ea]'}
                    sm:text-sm lg:text-md xl:text-md`}
                    >
                    <svg width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 font-light text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                    <path d="M5.0333 14.8284L6.44751 16.2426L10.6902 12L6.44751 7.75733L5.0333 9.17155L7.86172 12L5.0333 14.8284Z" fill="currentColor"></path><path d="M15 14H11V16H15V14Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM22 4H2L2 20H22V4Z" fill="currentColor"></path></svg>
                    <pre className="font-normal font-resize">Console</pre>
                </button>

                <button
                    onClick={setInput}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-2 h-full  font-mono text-sm font-normal text-white
                        ${isInput ? 'bg-[#3e49b4]' : 'bg-[#5867ea]'}
                        sm:text-sm lg:text-md xl:text-md`}
                    >
                    <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-4 text-white sm:h-6 sm:w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    <pre className="font-normal font-resize">Input</pre>
                </button>

                <button
                    onClick={setProblem}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-2 h-full font-mono text-sm font-normal text-white
                        ${isProblem ? 'bg-[#3e49b4]' : 'bg-[#5867ea]'}
                           sm:text-sm lg:text-md xl:text-md`}
                    >
                    <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2 text-white sm:h-6 sm:w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    <span className="font-normal font-resize">Problem</span>
                </button>
        </>
    )
}

export default ConsoleButton;