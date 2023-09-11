import React, { useEffect, useState } from 'react';
import AlphaGPTSearchBar from './alphaGptSearchBar';
import AlphaGptWindowText from './alphaGptWindowText';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {useSelector} from "react-redux"
import { askAlpha } from '../../api/askAlpha';
import './styles/alphaGptWindow.css';

const AlphaGPTWindow = () => {

  const layoutValue = useSelector((state) => state.layoutValue);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);
  const [windowHeight, setWindowHeight] = useState(layoutValue.toggelHeight);
 
  
  useEffect(() => {
    setWindowHeight(layoutValue.toggelHeight);
  },[layoutValue.toggelHeight])



  const handleAskGPT = async (userInput) => {
    await askAlpha(userInput, chats, setChats, setMessages, setLoading, showError);
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
    <div className='h-full flex flex-col flex-1 w-full bg-algoblack p-2 rounded-md border border-gray-600'>

      <ToastContainer />

      <div className={`gpt-output-console h- ${windowHeight === 0 ? 'h-[125px]' :windowHeight === 1 ? 'h-[250px]' : 'h-[450px]'} transition-all duration-700 ease-in-out flex-grow w-full p-2 border border-gray-600 mb-2 rounded-md overflow-auto h-[100%]`}>
        {messages.map((message, index) => (
          <AlphaGptWindowText
            key={index}
            data={message.text}
            type={message.type}
          />
        ))}

      </div>

        <AlphaGPTSearchBar sendRequest={handleAskGPT} loading={loading} />

    </div>
  );
};

export default AlphaGPTWindow;
