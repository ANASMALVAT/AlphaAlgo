import React, { useEffect, useState } from 'react';
import AlphaGPTSearchBar from './alphaGptSearchBar';
import AlphaGptWindowText from './alphaGptWindowText';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {useSelector} from "react-redux"

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


  const smartMessage = ` Keep the explanation concise and brief, and give a simple example.`;

  const askGPT = async (userInput) => {
    if (userInput.trim() !== '') {
      setLoading(true);
      let currentChats = chats;
      currentChats.push({ role: 'user', content: userInput + smartMessage });
      setChats(currentChats);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'User', text: userInput },
      ]);
      try {
        const response = await axios.post('http://localhost:5000/api/alpha-gpt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          currentChats,
        });

        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'Bot', text: response.data.content },
        ]);

        currentChats.push({ role: 'assistant', content: response.data.content });
        setChats(currentChats);
      } catch (error) {
        showError('Under Maintenance!');
      }

      setLoading(false);
    }
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

      <div className={`gpt-output-console ${windowHeight === 0 ? 'h-[100px]' :windowHeight === 1 ? 'h-[250px]' : 'h-[425px]'} transition-all duration-700 ease-in-out flex-grow w-full p-2 border border-gray-600 mb-2 rounded-md overflow-auto h-[100%]`}>
        {messages.map((message, index) => (
          <AlphaGptWindowText
            key={index}
            data={message.text}
            type={message.type}
          />
        ))}

      </div>

        <AlphaGPTSearchBar sendRequest={askGPT} loading={loading} />

    </div>
  );
};

export default AlphaGPTWindow;
