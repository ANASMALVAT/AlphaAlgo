import React   from 'react';
import axios from "axios";
import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';
import { useSelector,useDispatch } from 'react-redux';
import { toggelLoginWindowFalse } from "../../../redux/slices/userComponentSlice";
import LoginComponent from './loginComponent';


import "../styles/userLogin.css"

const UserLogin = () => {

    const AUTHENTICATION_URL = process.env.REACT_APP_AUTHENTICATION_URL;
    
    const LoginButton = useSelector((state) => state.userLoginWindow.showLoginWindow);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(toggelLoginWindowFalse());
    };
    
    const redirectGoogleSSO = async () => {
        try{
            const response = await axios.get(AUTHENTICATION_URL);
            window.location.href = response.data;
        }
        catch(err){
            toast("AlphaAlgo is under maintainence!");
        }
    }

    return (
            <Popup
                closeOnDocumentClick
                open={LoginButton}
                onClose={handleClose}
                className=' my-popup'
            >
            {
            close => (
                <div className="modal min-w-[500px] max-w-[500px]">
                    <LoginComponent redirectGoogleSSO={redirectGoogleSSO} />
                </div>
                )}
            </Popup>
    )
}

export default UserLogin;