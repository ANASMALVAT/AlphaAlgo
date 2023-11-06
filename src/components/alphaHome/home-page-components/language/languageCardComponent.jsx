import {React} from "react";
import "./languageCardComponent.css"


const LanguageCardComponent = ({language}) => {
    return(
        <div className="flex flex-row language-block">
            <div className="language-img">
                {language.img}
            </div>
            <div className="flex">
                <h2 className="language-name text-xl text-algocodeOutput ml-3 mr-1 font-semibold">{language.language}</h2>
                <p className="language-description text-gray-600 font-light" >{language.description}</p>
            </div>
        </div>
    )
}

export default LanguageCardComponent;