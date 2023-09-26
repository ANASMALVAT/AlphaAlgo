import React from "react";
import { questionCategory } from "../../../../data/homeQuestion";
import QuestionCardComponent from "./questionCardComponent";
import "./questionComponent.css"



const QuestionComponent = () => {

    return (
        <div className=" question-main flex flex-row  min-h-[600px] flex-1 bg-algoblack justify-evenly pt-4 ">
            <div className="question"> 
                <div className="question-header common-margin-question">                
                    <h1 >Practice Real World Coding Questions</h1>
                </div>
                <div className=" question-text common-margin-question mb-6 text-gray-300">
                    <p className="text-gray-300">
                        After mastering problem solving by dedicating more than 20000 hours and consulting with coding interview experts, we've meticulously curated the ultimate collection for you.
                    </p>    
                </div>
                <div className=" question-grid  mb-4 text-gray-300">
                    {
                        questionCategory.map((topic) => {
                            return <QuestionCardComponent topic={topic} />
                        })
                    }
                </div>
            </div>
            <div className="question-animation">
                <img className="question-gif" src="https://www.pngmart.com/files/22/Programmer-PNG-Photos.png" ></img>
            </div>
        </div>
    )

}

export default QuestionComponent;
