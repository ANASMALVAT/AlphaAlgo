import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./styles/alphaGptWindowText.css";

const AlphaGptWindowText = ({ data, type }) => {
  let formattedData;
  if (data) {
    formattedData = data.replace(/```/g, '');
  }

  return (
    <div className={`gpt-window-text flex-1 rounded-md flex mb-4 bg-transparent w-[full] font-mono ${type === 'user' ? 'flex-row' : 'flex-row-reverse'} border-b border border-gray-700 items-center`}>
      <div className={` flex whitespace-pre-line w-full font-mono h-full p-2 text-[1rem] font-normal tracking-wide text-[white] dark:text-white overflow-hidden w-full ${type === 'user' ? ' justify-end' : ' justify-start ' }`}>
        {
          <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{ width:"100%", borderRadius: "8px", fontSize: "16px", padding: "12px", overflow: "hidden", textAlign: `${type === 'user' ? 'right' : 'left'}`, }} style={tomorrowNightBlue}>
            {formattedData}
          </SyntaxHighlighter>
        }
      </div>

      <div className='h-full m-1 w-8 justify-start align-top text-center'>
        {type === 'user' ? (
          <h1 className="tracking-wide font-bold antialiased text-algoprob text-2xl hover:duration-300 hover:scale-125">U</h1>
        ) : (
          <h1 className="tracking-wide font-bold antialiased text-algoprob text-2xl hover:duration-300 hover:scale-125">X</h1>
        )}
      </div>
    </div>
  );
};

export default AlphaGptWindowText;
