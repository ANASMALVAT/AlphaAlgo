import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggelUserLoginTrue } from '../../../redux/slices/userAuthentication';
import { toggelLoginWindowFalse } from "../../../redux/slices/userComponentSlice";


export function LoginSuccess() {
    let { token } = useParams();
    const dispatch = useDispatch();

    const fetchAuthUser = async () => {

        dispatch(toggelUserLoginTrue());
        dispatch(toggelLoginWindowFalse());

    }

    useEffect(() => {
    
        window.localStorage.setItem('csrf-token', token);
        fetchAuthUser();
        setTimeout(() => {
            window.location.href = '/';
        }, 200);

    }, [token]);

    return (<></>);
}
