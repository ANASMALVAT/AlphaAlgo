import React , {useEffect, useState}  from 'react';
import axios from "axios";
import Popup from 'reactjs-popup';
import { useSelector,useDispatch } from 'react-redux';
import { toggelLoginWindow } from '../../../redux/slices/userComponentSlice';
import { retrieveToken} from "./api/api"
import { toggelUserLoginFalse, toggelUserLoginTrue } from '../../../redux/slices/userAuthentication';
import GoogleButton from 'react-google-button'


import "../styles/userLogin.css"

const UserLogin = () => {

    const AUTHENTICATION_URL = process.env.REACT_APP_AUTHENTICATION_URL;
    const TOKEN_URL = process.env.REACT_APP_TOKEN_URL;
    const LoginButton = useSelector((state) => state.userLoginWindow.showLoginWindow);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(toggelLoginWindow());
    };

    const fetchAuthUser = async () => {
        const response = await axios.get(TOKEN_URL, {withCredentials : true})

        .catch((err) => {
            dispatch(toggelUserLoginFalse());
        })

        if(response && response.data){
            console.log(response.data);
        }

    }
    
    const redirectGoogleSSO = async () => {
        const newWindow = window.open(AUTHENTICATION_URL, '_blank', 'width=600,height=600');
        let timer = null;
        timer = setInterval(() => {
            if(newWindow.closed){
                dispatch(toggelUserLoginTrue());
                fetchAuthUser();
                if(timer) clearInterval(timer);
            }
        },500);
    }

    return (
            <Popup
                closeOnDocumentClick
                open={LoginButton}
                onClose={handleClose}
                className='popup-content-main'
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