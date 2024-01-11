import React ,{useEffect}  from 'react';
import Popup from 'reactjs-popup';
import { useSelector,useDispatch } from 'react-redux';
import { toggelLoginWindowFalse } from "../../../redux/slices/userComponentSlice";
import LoginComponent from './loginComponent';
import { gapi } from 'gapi-script';
import "../styles/userLogin.css"

const UserLogin = () => {
    
    const dispatch = useDispatch();
    const LoginButton = useSelector((state) => state.userLoginWindow.showLoginWindow);

    const handleClose = () => {
        dispatch(toggelLoginWindowFalse());
    };
    
    return (
            <Popup
                closeOnDocumentClick
                open={LoginButton}
                onClose={handleClose}
                className=' my-popup'
            >
            {
                <div className="modal min-w-[500px] max-w-[500px]">
                    <LoginComponent />
                </div>
            }
            </Popup>
    )
}

export default UserLogin;