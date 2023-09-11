import {React} from "react";
import "./languageCardComponent.css"


const LanguageCardComponent = ({language}) => {
    return(
        <div className="flex flex-row language-block">
            <div className="language-img">
                {language.img}
            </div>
            <div className="flex">
                <h1 className="language-name ">{language.language}</h1>
                <p className="language-description text-gray-400" >{language.description}</p>
            </div>
        </div>
    )
}

export default LanguageCardComponent;