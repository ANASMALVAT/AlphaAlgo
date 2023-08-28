import React from "react";
import AlphaNavbar from "../../layouts/navbar/AlphaNavbar";
import ComponentOne from "./home-page-components/home/componentOne";
import ComponentThree from "./home-page-components/home/componentThree";
import ComponentFour from "./home-page-components/home/componentFour";

const AlphaHomePage = () => {
    return (
        <>
            <div className="h-full overflow-hidden w-full min-h-screen min-w-screen bg-algoblack border border-black m-2">
                <AlphaNavbar/>
                <ComponentOne/>
                <ComponentThree/>
                <ComponentFour/>
            </div>
        </>
    )
}
export default AlphaHomePage;