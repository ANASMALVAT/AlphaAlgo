import React from "react";
import { questionCategory } from "../../../../data/homeQuestion";
import QuestionCardComponent from "./questionCardComponent";
import "./questionComponent.css"



const QuestionComponent = () => {

    return (
        <div className="flex flex-row min-h-[600px] flex-1 bg-algoblack justify-evenly pt-4 ">
            <div className="question"> 
                <div className=" question-header mb-4">
                    <h1 className="header-text flex">Practice Real World Coding Questions</h1>
                </div>
                <div className=" question-text mb-10 text-gray-600">
                    <p className="text-gray-300">
                        After tirelessly mastering problem solving by dedicating more than 20000 hours and consulting with coding interview experts, we've meticulously curated the ultimate collection of challenges for you.
                    </p>    
                </div>
                <div className="div-question flex flex-wrap gap-2">
                    {
                        questionCategory.map((topic) => {
                            return <QuestionCardComponent topic={topic} />
                        })
                    }
                </div>
            </div>
            <div className="question-grid">
                <img className="question-gif" src="https://cdn-icons-png.flaticon.com/512/4053/4053023.png" ></img>
            </div>
        </div>
    )

}

export default QuestionComponent;
