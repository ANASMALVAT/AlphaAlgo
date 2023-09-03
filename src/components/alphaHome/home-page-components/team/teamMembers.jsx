import React from "react";
import "../../styles/team.css"



const TeamMember = ({memberInfo}) => {
    return (
        <>
        <div className='flex bg-[#4C5ADF] flex-col max-h-[full] h-[600px] justify-center items-center max-w-[900px] w-[500px] p-2  rounded-sm '>
                    <h2 className='team-name '>
                        <pre className="text-white">
                            {memberInfo.name}
                        </pre>
                    </h2>
                    
                    <h4 className='team-position '>
                        <pre className="text-algoblack font-semibold">
                            {memberInfo.position}
                        </pre>
                    </h4>

                    <img  className='team-img mb-6' src={require(`../../../../assets/` + memberInfo.img)}></img>
                    
                    <p className='team-info flex text-justify mb-2 text-[#020406] p-4' style={{ maxWidth: '100%' }}>
                        <pre className=" whitespace-pre-line text-white" style={{ wordWrap: 'break-word' }}>
                            {memberInfo.description}
                        </pre>
                    </p>
            </div>
        </>
    )

}

export default TeamMember;