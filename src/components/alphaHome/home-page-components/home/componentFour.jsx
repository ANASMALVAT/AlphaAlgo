import React from 'react'
import DefaultCard from './cardComponent'
import "../../styles/componentFour.css"



const ComponentFour = () => {

    const features = [
        {
            title:"200 Hand Picked Questions",
            info:"20000 Hours of Pure Dedication and the World is ours, I meticulously curated a collection of problems after solving 1500 problems and seeking guidance from coding interview experts, I've crafted this selection.",
        },
        {
            title: "Incoming Udemy Course",
            info: "An upcoming Udemy course will comprehensively explain solutions to all problems featured on Alpha Algo. Experience a strategic approach to explanations that is truly unprecedented.",
        },
        {
            title: "Write Code in 7 Languages",
            info: "At Alpha Algo, you can express your solutions in seven globally acclaimed programming languages.",
        },
        {
            title: "Rich Coding Environment",
            info: "Alpha Algo provides a comprehensive coding environment, offering extensive customization options tailored to your preferences.",
        },
        {
            title: "Free Access To Problems",
            info: "In stark contrast to other platforms, Alpha Algo grants you free access to a treasure trove of premium coding problems. Our focus is on people, not profits.",
        },
        {
            title: "AlphaGPT For The Rescue",
            info: "Alpha Algo introduces an exclusive premium feature that is unrivaled elsewhere. AlphaGPT stands ready to provide assistance whenever needed, whether it's about syntax or fine-tuning logic.",
        },

    ]
    return (
        <>  
            <div className='who-we-are min-h-screen w-full bg-algoblack justify-center m-auto'>                
                <div className='card-items  w-[80%] min-w-[375px] flex flex-wrap flex-row h-full justify-center mx-auto' >
                        {
                            features.map((value,index) => {
                                    return < DefaultCard key={index} features={value} />
                            })
                        }
                </div>
            </div>
            
        </>
    )
}

export default ComponentFour;