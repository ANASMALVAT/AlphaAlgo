import React from 'react'
import AlphaNavbar from '../../../../layouts/navbar/AlphaNavbar'
import AlphaFooter from '../../../../layouts/footer/AlphaFooter';
import TeamMember from './teamMembers'
import { teamMembers } from '../../../../data/teamMembers';



const Team = () => {
        return  (
            <>
            <AlphaNavbar/>
            <div className=' w-full h-full flex flex-grow flex-row-3 bg-algoblack justify-center pt-8 min-h-screen'>
                {
                    teamMembers.map((value)=>{
                        return <TeamMember memberInfo={value}  />
                    })
                }
            </div>
            <AlphaFooter/>
            </>
           
        )
}

export default Team;