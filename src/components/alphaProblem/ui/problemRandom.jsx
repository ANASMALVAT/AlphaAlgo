import React from 'react';
import CallSplitIcon from '@mui/icons-material/CallSplit';

const ProblemRandom = () => {
    return (
        <div className='flex bg-[#F5F5F5] gap-2 px-4 py-2 rounded-md justify-center items-center'>
            <CallSplitIcon className=' rotate-90 text-[#392A6D]' fontSize='large' color='#392A6D'/>
            <button  className={`  "bg-transparent"} text-algoblack  px-1  rounded-md text-lg  font-semibold`}><h1> Mystery Pick</h1></button>
        </div>
    )
}
export default ProblemRandom;