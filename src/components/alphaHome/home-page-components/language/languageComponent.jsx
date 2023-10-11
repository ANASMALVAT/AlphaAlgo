import React from "react";
import "./languageComponent.css"
import { languages } from "../../../../data/homeLanguage";
import LanguageCardComponent from "./languageCardComponent";



const LanguageComponent = () => {

    return (
        
        <div className="flex flex-row min-h-[500px] bg-algoblack mt-10 mb-10 justify-evenly pt-8 ">

            <div className="language-animation">
                <img className="coding-gif" src="https://media2.giphy.com/media/juua9i2c2fA0AIp2iq/giphy.gif" allowFullScreen></img>
            </div>

            <div className="languages"> 
                <div className=" common-margin-language language-header mb-4">
                    <h1>Type In Four Syntax</h1>
                </div>
                <div className=" language-text common-margin-language mb-10 text-gray-300">
                        Diverse selection of Four programming languages. Whether you're a seasoned developer or just starting your coding journey, our comprehensive language offerings have got you covered.
                </div>
                <div className="language-grid common-margin-language">
                    {
                        languages.map((language) =>{
                            return <LanguageCardComponent language={language} />
                        })
                    }
                </div>
            </div>
           
        </div>
    )

}

export default LanguageComponent;
