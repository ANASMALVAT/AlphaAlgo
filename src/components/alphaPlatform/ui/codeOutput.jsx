import React, { Component } from 'react'

const CodeOutput = ( { outputDetail } ) => {
    let errorId = outputDetail?.stutus?.id;
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
            <div className='mb-6 '>
                <h1 className= "  items-start mb-1 text-xl font-bold  text-left text-white font-mono  m-1 dark:text-white">Output</h1>
                <div className= " w-full h-56 bg-[#1e293b] bg-white   text-white font-normal text-sm rounded-md overflow-y-auto m-1"  >
                    {outputDetail ? <>{codeOutPut}</>: null} 
                </div>
            </div>
        </>
    )
}

export default CodeOutput;