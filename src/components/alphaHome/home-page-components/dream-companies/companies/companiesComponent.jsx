import React from 'react';
import "./companiesComponent.css"
const CompaniesComponent = () => {

    return (
        <div className=' companies-container flex flex-wrap  justify-evenly w-[100%] bg-[#F5F5F5] m-auto items-center'>
                <div className='company-img h-32 w-40 flex items-center'>
                    <img src={require('../../../../../assets/meta.png')} alt="Meta"  />
                </div>
                <div className='company-img h-32 w-40 flex items-center mt-2 '>
                    <img src={require('../../../../../assets/amazon.png')} alt="Amazon"  />
                </div>
                <div className='company-img h-16 w-16 flex items-center  '>
                    <img src={require('../../../../../assets/apple.png')} alt="Apple"  />
                </div>
                <div className='company-img h-32 w-40 flex items-center ' >
                    <img src={require('../../../../../assets/google.png')} alt="Google" />
                </div>
                <div className='company-img h-32 w-40 flex items-center ' >
                    <img src={require('../../../../../assets/netflix.png')} alt="Netflix"  />
                </div>
        </div>
    )

}

export default CompaniesComponent;