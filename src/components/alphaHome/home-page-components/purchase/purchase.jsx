import React, { Component } from 'react'
import PricingCard from './purchaseCard'
import "./purchase.css"
import AlphaNavbar from '../../../../layouts/navbar/AlphaNavbar'

const Purchase = () => {
    return(
        <>
        <AlphaNavbar/>
        <div className='purchase w-full min-h-screen h-full bg-[#00182D] flex  flex-col  '>
            <div className='mt-24'>
                <PricingCard/>
            </div>
        </div>
        </>
    )
}
export default Purchase;