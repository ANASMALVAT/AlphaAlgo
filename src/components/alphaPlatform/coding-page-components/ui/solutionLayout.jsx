import React, { useState, useEffect } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import YouTubeIcon from '@mui/icons-material/YouTube';

import "./styles/problemLayout.css";

const SolutionLayout = () => {
  const [problemSolution, setProblemSolution] = useState(null);
 
  useEffect(() => {
    const storedProblemSolution = sessionStorage.getItem("problemSolution");
    if (storedProblemSolution) {
      try {
        const parsedData = JSON.parse(storedProblemSolution);
        setProblemSolution(parsedData);
        setSolutionCode(parsedData?.M?.solution_code?.S);
      } catch (error) {
        console.error("Error parsing stored problemData:", error);
      }
    }
  }, []);

  const [solutionCode,setSolutionCode] = useState(problemSolution?.M?.solution_code?.S || "");
  const solutionExplanation = problemSolution?.M?.solution_explanation?.S || "";
  const relevantLinks = problemSolution?.M?.relevant_links?.SS || [];

  const setJava = () => {

  }

  return (
    <>
      <div className=" problem-layout max-h-full overflow-auto flex flex-col text-start h-full w-full  flex-grow ">

        <div name="code-solution " className=" mt-1 mb-4 w-[90%] m-auto">
          <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",padding:"15px"}} style={tomorrowNightBlue}>
            {solutionCode}
          </SyntaxHighlighter>
        </div>

        <div name="code-explanation" className="mb-8 whitespace-pre-wrap break-words w-[90%] m-auto">
            <h1 className=" text-white text-2xl m-2">Solution explanation</h1>
            <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",padding:"15px"}} style={tomorrowNightBlue}>
              {solutionExplanation}
            </SyntaxHighlighter>
        </div>
        <div name="code-links" className="mb-8 whitespace-pre-wrap break-words w-[90%] m-auto">
        <h1 className=" text-white text-2xl m-2">Relevant links</h1>

          {
            relevantLinks.map((link, index) => 
                {
                  return <>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <div className="relevant_links flex h-48   mb-5 rounded-md bg-[#002451] justify-center items-center">
                        <YouTubeIcon sx={{color:"red",fontSize:"80px"}}/>
                      </div>
                    </a>
                  </>
              })
          }
        </div>
      </div>
    </>
  );
};

export default SolutionLayout;
