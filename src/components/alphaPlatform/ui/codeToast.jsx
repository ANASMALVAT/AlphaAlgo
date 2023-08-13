import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const CodeToast = ({type,notification}) => {

    if(type == "error"){
            toast.error(notification ? notification : `Something Went Wrong, Please Try Again!`,
            {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
    }
    else{
        toast.success(notification ? notification : `Compiled Successfully!`,
            {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
    }
    
    return (
        <>
        <ToastContainer
            autoClose={4000}
            position= "top-right"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover>
        </ToastContainer>
        </>
    )
}

export default CodeToast;
