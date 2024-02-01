import React, { useEffect, useState } from 'react';
import AlphaGPTSearchBar from './alphaGptSearchBar';
import AlphaGptWindowText from './alphaGptWindowText';
import { verifyToken } from '../../../../services/verifyToken';
import { toggelUserLoginFalse } from '../../../../redux/slices/userAuthentication';
import { useDispatch} from "react-redux"
import { askAlpha } from '../../api/askAlpha';
import { toast } from 'react-toastify';

import './styles/alphaGptWindow.css';

const AlphaGPTWindow = () => {

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
            <AlphaGptWindowText
              key={index}
              data={message.content}
              type={message.role}
            />
          ))
        }
      </div>
        <AlphaGPTSearchBar sendRequest={handleAskGPT} loading={loading} />
    </div>
  );
};

export default AlphaGPTWindow;
