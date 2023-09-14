import React from 'react';
import "./styles/codeOutput.css";

const CodeOutput = ( { outputDetail } ) => 
{
    let errorId = outputDetail?.status_id;

    const codeOutPut = () => {
        switch(errorId)
        {
            case 3:
                return  (
                    <pre className='px-2 py-1 font-normal text-xs text-red-500'>
                        {atob(outputDetail?.stdout)}
                    </pre>
                );
      
            case 5:
                return (
                    <pre className='px-2 py-1 font-normal text-xs text-red-500'>
                        {`Time Limit Exceed`}
                    </pre>
                )
            
            case 6:
                return(
                    <pre className='px-2 py-1 font-normal text-xs text-red-500'>
                        {atob(outputDetail?.compile_output)}
                    </pre>
                )
            default:
                return (
                    <pre className='px-2 py-1 font-normal text-xs text-red-500'>
                        {atob(outputDetail?.stderr)}
                    </pre>
                )
        }
    }

    return (
        <>
            <div className= 'code-output text-start w-full overflow-auto max-h-screen h-full bg-[#2d3e5a] flex flex-1  text-white font-normal text-sm border border-gray-700 rounded-md'>
                    {outputDetail ? <> {codeOutPut()} </>: null} 
            </div>
        </>
    )
}

export default CodeOutput;