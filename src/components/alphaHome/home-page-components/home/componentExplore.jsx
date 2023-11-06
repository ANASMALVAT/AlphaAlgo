import React, { useState } from "react";
import ComponentExploreDetail from "./componentExploreDetail";
import "./styles/componentThree.css"

const ComponentExplore = () => {

    const [aboutAlpha, setAboutAlpha] = useState(false);

    const toggleAboutAlpha = () => {
        setAboutAlpha(alpha => !alpha);
    }

    return (
        <>
        
        <div className="h-full w-full max-w-[1700px] m-auto bg-algoblack flex flex-col items-center mb-8">
                <div className=" what-is-alpha">
                    <h1 className="h1-tag text-white ">What is Alpha Algo?</h1>
                </div>
                <div>
                    <ComponentExploreDetail/>
                </div>
        </div>
        </>
    )

}

export default ComponentExplore;