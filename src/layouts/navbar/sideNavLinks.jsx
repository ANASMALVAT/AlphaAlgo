import React from "react";
import { Link } from "react-router-dom";
import SideNavToolTip from "./sideNavToolTip";
import Popup from 'reactjs-popup';

const SideNavLinks = () => {

    return (
        <>
           <div className="  w-full ">
                <ul className = {`nav flex display-flex-col flex-col h-full w-full hover:duration-100 text-white justify-between p-2 items-center text-center`}>
                    <Popup
                        trigger=
                        {
                            <li class="nav-item mb-1 font-mono font-semibold hover:duration-100 hover:border-b-4 hover:border-[#4C5ADF]">
                                Products
                            </li>
                        }
                        on={['hover', 'focus']}
                        position={'right center'}
                        contentStyle={{minWidth:"275px", width:"275px",height:"200px", borderRadius:"4px",background:"transparent",border:"none"}}
                        >   
                        <SideNavToolTip />
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
export default SideNavLinks;