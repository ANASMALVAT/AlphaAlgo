import * as React from 'react';
import { Textarea } from '@mui/joy';


const CustomInput = () => {
    
    return (
    <div className='h-full'>
        <Textarea
            placeholder="Custom Input"
            variant="soft"
            className = {"z-0 rgba(255,255,255)"}
            style = {{color:"white"}}
            sx={{
                height: '100%',
                maxHeight: '100vh',
                minHeight: '275px',
                '--Textarea-focusedThickness': '0rem',
                '--Textarea-focusedHighlight': 'white',
                "borderRadius":"2px",
                background: "#1c283b",
                '--Textarea-focused': 1,
                '&::before': {
                transition: 'box-shadow .10s ease-in-out',
                },
                '&:focus-without': {
                        color:'white',
                    },
                '&:focus-within': {
                    color:'white',
                },
                
                'input': {
                    '&::placeholder': {
                      textOverflow: 'ellipsis !important',
                    }
                }
            }}
        />

    </div>
    )
}

export default CustomInput;
  


