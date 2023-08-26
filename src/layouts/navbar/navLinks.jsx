import React from "react";

const NavLinks = ({flexClass}) => {

    return (
        <>
           <div className="  w-full ">
                <ul className = {`nav flex h-full w-full ${flexClass} hover:duration-100 text-white justify-between p-2 items-center text-center`}>
                    <li class="nav-item mb-1">
                        <a class=" font-mono font-semibold hover:duration-200 hover:border-b-4 hover:border-[#4C5ADF]"  href="#">Products</a>
                    </li>
                    <li class="nav-item mb-1">
                    <a class=" font-mono font-semibold   hover:duration-200 hover:border-b-4 hover:border-[#4C5ADF]"  href="#">Team</a>
                    </li>
                    <li class="nav-item mb-1">
                    <a class=" font-mono font-semibold hover:duration-200   hover:border-b-4 hover:border-[#4C5ADF]"  href="#">Udemy</a>
                    </li>
                    <li class="nav-item mb-1">
                        <a class=" font-mono font-semibold  hover:duration-200  hover:border-b-4 hover:border-[#4C5ADF]"  href="#">Patreon</a>
                    </li>
                </ul>
            </div>
      </>
    )
}
export default NavLinks;