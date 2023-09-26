import React from "react";
import { enviormentFeatures } from "../../../../data/homeEnviorment";
import EnviormentCardComponent from "./enviormentCardComponent";
import "./codingEnviorment.css"

const CodingEnviorment = () => {

    return (
        <div className="enviorment flex min-h-[700px] flex-1 bg-algoblack justify-evenly pt-4 overflow-visible ">

            <div className="div-enviorment  flex flex-col"> 

                <h1 className=" enviorment-header common-margin mb-4">Rich Coding Enviorment</h1>

                <div className=" enviorment-text common-margin mb-10 text-gray-600">
                    <p className="text-gray-300">
                        After tirelessly mastering problem solving by dedicating more than 20000 hours and consulting with coding interview experts, we've meticulously curated the ultimate collection of challenges for you.
                    </p>    
                </div>
                <div className=" enviorment-cards  mt-10 common-margin flex flex-col gap-2">
                    {
                      enviormentFeatures.map((feature) => {
                        return <EnviormentCardComponent enviorment={feature} />
                      })
                    }
                </div>
            </div>
            
            <div className="enviorment-grid w-[40%] flex overflow-visisble justify-center">
                <img className=" enviorment-img justify-center rounded-md  p-2 opacity-90" src={require(`../../../../assets/coding-console.png`)}  style={{ maxWidth: '100%', height: 'auto' }} ></img>
            </div>
         
        </div>
    )

}

export default CodingEnviorment;
