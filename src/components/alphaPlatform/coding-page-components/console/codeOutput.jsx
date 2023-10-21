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
        <div className='flex flex-col h-full gap-2'>
            <div className= 'code-output text-start  w-full overflow-auto max-h-screen flex-grow border border-gray-700 flex flex-1  text-white font-normal text-2xl p-2 pl-4 rounded-md'>
                <pre className='text-[18px]'>
                    <CodeBlock text = {outputDetail ? codeOutPut(): ""} language='javascript' showLineNumbers={false} theme={dracula}  customStyle={{background:"transparent",color:"orange",padding:"0px"}} codeBlockStyle={{padding:"0px"}} />
                </pre>
            </div>

            <ConsoleRunButtons runCode={runCode}/>
        </div>
        </>
    )
}

export default CodeOutput;