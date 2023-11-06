import React from "react";
import { alphaFeatures } from "../../../../data/alphaFeatures";
import AlphaCardComponent from "./alphaCardComponent";
import AlphaGptWindow from "./alphaGptWindow";
import "./alphaGPT.css"

const AlphaGPT = () => {

    return (
        <div className="alpha flex min-h-[700px] max-w-[1700px] flex-1 m-auto bg-algoblack justify-evenly pt-4 overflow-visible ">
            
            <div className="alpha-grid flex overflow-visisble ">
                <div className="alpha-img">
                    <AlphaGptWindow className=" alpha-img justify-center rounded-md  p-2 opacity-90" style={{ maxWidth: '90%', height: 'auto' }} />
                </div>
            </div>

            <div className="div-alpha  flex flex-col" > 
                <h1 className=" alpha-header common-margin mb-4  ">AlphaGPT, Your Coding Assistance.</h1>
                <div className=" alpha-text common-margin mb-10 text-gray-600  ">
                    <p className="text-gray-300 text-justify">
                        Introducing AlphaGPT, your trusted coding companion, specializing in language syntax, code review, and knowledge enrichment.
                    </p>
                </div>
                <div className=" alpha-cards common-margin flex flex-col gap-2">
                    {
                      alphaFeatures.map((value,index) => {
                        return <AlphaCardComponent features={value} />
                      })
                    }
                </div>
            </div>
        </div>
    )

}

export default AlphaGPT;
