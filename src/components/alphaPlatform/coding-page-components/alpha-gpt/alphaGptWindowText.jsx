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
        <div className={` gpt-window-text flex-1 rounded-md flex  mb-4 bg-transparent  w-[full]  font-mono ${type === 'user' ? 'flex-row-reverse'  : 'flex-row'}  border-b border border-gray-700  items-center `}>
            <div className=' h-full m-1 w-8  justify-start  align-top  text-center '>
                {type === 'user' 
                    ? <h1 className=" tracking-wide font-bold antialiased  text-algoprob text-2xl hover:duration-300 hover:scale-125">U</h1>
                    : <h1 className=" tracking-wide font-bold antialiased  text-algoprob text-2xl hover:duration-300 hover:scale-125">X</h1>
                }
            </div>

            <div className={` whitespace-pre-line    w-full font-mono  h-full p-2 text-[1rem] font-normal tracking-wide text-[white] dark:text-white overflow-hidden ${type === 'user' ? 'text-right' : 'text-left'} `}>
                {
                    <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px",padding:"10px",overflow:"hidden",textAlign:"justify", }} style={tomorrowNightBlue}>
                        {formatedData}
                    </SyntaxHighlighter>
                }
            </div>
        </div>
    )
}
export default AlphaGptWindowText;