import React from 'react'
import AlphaNavbar from '../../../layouts/navbar/AlphaNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../styles/team.css"


import "../../../assets/alpha-team-focused.jpg"

const Team = () => {

        return  (
            <>
            <AlphaNavbar/>
            <div className=' w-full h-full flex flex-grow flex-row-2 bg-white justify-center pt-[100px] min-h-screen'>
                <div className='flex flex-col w-full h-full justify-center items-center max-w-lg w-lg'>
                    <h2 className='team-name'>
                        Anas Malvat
                    </h2>
                    
                    <h4 className='team-position ccolor'>
                        Founder
                    </h4>

                    <img  className='team-img mb-6 ' src={require('../../../assets/alpha-team-focused.jpg')}></img>
                    
                    <p  className=' text-justify mb-4 text-gray-700 p-4'>
                        Anas is a professional who does not have any thing fancy to add as Ex Maang Software Engineer, yet he is professional
                        Who takes initiative to do something out of the norm, From solving 1400 coding problems to establising a 
                        society at dalhousie  university to share his experience and helping students to crack the coding interviews.
                        In march of 2020 when covid hit the world, Competitive coding was introduced to him. He spent 20000 hours solving coding problems
                        and understanding the behind the scenes of coding interviews. As his passion of software developer was undying
                        I came up with an idea of developing my own coding platform, which you people know as Alpha Algo.
                    </p>
                   
                </div>
            </div>
            </>
        )
}

export default Team;