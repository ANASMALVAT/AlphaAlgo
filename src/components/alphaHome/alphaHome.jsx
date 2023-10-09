import React from "react";
import AlphaNavbar from "../../layouts/navbar/AlphaNavbar";
import ComponentMain from "./home-page-components/home/componentMain";
import ComponentExplore from "./home-page-components/home/componentExplore";
import ComponentCardGrid from "./home-page-components/home/componentCardGrid";
import LanguageComponent from "./home-page-components/language/languageComponent";
import QuestionComponent from "./home-page-components/questions/questionComponent";
import CodingEnviorment from "./home-page-components/coding-enviorment/codingEnviorment";
import AlphaGPT from "./home-page-components/alpha-gpt/alphaGPT";
import DefaultFooter from "../../layouts/footer/AlphaFooter";

const AlphaHomePage = () => {
    console.log(localStorage.getItem('jwt-token'));
    return (
        <>
            <div className="h-full overflow-hidden w-full min-h-screen min-w-screen bg-algoblack border border-black">
                <AlphaNavbar/>
                <ComponentMain/>
                <ComponentExplore/>
                <ComponentCardGrid/>
                <CodingEnviorment/>
                <AlphaGPT/>
                <QuestionComponent/>
                <LanguageComponent/>
                <DefaultFooter/>
            </div>
        </>
    )
}
export default AlphaHomePage;