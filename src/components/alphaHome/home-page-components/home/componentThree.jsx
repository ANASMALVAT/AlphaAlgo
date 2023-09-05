import React, { useState } from "react";
import ComponentAlphaAlgo from "./componentAlphaAlgo";

import 'reactjs-popup/dist/index.css';
import "./styles/componentThree.css"

const ComponentThree = () => {

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
                    <ComponentAlphaAlgo/>
                </div>
        </div>
        </>
    )

}

export default ComponentThree;