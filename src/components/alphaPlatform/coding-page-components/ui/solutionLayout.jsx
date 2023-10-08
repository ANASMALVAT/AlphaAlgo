import React, { useState, useEffect } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./styles/solutionLayout.css";

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
      <div className=" solution-layout max-h-full overflow-auto flex flex-col text-start h-full m-auto flex-grow  ">

        <h1 className=" text-white text-4xl mt-4">{problemSolution?.M?.problem_name}</h1>
        <p className="mt-4 text-gray-400">{problemSolution?.M?.problem_description}</p>
        {
          problemSolution?.M?.solution_prerequiste ||
          <div name="code-solution " className=" mt-4">
            <h1 className=" text-white text-2xl ">prerequisite</h1>
              <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",background:"transparent"}} style={tomorrowNightBlue}>
                  {problemSolution?.M?.solution_prerequiste}
              </SyntaxHighlighter>
          </div>
        }

        {
          problemSolution?.M?.solution_requirement ||
          <div name="code-solution " className=" mt-4">
            <h1 className=" text-white text-2xl ">requirement</h1>
              <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",background:"transparent"}} style={tomorrowNightBlue}>
                  {problemSolution?.M?.solution_requirement}
              </SyntaxHighlighter>          
          </div>
        }

        {
          <div name="code-solution " className=" mt-8">
            <h1 className=" text-white text-3xl mb-4 ">solution</h1>
            <div className="flex gap-6 flex-wrap">
              <div className="solution-code">
                <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",background:"transparent"}} style={tomorrowNightBlue}>
                  {solutionCode}
                </SyntaxHighlighter>
              </div>
              <div  className="solution-explanation ">
                <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",background:"transparent",overflow:"hidden"}} style={tomorrowNightBlue}>
                  {solutionExplanation}
                </SyntaxHighlighter>
              </div>
            </div>         
          </div>
        }

        <div name="code-links" className="mt-4">
          <h1 className=" text-white text-2xl ">Resources</h1>
          
            <div className="flex gap-8 flex-wrap">
              {
              relevantLinks.map((link, index) => 
                  {
                    return <>
                      <a href={link} className="relevant-links" target="_blank" rel="noopener noreferrer">
                        <div className=" flex h-60 mt-5 rounded-md bg-[#5867EA] justify-center items-center">
                          <YouTubeIcon className="icon-hover" sx={{color:"#002451",fontSize:"80px"}}/>
                        </div>
                      </a>
                    </>
                })
              }
            </div>
          
        </div>
      </div>
    </>
  );
};

export default SolutionLayout;
