import React from "react";
import Typewriter from 'typewriter-effect';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./styles/team.css"

const TeamMember = ({memberInfo}) => {
    return (
        <>
        <div className='flex  flex-col  max-h-[full] h-[600px] justify-center items-center max-w-[800px] w-[600px] p-2 rounded-md '>

                    <h2 className='team-name text-white' >
                        {memberInfo.name}
                    </h2>

                    <h1 className="team-position font-mono font-bold text-algoXcolor ">
                        <Typewriter
                            
                            options={{
                                strings: ['Founder','Maintainer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>

                     <img  className='team-img ' src={memberInfo.img}></img>

                     <SyntaxHighlighter  language="xml" wrapLongLines={true} customStyle={{borderRadius:"8px", color:"rgb(209 213 219)" ,background:"transparent",overflow:"hidden",overFlowY:"hidden",textAlign:"justify",textAlignLast:"center"}} style={a11yLight}>
                        {memberInfo.description}
                    </SyntaxHighlighter>
            </div>
        </>
    )

}

export default TeamMember;