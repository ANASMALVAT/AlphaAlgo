import React from "react";
import { questionCategory } from "../../../../data/homeQuestion";
import QuestionCardComponent from "./questionCardComponent";
import "./questionComponent.css"



const QuestionComponent = () => {

    return (
        <div className=" question-main flex relative flex-row overflow-hidden min-h-[600px] flex-1 bg-[#F5F5F5] justify-center items-center pt-4 ">
            <div className=" absolute w-28 h-28 rounded-md flex bg-algoXcolor m-auto z-10 items-center justify-center text-center">
                <h2 className="tracking-wide font-bold antialiased text-gray-200 opacity-90 text-8xl">X</h2>
            </div>
            <div className="z-0 flex-col w-[50%] h-[400px]  bg-transparent">
                <div className="z-0 question-flow flex flex-col w-full h-full rounded-r-full bg-algoblack ">
                    <QuestionCardComponent/>
                </div>
            </div>
            <div className="z-0 flex-col w-[50%] h-[400px]  bg-transparent">
            </div>
        </div>
    )

}

export default QuestionComponent;
