import React, { useState } from "react";
import ComponentExploreDetail from "./componentExploreDetail";

import 'reactjs-popup/dist/index.css';
import "./styles/componentThree.css"

const ComponentExplore = () => {

    const [aboutAlpha, setAboutAlpha] = useState(false);

    const toggleAboutAlpha = () => {
        setAboutAlpha(alpha => !alpha);
    }

    return (
        <>
        
        <div className="h-full w-full bg-algoblack flex flex-col items-center">
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