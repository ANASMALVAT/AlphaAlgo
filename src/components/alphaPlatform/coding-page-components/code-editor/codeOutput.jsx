import React from 'react';
import { CodeBlock, dracula } from "react-code-blocks";
import ConsoleRunButtons from '../buttons/consoleRunButtons';
import "./styles/codeOutput.css";
import { toast } from 'react-toastify';

const CodeOutput = ( { outputDetail ,runCode} ) => 
{
    let errorId = outputDetail?.status_id;

    const codeOutPut = () => {
        switch(errorId)
        {
            case 3:{
                return atob(outputDetail?.stdout);
            }
            case 5:{
                return `Time Limit Exceed`
            }
            case 6:{
                return atob(outputDetail?.compile_output)
            }
                
            default:{
                return atob(outputDetail?.stderr)
            }
        }
    }

    return (
        <>
        <div className=' code-output flex flex-col h-full w-full gap-2 flex-grow '>
            <div className= 'code-output text-start   flex-col w-full h-full overflow-auto max-h-screen  border-b border-gray-700 flex flex-1  text-white font-normal text-2xl p-2 pl-4'>
                <div className=' mb-4'>
                    <h2 className='text-[18px] flex text-left w-full '>
                        <CodeBlock    text = {outputDetail ? codeOutPut(): ""} language='c++' showLineNumbers={false} theme={dracula}  customStyle={{background:"transparent",color:"orange",padding:"0px",width:"100%"}}   codeBlockStyle={{padding:"0px"}} />
                    </h2>
                </div>
                <div className='flex flex-col  gap-1  '>
                    <h2 className='text-[20px] flex text-left w-full '>
                        {
                            outputDetail?.memory  &&  <CodeBlock    text = {` Memory usage:  ${outputDetail?.memory} KB`} language='javascript' showLineNumbers={false} theme={dracula}  customStyle={{background:"transparent",color:"orange",padding:"0px",width:"100%"}}  codeBlockStyle={{padding:"0px"}} />
                        }
                    </h2>
                    <h2 className='text-[20px] flex text-left w-full '>
                        {
                            outputDetail?.time  &&  <CodeBlock    text = {` Execution time:  ${outputDetail?.time} Seconds`} language='javascript' showLineNumbers={false} theme={dracula}  customStyle={{background:"transparent",color:"orange",padding:"0px",width:"100%"}} class = "code-output"  codeBlockStyle={{padding:"0px"}} />
                        }
                    </h2>
                </div>
                <div className='flex gap-3  '>
                    
                </div>
            </div>
            <div className='ml-4 flex  items-center'>
                <ConsoleRunButtons runCode={runCode}/>
            </div>
        </div>
        </>
    )
}

export default CodeOutput;