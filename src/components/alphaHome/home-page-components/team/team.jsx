import React from 'react'
import AlphaNavbar from '../../../../layouts/navbar/AlphaNavbar'
import TeamMember from './teamMembers'



const Team = () => {

        const teamMembers = [
            {
                name:"Anas Malvat",
                position: "Founder",
                description: 
                `Anas is a professional who does not have any thing fancy to add as Ex Maang Software Engineer, yet he is professional Who takes initiative to do something out of the norm, From solving 1400 coding problems to establising a  society at dalhousie  university to share his experience and helping students to crack the coding interviews. In march of 2020 when covid hit the world, Competitive coding was introduced to him. He spent 20000 hours solving coding problems and understanding the behind the scenes of coding interviews. As his passion of software developer was undying I came up with an idea of developing my own coding platform, which you people know as Alpha Algo.`,
                img: 'alpha-team-focused.jpg',
            },
        ]

        return  (
            <>
            <AlphaNavbar/>
            <div className=' w-full h-full flex flex-grow flex-row-3 bg-algoblack justify-center pt-16 min-h-screen'>
                {
                    teamMembers.map((value)=>{
                        return <TeamMember memberInfo={value}  />
                    })
                }
            </div>
            </>
        )
}

export default Team;