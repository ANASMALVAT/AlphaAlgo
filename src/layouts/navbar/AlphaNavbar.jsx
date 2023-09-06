import React from "react";
import NavLinks from "./navLinks";
import SideNav from "./sideNav";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggelLogin } from "../../redux/slices/userComponentSlice";
import UserLogin from "../../components/alphaLogin/login-components/userLogin";

import "../navbar/styles/AlphaNavbar.css"

const AlphaNavbar  = () => {
    const [sideNav,setSideNav] = useState(false);
    const dispatch = useDispatch();

    const openNav = () => {
        setSideNav(true);
    }
    const closePane = () => {
        setSideNav(false);
    }

    const showLogin = () => {
        console.log("login");
        dispatch(toggelLogin());
    }
    return (
        <>
            <UserLogin />
            <SideNav isOpen={sideNav} onRequestClose={closePane}/>

            <div className=" h-20 w-full bg-[#00182D] flex flex-row  flex-grow p-2 items-center m-auto  justify-between">

                    <div id="sideNav" className="sideNav max-w-[150px] text-white ml-8">
                        <button onClick={openNav}>
                            <MenuIcon />
                        </button>
                    </div>

                    <div id="logo" className="logo w-[25%] min-w-[100px] justify-center align-bottom items-center h-full  overflow-hidden">
                        <div className="flex flex-row justify-center items-center">
                            <h1 className="tracking-wide font-normal antialiased text-[white] text-3xl">A</h1>
                                <Link
                                to="/"
                                className="tracking-wide font-bold antialiased text-[#4C5ADF] text-6xl hover:duration-500 hover:rotate-[900deg]"
                                >
                                X
                                </Link> 
                            <h1 className=" tracking-wide font-normal antialiased text-[white] text-3xl">A</h1>
                        </div>
                    </div>

                    <div id="nav" className="nav w-[45%]  max-w-[400px] h-full"> 
                        <NavLinks/>
                    </div>

                    <div id="login" className=" w-[25%] min-w-[30px] h-full justify-center align-bottom text-center">
                            <button onClick={showLogin} class="login-ul flex h-full w-full flex-row  hover:duration-100 text-white justify-between p-2 items-center text-center pl-12 pr-12">
                                <div class=" font-mono font-semibold  italic text-xl hover:duration-100 p-1 rounded-md hover:border-2 border-[#4C5ADF]"  href="#"> Login </div>
                            </button>
                    </div>

            </div>
        </>
    )
}

export default AlphaNavbar;