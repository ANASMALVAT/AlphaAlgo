import React from 'react';
import "./companiesComponent.css"
const CompaniesComponent = () => {

    return (
        <div className=' companies-container flex flex-wrap  justify-evenly w-[100%] bg-[#F5F5F5] max-w-[1400px] m-auto items-center'>
                <div className='company-img flex items-center'>
                    <img src='https://alpha-images.s3.amazonaws.com/meta.png' alt="Meta"  />
                </div>
                <div className='company-img  flex items-center mt-2 '>
                    <img src='https://alpha-images.s3.amazonaws.com/amazon.png' alt="Amazon"  />
                </div>
                <div className='apple-img flex items-center  '>
                    <img src='https://alpha-images.s3.amazonaws.com/apple.png'  className='bg-transparent'  alt="Apple"  />
                </div>
                <div className='company-img flex items-center ' >
                    <img src='https://alpha-images.s3.amazonaws.com/netflix.png' alt="Netflix"  />
                </div>
                <div className='company-img flex items-center ' >
                    <img src='https://alpha-images.s3.amazonaws.com/google.png' alt="Google" />
                </div>
        </div>
    )

}

export default CompaniesComponent;