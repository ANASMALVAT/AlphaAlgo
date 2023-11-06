import React from "react";
import "./languageComponent.css"
import { languages } from "../../../../data/homeLanguage";
import LanguageCardComponent from "./languageCardComponent";



const LanguageComponent = () => {

    return (
        
        <div className="flex flex-row min-h-[500px] bg-[#F5F5F5] mt-10 justify-evenly pt-8 ">

            <div className="language-animation">
                <img className="coding-gif" src="https://alpha-images.s3.amazonaws.com/coding-languages.gif" allowFullScreen></img>
            </div>

            <div className="languages"> 
                <div className=" common-margin-language language-header font-semibold mb-4 text-algoblack">
                    <h1>Type In Four Syntax</h1>
                </div>
                <div className=" language-text common-margin-language mb-10 text-gray-600 font-light">
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
