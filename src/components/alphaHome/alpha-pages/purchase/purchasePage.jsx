import React, { Component } from 'react'
import PricingCard from './purchaseCard'
import "./purchase.css"
import AlphaNavbar from '../../../../layouts/navbar/AlphaNavbar'
import AlphaFooter from '../../../../layouts/footer/AlphaFooter'

const Purchase = () => {
    return(
        <>
        <AlphaNavbar/>
        <div className='purchase w-full min-h-screen h-full bg-[#F5F5F5] flex  flex-col  '>
            <div className='mt-24'>
                <PricingCard/>
            </div>
        </div>
        <AlphaFooter/>
        </>
    )
}
export default Purchase;