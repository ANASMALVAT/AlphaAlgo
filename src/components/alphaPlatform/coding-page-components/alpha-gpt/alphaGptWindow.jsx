import React, { useEffect, useState } from 'react';
import AlphaGPTSearchBar from './alphaGptSearchBar';
import AlphaGptWindowText from './alphaGptWindowText';
import { verifyToken } from '../../../../services/verifyToken';
import { toggelUserLoginFalse } from '../../../../redux/slices/userAuthentication';
import {useSelector, useDispatch} from "react-redux"
import { askAlpha } from '../../api/askAlpha';
import { toast } from 'react-toastify';

import './styles/alphaGptWindow.css';

const AlphaGPTWindow = () => {

  const layoutValue = useSelector((state) => state.layoutValue);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);
  const [windowHeight, setWindowHeight] = useState(layoutValue.toggelHeight);
  const dispatch = useDispatch();
  
  useEffect(() => {
    setWindowHeight(layoutValue.toggelHeight);
  },[layoutValue.toggelHeight])

  useEffect(()=>{
    let storedMessages = localStorage.getItem('stored-messages',messages);
    if(storedMessages){
      let parsedMessages = JSON.parse(storedMessages);
      setMessages(parsedMessages);
    }
  },[])

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
    await askAlpha(userInput, chats, setChats, setMessages, messages,setLoading, showError);
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
    <div className='max-h-[500px] h-full flex flex-col flex-1 w-full   p-2 rounded-md border border-gray-600'>

      <div className={`gpt-output-console h- ${windowHeight === 0 ? 'h-[25px]' :windowHeight === 1 ? 'h-[250px]' : 'h-[425px]'} transition-all duration-1000 ease-in-out flex-grow w-full p-2 border border-gray-600 mb-2 rounded-md overflow-auto h-[100%]`}>
        {
          messages.map((message, index) => (
            <AlphaGptWindowText
              key={index}
              data={message.text}
              type={message.type}
            />
          ))
        }

      </div>
        <AlphaGPTSearchBar sendRequest={handleAskGPT} loading={loading} />
    </div>
  );
};

export default AlphaGPTWindow;
