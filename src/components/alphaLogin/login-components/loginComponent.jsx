import React, { useState,useEffect }  from 'react'
import {GoogleLogin} from "react-google-login";
import { useDispatch } from 'react-redux';
import { userAuthentication } from '../../../services/userAuthentication';
import { toast } from 'react-toastify';
import { gapi } from 'gapi-script';

const LoginComponent = () => {

  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  
  const setCookieAndToken = (response) => {
    window.localStorage.setItem('csrf-token',response.data.csrfToken);
    window.location.reload();
  }

  const onSuccess = async (res) => {
    const token = res.tokenObj;

    const response = await userAuthentication(token.access_token, token.id_token);
    
    if(response.success){
      setCookieAndToken(response.response);
    }
    else{
      toast("Error occured during login!")
    }
  }

  const onFailure = (res) => {
    toast("Error during login!");
  }


  function start(){
        gapi.client.init({
            clientId: clientId,
            scope:""
        })
  }

  const loadGapi = () => {
    gapi.load('client:auth2',start);
  }

    return (
        
        <div className='flex flex-col rounded-lg bg-[#FFFFFF] h-[375px] w-[300px] border-t-[5px] border-[#626EE3] '>
                <div className=' !font-thin w-full h-1/3 flex flex-col text-center justify-center mt-4'>
                    <h2 className=' !font-normal !text-[24px] sm:text-xl  md:text-xl  mb-2 text-gray-800'> Sign in to</h2>
                    <h2 className=" font-normal  text-gray-800 text-4xl">Alpha Algo </h2>
                </div>
                <div className=' flex justify-center mt-6 rounded-md items-center'>
                  <GoogleLogin
                      className=' w-[225px] m-auto  font-semibold text-center placeholder:font-semibold text-white placeholder-gray-200::placeholder	'
                      clientId={clientId}
                      buttonText='Google'
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy='single_host_origin'
                      onClick={loadGapi}
                      >
                  </GoogleLogin>
                </div>
        </div>
    )

}


export default LoginComponent;