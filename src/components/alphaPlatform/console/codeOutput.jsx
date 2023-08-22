import React from 'react'

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
            <div className= 'text-start w-full min-h-[275px] max-h-screen h-full bg-[#1c283b]  text-white font-normal text-sm rounded-sm overflow-y-auto'>
                    {outputDetail ? <> {codeOutPut()} </>: null} 
            </div>
        </>
    )
}

export default CodeOutput;