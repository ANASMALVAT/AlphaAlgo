import React from "react";
import { enviormentFeatures } from "../../../../data/homeEnviorment";
import EnviormentCardComponent from "./enviormentCardComponent";
import "./codingEnviorment.css"

const CodingEnviorment = () => {

    return (
        <div className="enviorment flex min-h-[685px] h-screen w-full  flex-1 bg-transparent justify-x overflow-visible ">
            <div className="div-enviorment  flex flex-col max-w-[1400px]"> 
                <div className="enviorment-header common-margin-enviorment mb-4">
                    <h1 className="enviorment-header-text">Rich Coding Enviorment</h1>
                </div>

                <div className=" enviorment-text common-margin-enviorment mb-10">
                    <h2 className="text-gray-100  enviorment-text text-lg font-light">
                        After tirelessly mastering problem solving by dedicating more than 20000 hours and consulting with coding interview experts, we've meticulously curated the ultimate collection of challenges for you.
                    </h2>    
                </div>
                <div className=" enviorment-cards  common-margin-enviorment flex flex-wrap gap-4">
                    {
                      enviormentFeatures.map((feature) => {
                        return <EnviormentCardComponent enviorment={feature} />
                      })
                    }
                </div>
            </div>
            
            <div className="enviorment-grid  flex overflow-visisble justify-center ">
                <img className="enviorment-img " src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1998567/coding-svg-clipart-md.png" ></img>
            </div>
         
        </div>
    )

}

export default CodingEnviorment;
