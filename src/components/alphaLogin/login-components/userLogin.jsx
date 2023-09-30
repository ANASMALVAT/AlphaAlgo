import React , {useEffect, useState}  from 'react';
import axios from "axios";
import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';
import { useSelector,useDispatch } from 'react-redux';
import { toggelLoginWindowFalse } from "../../../redux/slices/userComponentSlice";
import { toggelUserLoginTrue } from '../../../redux/slices/userAuthentication';
import GoogleButton from 'react-google-button'


import "../styles/userLogin.css"

const UserLogin = () => {

    const AUTHENTICATION_URL = process.env.REACT_APP_AUTHENTICATION_URL;
    
    const LoginButton = useSelector((state) => state.userLoginWindow.showLoginWindow);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(toggelLoginWindowFalse());
    };

    const fetchAuthUser = async () => {

        dispatch(toggelUserLoginTrue());
        dispatch(toggelLoginWindowFalse());

    }
    
    const redirectGoogleSSO = async () => {
        try{
        const response = await axios.get(AUTHENTICATION_URL);
        const newWindow = window.open(response.data, '_blank', 'width=600,height=600');
        const checkClosedInterval = setInterval(() => {
            if (newWindow && newWindow.closed) {
                clearInterval(checkClosedInterval);
                if(localStorage.getItem('csrf-token')){
                    fetchAuthUser();
                }
            }
        }, 500); 
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
                <div className="modal">
                    <div className="header">
                        <div>
                            <button className="close" onClick={close} style={{color:"red",fontSize:"40px",marginRight:"20px",fontWeight:"bolder"}}>
                                &times;
                            </button>
                        </div> 
                    </div>
                    <div className="content max-h-[400px] max-w-[400px]">
                        <div>
                            <div className="plex-sans flex flex-row items-center justify-center ">
                                <div className="sign-name  tracking-wide font-normal  antialiased text-[black] ">Sign in to</div>
                            </div>
                            <div className="plex-sans flex flex-row items-center mb-12 mt-2">
                                <div className="sign-logo-name  tracking-wide font-normal antialiased text-[#4C5ADF] ">AlphaAlgo</div>
                            </div>
                        </div>
                        <GoogleButton
                            style={{borderRadius:"2px",fontWeight:"bold" ,width:"225px",fontSize:"18px",fontFamily:"monospace",'.&hover':'translateY(20px)'}}
                            label='Google'
                            onClick={redirectGoogleSSO}
                        />
                    </div>
                </div>
                )}
            </Popup>
    )
}

export default UserLogin;