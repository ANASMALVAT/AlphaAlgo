import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./styles/alphaGptWindowText.css";

const AlphaGptWindowText = ({data,type}) =>{
    let formatedData;
    if(data){
        formatedData = data.replace(/```/g, '');
    }
    return (
        <div className={` gpt-window-text flex-1 rounded-md flex flex-row mb-4 bg-transparent  w-[full] font-mono ${type === 'User' ? 'text-right'  : 'text-left'}  border-b border-t border-gray-600  items-center `}>
            <div className=' h-full m-1 w-8  rounded-sm  justify-start  align-top  text-center '>
                {type === 'Bot' 
                    ? <h1 className=" tracking-wide font-bold antialiased text-[#ef4e94] text-2xl hover:duration-300 hover:scale-125">X</h1>
                    : <h1 className=" tracking-wide font-bold antialiased text-[#ef4e94] text-2xl hover:duration-300 hover:scale-125">U</h1>
                }
            </div>

            <div className=' whitespace-pre-line  text-data  w-full font-mono  h-full p-2 text-left text-[1rem] font-normal tracking-wide text-[white] dark:text-white overflow-hidden'>
                {
                    <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px",padding:"10px",overflow:"hidden",textAlign:"justify"}} style={tomorrowNightBlue}>
                        {formatedData}
                    </SyntaxHighlighter>
                }
            </div>
        </div>
    )
}
export default AlphaGptWindowText;