import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { useDispatch, useSelector } from 'react-redux';

const UserLogin = () => {

    const loginButton = useSelector((state) => state.userLoginComponent.showLogin);
    return (
        <div className=' h-96 w-60'>
             <Popup
                trigger = {
                    <button className={`what-button overflow-hidden mt-6 mb-8 flex flex-row items-center text-center align-middle  rounded-sm px-6  font-mono font-normal justify-center text-white border bg-[#4C5ADF] hover:duration-300 border-b-8 border-[#4C5ADF]`}>
                        Explore 
                        <h1 className="ml-2 logo-com-3 font-bold antialiased text-[#2D33CA] hover:duration-300 hover:scale-125"> X </h1>
                    </button>
                }
                closeOnDocumentClick
                modal
                >
                {
                    close => (
                    )}
            </Popup>
        <div>
    </div>
    </div>
  
    )
}

export default UserLogin;