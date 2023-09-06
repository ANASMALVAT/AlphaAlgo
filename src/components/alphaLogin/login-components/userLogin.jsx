import React , {useEffect}  from 'react';
import Popup from 'reactjs-popup';
import { useSelector,useDispatch } from 'react-redux';
import { toggelLogin } from '../../../redux/slices/userComponentSlice';
import GoogleButton from 'react-google-button'
import "../styles/userLogin.css"

const UserLogin = () => {

    const loginButton = useSelector((state) => state.userLoginComponent.showLogin);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(toggelLogin());
    };

    return (
        <Popup
            // modal
            closeOnDocumentClick
            open={loginButton}
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
                     />

                </div>
            </div>
            )}
        </Popup>
    )
}

export default UserLogin;