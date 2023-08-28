import React, {Component} from 'react'
import AlphaGPTSearchBar from '../ui/alphaGptSearchBar';

 
const AlphaGPTWindow = () => {
    return (
        <>
        <div className='h-[400px] w-[550px] bg-algoblack flex flex-col p-2'>
            <div id='output-window' className='h-[80%] w-full border border-[#5867EA] mb-2 rounded-md'>

            </div>
            <div id='text-input' className=' h-[20%] w-full rounded-sm flex flex-row items-center  '>
                <AlphaGPTSearchBar/>
            </div>
        </div>
        </>
    )
}

export default AlphaGPTWindow;
