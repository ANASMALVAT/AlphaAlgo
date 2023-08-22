import React from "react";

const ConsoleButton = ({setConsole,isConsole, setInput, isInput, setNote, isNote}) => {
    return (
        <>
           <button onClick={setConsole} className={` border border-[#1F2937] overflow-hidden flex flex-row items-center  rounded-sm px-2 py-2 font-sans text-sm font-normal text-white ${isConsole ? 'bg-[#182232] border border-[#07A7C3]'  : 'bg-[#12151D]'}`}>
                    <svg width="24" height="26" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-white"> <path d="M5.0333 14.8284L6.44751 16.2426L10.6902 12L6.44751 7.75733L5.0333 9.17155L7.86172 12L5.0333 14.8284Z" fill="currentColor"></path><path d="M15 14H11V16H15V14Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM22 4H2L2 20H22V4Z" fill="currentColor"></path>
                    </svg>
                    Output
                </button>

                <button onClick={setInput} className={`  border  border-[#1F2937] overflow-hidden flex flex-row items-center  rounded-sm px-2 py-2 font-mono text-sm font-normal text-white ${isInput ? 'bg-[#182232] border border-[#07A7C3]' : 'bg-[#12151D]'} `}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    Input
                </button>

                <button onClick={setNote} className={`  border  border-[#1F2937] overflow-hidden flex flex-row items-center  rounded-sm px-2 py-2 font-mono text-sm font-normal text-white ${isNote ? 'bg-[#182232] border border-[#07A7C3]' : 'bg-[#12151D]'}`}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    Notes
            </button>
        </>
    )
}

export default ConsoleButton;