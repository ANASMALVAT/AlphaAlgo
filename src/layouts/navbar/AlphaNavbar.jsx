import React from "react";
import NavLinks from "./navLinks";
import SideNav from "./sideNav";
import { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggelLoginWindowTrue } from "../../redux/slices/userComponentSlice";
import { toggelUserLoginFalse } from "../../redux/slices/userAuthentication";
import UserLogin from "../../components/alphaLogin/login-components/userLogin";
import { showNotification } from "../../redux/slices/alphaNotification";

import "../navbar/styles/AlphaNavbar.css"

const AlphaNavbar  = () => {
    const [sideNav,setSideNav] = useState(false);
    const [showLoginButton, setShowLoginButton] = useState(false);

    const dispatch = useDispatch();
    const IsUserLoggedIn = useSelector((state) => state.userLogin.userLogin);
    const AlphaNotification = useSelector((state) => state.alphaNotification);
    
    useEffect(()=>{
      if(AlphaNotification.Notification != ""){

        toast(AlphaNotification.Notification);

        setTimeout(() => {
            dispatch(showNotification({ Notification: "" }));
          }, 3000);
      }
    },[AlphaNotification.Notification]);


    setTimeout(() => {
        setShowLoginButton(true);
      }, 1000);

    const openNav = () => {
        setSideNav(true);
    }
    const closePane = () => {
        setSideNav(false);
    }

    const showLogin = () => {
        dispatch(toggelLoginWindowTrue());
    }

    const logout = async () => {
        localStorage.clear();
        dispatch(toggelUserLoginFalse());
    }

    return (
        <>
            <UserLogin />
            <SideNav isOpen={sideNav} onRequestClose={closePane}/>

            <div className=" h-20 w-full bg-[#00182D] flex flex-row  flex-grow p-2 items-center m-auto  justify-evenly">

                    <div id="sideNav" className="sideNav max-w-[150px] text-white ml-8">
                        <button onClick={openNav}>
                            <MenuIcon />
                        </button>
                    </div>

                    <div className="logo max-w-[200px] min-w-[100px] justify-center align-bottom items-center  overflow-hidden">
                        <div className="flex flex-row justify-center">
                            <h1 className=" flex  items-center tracking-wide font-normal antialiased text-[white] text-2xl  text-center">A</h1>
                                <Link
                                to="/"
                                className="tracking-wide font-bold antialiased text-algoXcolor text-5xl hover:duration-[1500ms] hover:rotate-[360deg]"
                                >
                                X
                                </Link> 
                            <h1 className="flex items-center  tracking-wide font-normal antialiased text-[white] text-2xl text-center">A</h1>
                        </div>
                    </div>

                    <div id="nav" className="nav w-[45%]  max-w-[400px] h-full flex justify-center items-center "> 
                        <NavLinks/>
                    </div>

                    { !showLoginButton && <div  className="w-[175px] min-w-[40px] h-full justify-center align-bottom text-center opacity-0"></div> }

                    {
                    showLoginButton && 
                    (
                        IsUserLoggedIn ? 
                        (
                            <div id="logout" className="w-[175px] min-w-[40px] h-full justify-center align-bottom text-center">
                                <button onClick={logout} className="login-ul flex h-full w-[120px] flex-row hover:duration-100 text-white justify-between p-2 items-center text-center pl-12 pr-12">
                                    <div className="font-mono font-semibold italic text-xl hover:duration-100 p-1 rounded-md hover:border-2 border-[#4C5ADF]" href="#">
                                        Logout
                                    </div>
                                </button>
                            </div>
                        ) : 
                        (
                            <div id="login" className=" w-[175px] min-w-[40px] h-full justify-center align-bottom text-center">
                                <button onClick={showLogin} className="login-ul flex h-full w-[120px] flex-row hover:duration-100 text-white justify-between p-2 items-center text-center pl-12 pr-12">
                                    <div className="font-mono font-semibold italic text-xl hover:duration-100 p-1 hover:border-b-4 border-algoXcolor" href="#">
                                        Login
                                    </div>
                                </button>
                            </div>
                        )
                    )}
            </div>
        </>
    )
}

export default AlphaNavbar;