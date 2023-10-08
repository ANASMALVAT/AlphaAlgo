import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./styles/team.css"

const TeamMember = ({memberInfo}) => {
    return (
        <>
        <div className='flex  flex-col  max-h-[full] h-[600px] justify-center items-center max-w-[800px] w-[600px] p-2 rounded-md '>

                    <h1 className='team-name' >
                        {memberInfo.name}
                    </h1>

                    <h2 className="team-position">
                        {memberInfo.position}
                    </h2>

                     <img  className='team-img ' src={require(`../../../../assets/` + memberInfo.img)}></img>

                     <SyntaxHighlighter language="elixir" wrapLongLines={true} customStyle={{borderRadius:"8px",background:"transparent",overflow:"hidden",overFlowY:"hidden",textAlign:"justify"}} style={a11yLight}>
                        {memberInfo.description}
                    </SyntaxHighlighter>
            </div>
        </>
    )

}

export default TeamMember;