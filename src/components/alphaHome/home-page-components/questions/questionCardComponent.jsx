import {React} from "react";
import CheckIcon from '@mui/icons-material/Check';
import "./questionCardComponent.css"


const QuestionCardComponent = ({topic}) => {
    return(
        <div className="question-block flex py-2 px-1 rounded-md w-full border-transparent ">
            <div className="start-data rounded-full mt-2  bg-algoXcolor text-center text-white w-fit px-3 py-1 absolute">
                <h2 className=" text-[18px] font-normal p-1">Sorting</h2>
            </div>
        </div>
    )
}

export default QuestionCardComponent;