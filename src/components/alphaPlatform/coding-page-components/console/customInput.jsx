import * as React from 'react';
import { Textarea } from '@mui/joy';
import { TextareaAutosize } from '@mui/base';
import "./styles/customInput.css"

const CustomInput = () => {
  return (
    <div className='h-full w-full flex-grow'>
      <TextareaAutosize className=" boxSizing-borderBox scroll-bar" 
      style=
        {{
        width:'100%',
        height:'95%', 
        scrollbarWidth: '4px', 
        scrollbarColor : '#4C5ADF #011627',
        border:"none", color:"white",
        background:'transparent'}} 
        placeholder="Custom Input"
      />
    </div>
  );
}

export default CustomInput;
