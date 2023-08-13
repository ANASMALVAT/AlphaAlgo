import * as React from 'react';
import { Textarea } from '@mui/joy';
import { ClassNames } from '@emotion/react';

const CustomInput = () => {
    
    return (
    <div className= " mb-2 w-full border-separate m-1 ">
        <Textarea
            placeholder="Custom input..."
            variant="soft"
            minRows={8}
            className = {"z-0 h-36 boxShadow: 5px 5px 0px 0px rgba(255,255,255)"}
            style = {{color:"white"}}
            sx={{
                
                '--Textarea-focusedThickness': '0rem',
                '--Textarea-focusedHighlight': 'white',
                "borderRadius":"2px",
                background: "#1c283b",
                '--Textarea-focused': 1,
                '&::before': {
                transition: 'box-shadow .10s ease-in-out',
                },
                '&:focus-without': {
                    // borderColor: 'white',
                        color:'white',
                    },
                '&:focus-within': {
                // borderColor: 'white',
                    color:'white',
                },
                
                'input': {
                    '&::placeholder': {
                      textOverflow: 'ellipsis !important',
                      color: 'white'
                    }
                }
            }}
        />
        </div>   
    )
}

export default CustomInput;
  


