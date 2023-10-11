import React from "react";
import { Link } from "react-router-dom";
import ToolTip from "./tooltip";
import Popup from 'reactjs-popup';

const NavLinks = ({flexClass}) => {

    return (
        <>
           <div className="  w-full ">
                <ul className = {`nav flex h-full w-full ${flexClass} hover:duration-100 text-white justify-between p-2 items-center text-center`}>
                    <Popup
                        trigger=
                        {
                            <li class="nav-item mb-1 font-mono font-semibold hover:duration-100 hover:border-b-4 hover:border-[#4C5ADF]">
                                Products
                            </li>
                        }
                        on={['hover', 'focus']}
                        position={'bottom center'}
                        contentStyle={{minWidth:"300px", width:"300px",height:"300px", borderRadius:"4px",background:"transparent",border:"none"}}
                        >   
                        <ToolTip />
                    </Popup>

                    <li class="nav-item mb-1">
                        <Link
                            to="/team"
                            className="font-mono font-semibold hover:duration-100 hover:border-b-4 hover:border-[#4C5ADF]"
                        >
                        Team
                        </Link>
                    </li>
                    <li class="nav-item mb-1">
                        <Link
                            to="/purchase"
                            className="font-mono font-semibold hover:duration-100 hover:border-b-4 hover:border-[#4C5ADF]"
                        >
                        Purchase
                        </Link>
                    </li>
                    <li class="nav-item mb-1">
                    </li>
                </ul>
            </div>
      </>
    )
}
export default NavLinks;