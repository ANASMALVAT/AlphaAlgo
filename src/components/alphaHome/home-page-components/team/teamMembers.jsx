import React from "react";
import "./styles/team.css"

const TeamMember = ({memberInfo}) => {
    return (
        <>
        <div className='flex  flex-col  max-h-[full] h-[600px] justify-center items-center max-w-[800px] w-[600px] p-2 rounded-md '>

                     <h2 className='team-name' >
                        {memberInfo.name}
                    </h2>

                    <h2 className="team-position">
                        {memberInfo.position}
                    </h2>

                     <img  className='team-img ' src={require(`../../../../assets/` + memberInfo.img)}></img>

                    
                    <span className='team-info flex mb-2 p-2 pt-4 text-black' style={{ maxWidth: '100%' }}>
                        {memberInfo.description}
                    </span>
            </div>
        </>
    )

}

export default TeamMember;