import React from 'react';
import { CodeBlock, dracula } from "react-code-blocks";

import "./styles/codeOutput.css";

const CodeOutput = ( { outputDetail } ) => 
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
            <div className= 'code-output text-start  w-full overflow-auto max-h-screen h-full border border-gray-800 flex flex-1  text-white font-normal text-2xl p-2 pl-4 rounded-md'>
                <pre className='text-[18px]'>
                    <CodeBlock text = {outputDetail ? codeOutPut(): ""} language='javascript' showLineNumbers={false} theme={dracula}  customStyle={{background:"transparent",color:"orange",padding:"0px"}} codeBlockStyle={{padding:"0px"}} />
                </pre>
            </div>
        </>
    )
}

export default CodeOutput;