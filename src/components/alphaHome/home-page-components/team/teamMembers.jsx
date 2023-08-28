import React from "react";
import "../../styles/team.css"



const TeamMember = ({memberInfo}) => {
    return (
        <>
        <div className='flex flex-col  h-full justify-center items-center max-w-[900px] w-[575px] p-2  rounded-md border border-gray-100'>
                    <h2 className='team-name '>
                        {memberInfo.name}
                    </h2>
                    
                    <h4 className='team-position ccolor'>
                        {memberInfo.position}
                    </h4>

                    <img  className='team-img mb-6' src={require(`../../../../assets/` + memberInfo.img)}></img>
                    
                    <p  className='team-info text-justify mb-4 text-[#445d6e] p-4'>
                        {memberInfo.description}
                    </p>
            </div>
        </>
    )

}

export default TeamMember;