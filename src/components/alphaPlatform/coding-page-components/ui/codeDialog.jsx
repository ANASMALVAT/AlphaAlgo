import React ,{useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector,useDispatch } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { closeUserSubmissionDialog } from '../../../../redux/slices/userSubmission';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));



export default function CodeDialog() {

  const userSubmission = useSelector((state) => state.userSubmission.userSubmission);
  const [open, setOpen] = React.useState(false);
  const [code,setCode] = useState("");
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    dispatch(closeUserSubmissionDialog());
    setOpen(false);
  };


  useEffect(() => {
    console.log(userSubmission.code);
    setCode(() => { return userSubmission.code; })
    if(userSubmission.viewDialog){
        handleClickOpen();
    }
  },[userSubmission.code])


  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className=' bg-transparent'
      >

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 10,
            fontWeight:"bold",
          }}
          
        >
          <CloseIcon  className=' cursor-pointer transition-all duration-200 hover:text-white  text-zinc-200' />
        </IconButton>

        <DialogContent  dividers className= 'custom-scrollbar  rounded-none bg-[#4C5ADF]'>
            <div className=' flex gap-2'>
            <CopyToClipboard text={code}>
                <ContentCopyIcon className=' cursor-pointer transition-all duration-200 hover:text-white  text-zinc-300' color='white' fontSize='small'/>
            </CopyToClipboard>

            </div>
          <div className=' flex mt-3 '>
            <SyntaxHighlighter language="python" wrapLongLines={true} customStyle={{ fontSize:"16px", borderRadius:"4px",width:"100%",textAlign:"justify",overflow:"hidden",padding:"15px",marginTop:"25px"}} style={tomorrowNightBlue}>
                  {code}
            </SyntaxHighlighter>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}