import React  from 'react';
import CompaniesComponent from './companies/companiesComponent';
import "./dreamCompanies.css"

const DreamCompanies = () => {
    return (
    <div className=' dream-companies-container flex flex-col w-full bg-[#F5F5F5] mt-24 pt-16 p-8 min-h-[60vh] mb-8'>
        <div className=' dream-companies-text-container w-full flex  flex-col justify-center text-algoblack'>
            <h2 className='text-5xl h-14 mb-4 font-semibold  '>Join Your Dream Company</h2>
            <h2 className=' text-description text-lg  text-gray-500 font-light  min-w-350px text-center m-auto te'>Alpha Algo, your ultimate stepping stone to land your dream job!</h2>
        </div>

        <CompaniesComponent/>
    </div>)
}

export default DreamCompanies;