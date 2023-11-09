import React from 'react'
import DefaultCard from './cardComponent'
import { features } from '../../../../data/homeFeatures'
import ComponentExplore from './componentExplore'
import "./styles/componentCardGrid.css"



const ComponentCardGrid = () => {


    return (
        <>  
            <div className='flex-col who-we-are mb-4 w-full max-w-[1600px] m-auto  justify-center border-none  z-10'>
                <ComponentExplore/>
                <div className='card-items flex flex-wrap gap-4 flex-row h-full justify-center mx-auto mt-4 z-10' >
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

export default ComponentCardGrid;