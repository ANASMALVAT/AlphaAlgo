import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function AlphaGPTSearchBar({sendRequest,handleInputChange}) {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', background:'transparent',border:'1px solid #5867EA', alignItems: 'center', height:"80%", width: '100%' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color:'white', fontWeight:'normal',fontFamily:'monospace'}}
        placeholder="AlphaGPT"
        inputProps={{ }}
        onChange={handleInputChange}

      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={sendRequest}>
        <SendIcon  sx={{color:"#5867EA"}} />
      </IconButton>
    </Paper>
  );
}