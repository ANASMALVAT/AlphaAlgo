import React from "react";

const ConsoleButton = ({setConsole,isConsole, setInput, isInput, setNote, isNote}) => {
    return (
        <>
           <button
                    onClick={setConsole}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-2 py-2 h-full font-mono text-sm font-normal text-white
                        ${isConsole ? 'bg-[#3e49b4]' : 'bg-[#5867ea]'}
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
                        className="h-4 w-4 mr-2 text-white sm:h-6 sm:w-6"
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
                    onClick={setNote}
                    className={`border border-[#1F2937] overflow-hidden flex flex-row items-center rounded-[4px] px-2 h-full font-mono text-sm font-normal text-white
                        ${isNote ? 'bg-[#3e49b4]' : 'bg-[#5867ea]'}
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
                    <span className="font-normal font-resize">Notes</span>
                </button>
        </>
    )
}

export default ConsoleButton;