import React, {useState} from 'react';
import AlphaGPTSearchBar from '../ui/alphaGptSearchBar';
import AlphaGptWindowText from '../ui/alphaGptWindowText';
import axios from 'axios';
import { ToastContainer,toast } from "react-toastify";

import "../../styles/alphaGptWindow.css";
 
const AlphaGPTWindow = () => {
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const [chats, setChats] = useState([]);


    const  askGPT = async (userInput) => {
        
        if(userInput.trim() !== "")
        { 

            setLoading(load => {
                return true;
              });

            let currentChats = chats;
            currentChats.push({role:"user",content: userInput});
            setChats(currentChats);

            setMessages(prevMessages => [
                ...prevMessages,
                { type: "User", text: userInput }
              ]);

            await axios.post("http://localhost:5000/api/alpha-gpt", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                currentChats
            })
            .then((response) => {

                setMessages(prevMessages => [
                    ...prevMessages,
                    { type: "Bot", text: response.data.content } 
                ]);

                currentChats.push({role:"assistant",content: response.data.content});
                setChats(currentChats);
                setLoading(load => {
                    return false;
                  });

                }).catch((error) => {

                    showError(" Under Maintainence!");
            })
        }
        else{

        }
    }

    const showError = (notification) =>{

        toast.error(notification ? notification : `Something Went Wrong, Please Try Again!`,
          {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
    }


    return (
        <>
        <ToastContainer/>
        <div className='h-full  w-full  bg-algoblack flex flex-col p-2 rounded-md  border border-gray-600'>
            <div id='output-window' className='gpt-output-console w-full whitespace-pre-line min-h-[350px] h-[80%] w-full p-2 border border-gray-600 mb-2 rounded-md overflow-auto'>
                {
                    messages.map((message,index) => 
                        {
                            return <AlphaGptWindowText key={index} data={message.text} type={message.type} />
                        }
                    )
                }
            </div>
            <div id='text-input' className=' h-[20%] w-full rounded-sm flex flex-row items-center  '>
                <AlphaGPTSearchBar  sendRequest={askGPT} loading={loading}/>
            </div>
        </div>
        </>
    )
}

export default AlphaGPTWindow;
