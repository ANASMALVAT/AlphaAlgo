import React from "react";
import { Link } from "react-router-dom";
import SideNavToolTip from "./sideNavToolTip";
import Popup from 'reactjs-popup';
import "./styles/sideNavLinks.css"

const SideNavLinks = () => {
    return (
        <>
           <div className="  w-full z-[1000]  ">
            
                <div className="logo p-[1rem] max-w-[100px] min-w-[100px] justify-left items-left  overflow-hidden">
                    <div className="flex flex-row justify-left">
                        <h1 className=" flex  items-center tracking-wide font-normal antialiased text-[white] text-xl  text-center">Alpha</h1>
                            <Link
                            to="/"
                            className="tracking-wide font-bold antialiased text-[#392A6D] text-4xl hover:duration-[1500ms] hover:rotate-[360deg]"
                            >
                            X
                            </Link> 
                    </div>
                </div>
                <ul className = {` nav flex display-flex-col flex-col h-full w-full hover:duration-100 text-white justify-between pt-2 items-center text-center z-50` }>
                    <Popup
                        trigger=
                        {
                            <li class=" nav-item mb-1 font-mono  hover:duration-100 ">
                                Products
                            </li>
                        }
                        on={['hover', 'focus']}
                        position={'right center'}
                        contentStyle={{minWidth:"275px" , width:"275px",height:"200px", borderRadius:"4px",background:"transparent",border:"none"}}
                        >   
                        <SideNavToolTip />
                    </Popup>
                    <li class="nav-item mb-1">
                        <Link
                            to="/team"
                            className="font-mono  hover:duration-100 "
                        >
                        Team
                        </Link>
                    </li>
                </ul>
            </div>
      </>
    )
}

export default SideNavLinks;