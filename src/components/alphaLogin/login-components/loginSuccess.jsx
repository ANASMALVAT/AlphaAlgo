import React, { useEffect } from 'react'
import { toggelUserLoginTrue } from '../../../redux/slices/userAuthentication';
import { useSelector,useDispatch } from 'react-redux';

export function LoginSuccess() {
    
    useEffect(() => {
        setTimeout(()=> {
            window.close();
        },1000);
    },[])

    return (
    <>
    <div> Logged In</div>
    </>
    )
}