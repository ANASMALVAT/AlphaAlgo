import React, { useEffect, useState } from 'react';
import axios from "axios"
import AlphaGPTSearchBar from './alphaGptSearchBar';
import { verifyToken } from '../../../../services/verifyToken';
import { toggelUserLoginFalse } from '../../../../redux/slices/userAuthentication';
import { useDispatch} from "react-redux"
import { toast } from 'react-toastify';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./styles/alphaGptWindowText.css";
import './styles/alphaGptWindow.css';





const AlphaGPTWindow = () => {


  const GPT_URL = process.env.REACT_APP_CALL_GPT;

 async function askAlpha (userInput,setLoading, showError) {

  if (userInput.trim() !== '') {
    setLoading(true);
    let storedMessages = localStorage.getItem('stored-messages');
    let parsedMessages = storedMessages ? JSON.parse(storedMessages) : [];
    let currentChats = parsedMessages;
    let tempChats = []
    tempChats.push({ role: 'user', content: userInput });

    const updatedMessages = [...parsedMessages, ...tempChats];
    localStorage.setItem('stored-messages', JSON.stringify(updatedMessages));
    currentChats.push({ role: 'user', content: userInput });

    try {
      const response = await axios.post(GPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        currentChats,
      });

      tempChats = []
      tempChats.push({ role: 'assistant', content: response.data.content })

      let storedMessages = localStorage.getItem('stored-messages');
      let parsedMessages = storedMessages ? JSON.parse(storedMessages) : [];
      const updatedMessages = [...parsedMessages, ...tempChats];
      localStorage.setItem('stored-messages', JSON.stringify(updatedMessages));
    }
    catch (error) {
      showError(' AlphaGPT is under maintenance!');
    }
    setLoading(false);
  }
}

  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
      let storedMessages = localStorage.getItem('stored-messages');
      if (storedMessages) {
        let parsedMessages = JSON.parse(storedMessages);
        setMessages(parsedMessages);
      }
  }, [localStorage.getItem('stored-messages')]);


  const handleAskGPT = async (userInput) => {
    try{
      const verifyResult = await verifyToken();

      if(!verifyResult.success){
        dispatch(toggelUserLoginFalse);
        return;
      }
    }catch(error){
      dispatch(toggelUserLoginFalse);
      return;
    }
    await askAlpha(userInput,setLoading, showError);
  };


  const showError = (notification) => {
    toast.error(
      notification
        ? notification
        : 'Something Went Wrong, Please Try Again!',
        {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }
    );
  };

  return (
    <div className=' min-h-[50px] h-full flex flex-col flex-1 w-full p-2 rounded-md  bg-algoblack'>
      <div className={`gpt-output-console transition-all duration-1000 ease-in-out flex-grow w-full p-2 overflow-auto border-b border-gray-400 mb-2 h-[100%] bg-algoblack`}>
        {
          messages.map((message, index) => (
           <div className={`gpt-window-text flex-1 rounded-md flex mb-4 bg-transparent w-[full] font-mono ${message.role === 'user' ? 'flex-row' : 'flex-row-reverse'} border-b border border-gray-700 items-center`}>
              <div className={` flex whitespace-pre-line w-full font-mono h-full p-2 text-[1rem] font-normal tracking-wide text-[white] dark:text-white overflow-hidden w-full ${message.role === 'user' ? ' justify-end' : ' justify-start ' }`}>
                {
                  <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{ width:"100%", borderRadius: "8px", fontSize: "16px", padding: "12px", overflow: "hidden", textAlign: `${message.role === 'user' ? 'right' : 'left'}`, }} style={tomorrowNightBlue}>
                    {/* {formattedData} */}
                  </SyntaxHighlighter>
                }
              </div>

              <div className='h-full m-1 w-8 justify-start align-top text-center'>
                {message.role === 'user' ? (
                  <h1 className="tracking-wide font-bold antialiased text-algoprob text-2xl hover:duration-300 hover:scale-125">U</h1>
                ) : (
                  <h1 className="tracking-wide font-bold antialiased text-algoprob text-2xl hover:duration-300 hover:scale-125">X</h1>
                )}
              </div>
            </div>
          ))
        }
      </div>
        <AlphaGPTSearchBar sendRequest={handleAskGPT} loading={loading} />
    </div>
  );
};

export default AlphaGPTWindow;
