import React from 'react';
import { useState} from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';


import "../../styles/alphaGptSearchBar.css"

export default function AlphaGPTSearchBar({sendRequest, loading}) {

  const [userInput, setUserInput] = useState(``);

  const handleUserInput = (value) => 
  {
    setUserInput(value);
    console.log(userInput);
  }

  return (

      <Paper
          component="form"
          sx={{ display: 'flex', background:'transparent', borderRight:'1px solid white', alignItems: 'center', height:"80%", width: '100%' }}
        >

        <textarea 
        className=' text-area bg-transparent w-full rounded-[0.25rem] h-full border border-gray-50 text-white' 
        placeholder='AlphaGPT' 
        onChange={(event) => {handleUserInput(event.target.value)}}
        value={userInput}
        >
        </textarea>
        
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <IconButton disabled = {loading} color="primary" sx={{ p: '10px',}} aria-label="directions" onClick={ () => { sendRequest(userInput); setUserInput(""); } }>
          { 
          loading ? <CircularProgress x={{color:"white", fontWeight:"bold",fontSize:"30px"}} disableShrink color="secondary"/>
                  : <SendIcon  sx={{color:"white", fontWeight:"bold",fontSize:"30px"}} />
          }
        </IconButton>

      </Paper>
  );
}