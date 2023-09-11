import {React} from "react";
import CheckIcon from '@mui/icons-material/Check';
import "./questionCardComponent.css"


const QuestionCardComponent = ({topic}) => {
    return(
        <div className="question-block flex py-2 px-1 rounded-md border-transparent ">
            <div className="mr-2 ">
                <CheckIcon style={{fontWeight:"bold"}} color="success"/>
            </div>
            <div className="question-description">
                <p className="text-gray-200" >{topic.description}</p>
            </div>
        </div>
    )
}

export default QuestionCardComponent;