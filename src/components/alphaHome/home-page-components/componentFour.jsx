import React from 'react'
import DefaultCard from './cardComponent'
import "../styles/componentFour.css"



const ComponentFour = () => {

    const features = [
        {
            title:"200 Hand Picked Questions",
            info:"",
        },
        {
            title:"Incoming Udemy Course",
            info:"",
        },
        {
            title:"Write Code in 7 Languages",
            info:"",
        },
        {
            title:" Rich Coding Enviorment",
            info:"",
        },
        {
            title:"Free Access To Coding Problems",
            info:"",
        },
        {
            title:"AlphaGPT For The Rescue",
            info:"",
        },

    ]
    return (
        <>  
            <div className='who-we-are min-h-screen w-full bg-algoblack mt-12 '>
                <div className='h1-tag-div flex flex-col'>
                    <h1 className="h1-tag-c4 w-full text-white  font-light">What Alpha Algo Brings To The Table?</h1>
                    <div className='w-full h-full mt-4 ml-2 mr-2 p-2' >
                        <div className='w-full h-12 bg-white rounded-sm '>

                        </div>
                    </div>
                </div>
                
                <div className=' ml-5 mr-8 flex flex-wrap flex-row border w-full h-full'>
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