import React, { useState }  from 'react'
import GoogleButton from 'react-google-button';
import SignInComponent from './signInComponent';
const LoginComponent = ({redirectGoogleSSO}) => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [isSignUp, setIsSignUp] = useState(false);

    const toggelSignIn = () => {
        setIsSignIn(isSignIn => true);
        setIsSignUp(isSignUp => false);
    }

    const toggelSignUp = () => {
        setIsSignIn(isSignIn => false);
        setIsSignUp(isSignUp => false);
    }
    
    return (
        <div className='flex flex-col rounded-lg bg-[#00182D] h-[350px] w-[375px] '>
                {/* <div className='flex mt-4 items-center justify-center gap-1'>
                    <button onClick={toggelSignIn} className={`w-28 r h-12 ${isSignIn === true ? 'bg-[#3E49B4]' : 'bg-[#002451]'} rounded-l-full rounded-r-md text-white`}><h2 className='text-xl'>Sign In</h2></button>
                    <button onClick={toggelSignUp} className={`w-28 r h-12 ${isSignUp === true ? 'bg-[#3E49B4]' : 'bg-[#002451]'} rounded-r-full rounded-l-md text-white`}><h2 className='text-xl'>Sign Up</h2></button>
                </div>

                {isSignIn && <SignInComponent/>} */}
                <h2 className='text-white mt-4 text-5xl'>Sign In </h2>
                <GoogleButton
                    style={{margin:"auto" ,borderRadius:"2px",fontWeight:"bold" ,width:"225px",fontSize:"18px",fontFamily:"monospace",'.&hover':'translateY(20px)'}}
                    label='Google'
                    onClick={redirectGoogleSSO}
                />
        </div>
    )

}


export default LoginComponent;