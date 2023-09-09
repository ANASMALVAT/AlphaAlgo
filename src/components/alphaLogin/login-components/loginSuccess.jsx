import React, { useEffect } from 'react'

export function LoginSuccess() {
    useEffect(()=> {
        setTimeout(() => {
            window.close();
        },500);
    },[]);
    return (
    <>
    </>
    )
}