import React from "react";
import "./styles/team.css"

const TeamMember = ({memberInfo}) => {
    return (
        <>
        <div className='flex  flex-col  max-h-[full] h-[600px] justify-center items-center max-w-[800px] w-[600px] p-2 rounded-md '>
                    
                    <img  className='team-img ' src={require(`../../../../assets/` + memberInfo.img)}></img>

                    <h1 className='team-member' >
                            {memberInfo.name}
                    </h1>
                    
                    {/* <h4 className='team-position text-algoXcolor font-semibold'>
                        {memberInfo.position}
                    </h4> */}

                    <text className='team-info flex mb-2 text-gray-700 p-4 text-center' style={{ maxWidth: '100%' }}>
                            {memberInfo.description}
                    </text>
            </div>
        </>
    )

}

export default TeamMember;