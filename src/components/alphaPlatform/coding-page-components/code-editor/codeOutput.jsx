import React from 'react';
import { CodeBlock, dracula } from "react-code-blocks";
import ConsoleRunButtons from '../buttons/consoleRunButtons';
import "./styles/codeOutput.css";

const CodeOutput = ( { outputDetail ,runCode} ) => 
{
    let errorId = outputDetail?.status_id;

    const codeOutPut = () => {

        switch(errorId)
        {
            case 3:
                return atob(outputDetail?.stdout);
            case 5:
                return `Time Limit Exceed`
               
            case 6:
                return atob(outputDetail?.compile_output)
                
            default:
                return atob(outputDetail?.stderr)
        }
    }

    return (
        <>
        <div className=' code-output flex flex-col h-full w-full gap-2 flex-grow '>
            <div className= 'code-output text-start  w-full h-full overflow-auto max-h-screen  border-b border-gray-700 flex flex-1  text-white font-normal text-2xl p-2 pl-4'>
                <h2 className='text-[18px] flex text-left w-full '>
                    <CodeBlock  text = {outputDetail ? codeOutPut(): ""} language='javascript' showLineNumbers={false} theme={dracula}  customStyle={{background:"transparent",color:"orange",padding:"0px",width:"100%"}}  codeBlockStyle={{padding:"0px"}} />
                </h2>
            </div>
            <div className='ml-4 flex  items-center'>
                <ConsoleRunButtons runCode={runCode}/>
            </div>
        </div>
        </>
    )
}

export default CodeOutput;