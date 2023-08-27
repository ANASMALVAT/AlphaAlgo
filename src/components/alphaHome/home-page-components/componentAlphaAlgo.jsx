import React from 'react';
import Popup from 'reactjs-popup';
import "../styles/componentAlphaAlgo.css";
import 'reactjs-popup/dist/index.css';

const ComponentAlphaAlgo =  ({isOpen}) => (

  <Popup
    trigger = {
        <button className={`what-button overflow-hidden mt-6 mb-8 flex flex-row items-center text-center align-middle  rounded-sm px-6  font-mono font-normal justify-center text-white border bg-[#4C5ADF] hover:duration-300 border-b-8 border-[#4C5ADF]`}>
                    Explore 
            <h1 className="ml-2 logo-com-3 font-bold antialiased text-[#2D33CA] hover:duration-300 hover:scale-125"> X </h1>
        </button>
    }
    modal
    nested >
        
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"></div>

                <div className="content">
                        <div
                            style={{ 
                             whiteSpace: 'pre',
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#4C5ADF #011627',
                            fontFamily: 'monospace', // Use a monospace font
                            fontSize: '14px',
                            fontColor: 'rgb(55,65,81)'
                        }}
                            className="  hover:duration-300 w-full h-full rounded-[0.25rem]   text-left overflow-auto"
                        >
                        <pre className="m-auto ml-10  max-w-[500px] whitespace-pre">
                          
                        </pre>

                    </div>
            </div>
      </div>
    )}
  </Popup>
);

export default ComponentAlphaAlgo;