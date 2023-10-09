import React from "react";
import Typewriter from 'typewriter-effect';
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

                    <h1 className="team-position font-mono font-bold text-[#4C5ADF]">
                        <Typewriter
                            
                            options={{
                                strings: ['Founder', 'Creator','Designer','Maintainer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>

                     <img  className='team-img ' src={require(`../../../../assets/` + memberInfo.img)}></img>

                     <SyntaxHighlighter language="elixir" wrapLongLines={true} customStyle={{borderRadius:"8px",background:"transparent",overflow:"hidden",overFlowY:"hidden",textAlign:"justify"}} style={a11yLight}>
                        {memberInfo.description}
                    </SyntaxHighlighter>
            </div>
        </>
    )

}

export default TeamMember;