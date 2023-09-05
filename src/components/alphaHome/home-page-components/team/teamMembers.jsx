import React from "react";
import "./styles/team.css"

const TeamMember = ({memberInfo}) => {
    return (
        <>
        <div className='flex  flex-col  max-h-[full] h-[700px] justify-center items-center max-w-[900px] w-[500px] p-2 rounded-md '>
                    
                    <img  className='team-img mb-2' src={require(`../../../../assets/` + memberInfo.img)}></img>

                    <h2 className='team-name font-semibold' >
                            {memberInfo.name}
                    </h2>
                    
                    <h4 className='team-position font-semibold text-algoXcolor'>
                        {memberInfo.position}
                    </h4>

                    <p className='team-info flex text-center mb-2 text-gray-700 p-4' style={{ maxWidth: '100%' }}>
                        {/* <pre className=" whitespace-pre-line text-gray-800" style={{ wordWrap: 'break-word' }}> */}
                            {memberInfo.description}
                        {/* </pre> */}
                    </p>
            </div>
        </>
    )

}

export default TeamMember;