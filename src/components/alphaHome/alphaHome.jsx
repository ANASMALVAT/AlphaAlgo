import React from "react";
import AlphaNavbar from "../../layouts/navbar/AlphaNavbar";
import ComponentOne from "./home-page-components/home/componentOne";
import ComponentThree from "./home-page-components/home/componentThree";
import ComponentFour from "./home-page-components/home/componentFour";
import LanguageComponent from "./home-page-components/language/languageComponent";
import QuestionComponent from "./home-page-components/questions/questionComponent";
import CodingEnviorment from "./home-page-components/coding-enviorment/codingEnviorment";

const AlphaHomePage = () => {
    return (
        <>
            <div className="h-full overflow-hidden w-full min-h-screen min-w-screen bg-algoblack border border-black">
                <AlphaNavbar/>
                <ComponentOne/>
                <ComponentThree/>
                <ComponentFour/>
                <CodingEnviorment/>
                <QuestionComponent/>
                <LanguageComponent/>
            </div>
        </>
    )
}
export default AlphaHomePage;