import React from "react";
import Typewriter from 'typewriter-effect';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./styles/team.css";

const TeamMember = ({ memberInfo }) => {
  return (
    <>
      <div className='flex flex-col h-full gap-4 justify-center items-center max-w-[600px] sm:max-w-[600px] p-2 mb-4 rounded-md'>
        <h2 className='team-name text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4'>
          {memberInfo.name}
        </h2>

        <h1 className="team-position font-mono font-bold text-algoXcolor text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <Typewriter
            options={{
              strings: ['Founder', 'Maintainer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <img className='team-img w-[8rem] sm:[8rem]  h-auto rounded-md' src={memberInfo.img} alt={`${memberInfo.name}'s image`} />

        <SyntaxHighlighter
          language="xml"
          wrapLongLines={true}
          customStyle={{
            borderRadius: "8px",
            color: "rgb(209 213 219)",
            background: "transparent",
            overflow: "hidden",
            overflowY: "hidden",
            textAlign: "justify",
            textAlignLast: "center"
          }}
          style={a11yLight}
        >
          {memberInfo.description}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default TeamMember;
