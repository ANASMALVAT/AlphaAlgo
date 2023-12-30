import React, { useState } from "react";
import ComponentExploreDetail from "./componentExploreDetail";
import "./styles/componentExplore.css"

const ComponentExplore = () => {

    const [aboutAlpha, setAboutAlpha] = useState(false);

    const toggleAboutAlpha = () => {
        setAboutAlpha(alpha => !alpha);
    }

    return (
        <>
        
        <div className=" w-full max-w-[1700px] m-auto bg-algoblack flex flex-col items-center mb-4 ">
                <div className=" what-is-alpha z-[1]">
                    <h1 className="h1-tag text-white mb-4  ">What is Alpha Algo?</h1>
                </div>
        </div>
        </>
    )

}

export default ComponentExplore;