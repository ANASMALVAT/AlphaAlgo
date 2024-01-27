import React, { Component } from 'react'
import PricingCard from './purchaseCard'
import "./purchase.css"
import AlphaNavbar from '../../../../layouts/navbar/AlphaNavbar'
import AlphaFooter from '../../../../layouts/footer/AlphaFooter'

const Purchase = () => {
    return(
        <>
        <AlphaNavbar/>
        <div className='purchase w-full max-h-[1200px] h-full bg-algoblack flex  flex-col  '>
            <div className='mt-10'>
                <PricingCard/>
            </div>
        </div>
        <AlphaFooter/>
        </>
    )
}
export default Purchase;