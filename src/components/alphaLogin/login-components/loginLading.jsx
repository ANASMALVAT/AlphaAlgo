import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


export function LoginSuccess() {

    let { token } = useParams();

    useEffect(() => {
        const parentWindow = window.opener;
        if (parentWindow) {
            parentWindow.localStorage.setItem('csrf-token', token);
        }
        setTimeout(() => {
            window.close();
        }, 500); 
    }, [token]);

    return (<></>);

}
