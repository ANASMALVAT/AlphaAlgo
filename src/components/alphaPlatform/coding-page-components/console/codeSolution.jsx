import React, { useState, useEffect } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import YouTubeIcon from '@mui/icons-material/YouTube';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import "./styles/solution.css";

const CodeSolution = () => {
  const [problemSolution, setProblemSolution] = useState(null);
 
  useEffect(() => {
    const storedProblemSolution = sessionStorage.getItem("problemSolution");
    if (storedProblemSolution) {
      try {
        const parsedData = JSON.parse(storedProblemSolution);
        setProblemSolution(parsedData);
      } catch (error) {
        console.error("Error parsing stored problemData:", error);
      }
    }
  }, []);
 
  const problemName = problemSolution?.M?.problem_name?.S || "";
  const problemDescription = problemSolution?.M?.problem_description?.S || "";
  const solution = problemSolution?.M?.solution?.S || "";
  const relevantLinks = problemSolution?.M?.relevant_links?.SS || [];
  const prerequisite = problemSolution?.M?.solution_prerequiste?.S || "";
  const prerequisiteLink = problemSolution?.M?.solution_prerequiste_links?.S || "";
  const requirement = problemSolution?.M?.solution_requirement?.S || "";
  console.log("here");
  return (
    <>
      <div className=" solution-layout max-h-full pt-4 pl-3 p-2 overflow-auto flex flex-col text-left h-full m-auto flex-grow  ">
      {
        problemName && problemDescription &&
        <div>
          <h2 className="problem-question text-white text-left border-b border-gray-700">{problemName}</h2>
          <SyntaxHighlighter language="json" wrapLongLines={true} customStyle={{borderRadius:"8px",width:"100%",textAlign:"justify",overflow:"hidden",padding:"10px",marginTop:"25px"}} style={tomorrowNightBlue}>
            {problemDescription}
          </SyntaxHighlighter>
        </div>
      }
        
        {
          prerequisite &&
          <div name="code-solution " className=" mt-8">
            <h2 className="problem-question text-white text-left border-b border-gray-700">prerequisite</h2>
              <SyntaxHighlighter language="json" wrapLongLines={true} customStyle={{borderRadius:"8px",width:"100%",textAlign:"justify",overflow:"hidden",padding:"10px",marginTop:"25px"}} style={tomorrowNightBlue}>
                  {prerequisite}
              </SyntaxHighlighter>
          </div>
        }

        {
          prerequisiteLink &&
          <a href={prerequisiteLink} target="_blank">
            < OpenInNewIcon fontSize="large" sx={{color:"gray",marginTop:"15px" }}/>
          </a>
          
        }

        {
          requirement &&
          <div name="code-solution " className=" mt-8">
            <h2 className="problem-question text-white text-left border-b border-gray-700">steps to solve</h2>
             <SyntaxHighlighter language="json" wrapLongLines={true} customStyle={{borderRadius:"8px",width:"100%",textAlign:"justify",overflow:"hidden",padding:"10px",marginTop:"25px"}} style={tomorrowNightBlue}>
                  {requirement}
              </SyntaxHighlighter>
          </div>
        }

        {
          solution &&
          <div name="code-solution " className=" mt-8">
            <h2 className="problem-question text-white text-left border-b border-gray-700">solution</h2>
              <div className="solution">
               <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{ borderRadius:"8px",width:"100%",textAlign:"justify",overflow:"hidden",padding:"15px",marginTop:"25px"}} style={tomorrowNightBlue}>
                  {solution}
                </SyntaxHighlighter>
              </div>
          </div>
        }

        <div name="code-links" className="mt-8">
          <h2 className="problem-question text-white text-left border-b border-gray-700">Resources</h2>
            <div className="flex gap-8 flex-wrap">
              {
              relevantLinks.map((link, index) => 
                  {
                    return <>
                      <a href={link} className="relevant-links mt-4" target="_blank" rel="noopener noreferrer">
                          <YouTubeIcon className="icon-hover rounded-md " sx={{color:"#F37F1B",fontSize:"120px"}}/>
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

export default CodeSolution;
