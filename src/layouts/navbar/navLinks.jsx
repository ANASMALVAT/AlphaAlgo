import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({flexClass}) => {

    return (
        <>
           <div className="  w-full ">
                <ul className = {`nav flex h-full w-full ${flexClass} hover:duration-100 text-white justify-between p-2 items-center text-center`}>
                    <li class="nav-item mb-1">
                        <Link
                            to="/"
                            className="font-mono font-semibold hover:duration-200 hover:border-b-4 hover:border-[#4C5ADF]"
                        >
                        Products
                        </Link>
                    </li>
                    <li class="nav-item mb-1">
                        <Link
                            to="/team"
                            className="font-mono font-semibold hover:duration-200 hover:border-b-4 hover:border-[#4C5ADF]"
                        >
                        Team
                        </Link>
                    </li>
                    <li class="nav-item mb-1">
                        <Link
                            to="/team"
                            className="font-mono font-semibold hover:duration-200 hover:border-b-4 hover:border-[#4C5ADF]"
                        >
                        Udemy
                        </Link>
                    </li>
                    <li class="nav-item mb-1">
                        <Link
                            to="/team"
                            className="font-mono font-semibold hover:duration-200 hover:border-b-4 hover:border-[#4C5ADF]"
                        >
                        Patreon
                        </Link>
                    </li>
                </ul>
            </div>
      </>
    )
}
export default NavLinks;