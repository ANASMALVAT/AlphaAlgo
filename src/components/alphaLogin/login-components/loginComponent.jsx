import React, { useState,useEffect }  from 'react'
import {GoogleLogin} from "react-google-login";
import GitHubLogin from 'react-github-login';
import { userAuthenticationGoogle } from '../../../services/userAuthenticationGoogle';
import { userAuthenticationGithub } from '../../../services/userAuthenticationGithub';
import {GithubLoginButton} from 'react-social-login-buttons'
import {LoginSocialFacebook} from 'reactjs-social-login';
import {FacebookLoginButton} from 'react-social-login-buttons'

import { toast } from 'react-toastify';
import { gapi } from 'gapi-script';

const LoginComponent = () => {

  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const facebookClientId = process.env.REACT_APP_FACEBOOK_CLIENT_ID;


  const githubRedirectUri = process.env.REACT_APP_GITHUB_REDIRECT_URL;
  
  const setCookieAndToken = (response) => {
    window.localStorage.setItem('csrf-token',response.data.csrfToken);
    window.location.reload();
  }


  const onGoogleSuccess = async (res) => {
    const token = res.tokenObj;
    const response = await userAuthenticationGoogle(token.access_token, token.id_token);
    if(response.success){
      setCookieAndToken(response.response);
    }
    else{
      toast("Error occured during login!")
    }
  }

  const onGoogleFailure = (res) => {
    toast("Error occured during login!")
  }

  const onGithubSuccess = async (res) => {
    const code = res.code;
    const response = await userAuthenticationGithub(code);
    if(response.success){
      setCookieAndToken(response.response);
    }
    else{
      toast("Error occured during login!")
    }
  }

  const onGithubFailure = (res) => {
    toast("Error occured during login!")
  }

  function startGoogle(){
        gapi.client.init({
            clientId: googleClientId,
            scope:""
        })
  }

  const loadGoogleapi = () => {
    gapi.load('client:auth2',startGoogle);
  }


    return (
        
        <div className='flex flex-col rounded-lg   bg-[#FFFFFF] h-[325px] w-[300px] border-t-[5px] border-[#626EE3] '>
                <div className=' !font-thin w-[225px] mx-auto mb-4  h-1/4 flex flex-col text-left justify-center mt-4'>
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl dark:text-white">
                    Sign in to Alpha Algo
                  </h1>
                </div>

                <div className=' flex  flex-col justify-center mt-2 gap-2 rounded-md items-center'>
                  <GoogleLogin
                      className=' w-[225px] m-auto  font-semibold text-center placeholder:font-semibold text-white placeholder-gray-200::placeholder	'
                      clientId={googleClientId}
                      onSuccess={onGoogleSuccess}
                      onFailure={onGoogleFailure}
                      cookiePolicy='single_host_origin'
                      onClick={loadGoogleapi}
                      >
                      <span className='text-gray-800 font-normal  text-[16px] ml-1'>Google</span>
                      </GoogleLogin>

                        <GitHubLogin 
                          clientId={githubClientId}
                          redirectUri={githubRedirectUri}
                          onSuccess={onGithubSuccess}
                          onFailure={onGithubFailure} >
                            <GithubLoginButton style={{background:"black",color:"white",height:"45px",width:"225px",fontSize:"15px"}}  iconColor='white' className='  !hover:bg-black' >
                                <span className='text-gray-100 font-normal  text-[16px] ml-2'>GitHub</span>
                            </GithubLoginButton>
                        </GitHubLogin>

{/* 
                        <LoginSocialFacebook
                        appId={facebookClientId}
                        onResolve={onFacebookSuccess}
                        onReject={onFacebookFailure}
                        >
                          <FacebookLoginButton
                            style={{ background:"#1877F2", height:"45px",width:"225px",fontSize:"15px",marginTop:"10px" }}  iconColor='white'
                          >
                            <span className='text-gray-100 font-normal  text-[16px] ml-2'>Facebook</span>
                          </FacebookLoginButton>
                        </LoginSocialFacebook> */}
                </div>
        </div>
    )

}


export default LoginComponent;