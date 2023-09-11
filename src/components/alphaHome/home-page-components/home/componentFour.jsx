import React from 'react'
import DefaultCard from './cardComponent'
import { features } from '../../../../data/homeFeatures'
import "./styles/componentFour.css"



const ComponentFour = () => {


    return (
        <>  
            <div className='who-we-are mb-4 w-full bg-algoblack justify-center border-none '>                
                <div className='card-items  w-[80%] min-w-[375px] flex flex-wrap flex-row h-full justify-center mx-auto mt-4' >
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