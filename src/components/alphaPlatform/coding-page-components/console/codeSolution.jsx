import React, { useState, useEffect } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import YouTubeIcon from '@mui/icons-material/YouTube';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SolutionButton from "../buttons/solutionButton";
import { useSelector } from "react-redux";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "./styles/solution.css";

const CodeSolution = () => {
  const [problemSolution, setProblemSolution] = useState(null);
  const [driverSolution, setDriverSolution] = useState(null);
  const [driverSolutionCode,setDriverSolutionCode] = useState("");
  const alphaSolution = useSelector((state) => state.solutionLanguage.solutionState);

  useEffect(() => {
    const storedProblemSolution = sessionStorage.getItem("problemSolution");
    const driverSolutionSession = sessionStorage.getItem("driverCode");

    if (storedProblemSolution) {
      try {
        const parsedData = JSON.parse(storedProblemSolution);
        setProblemSolution(parsedData);
      } catch (error) {
        console.error("Error parsing stored problemData:", error);
      }
    }
    if(driverSolutionSession){
      try {
        const parsedSolution = JSON.parse(driverSolutionSession);
        setDriverSolution(driverSolution => parsedSolution);
    } catch (error) {
        setDriverSolution({});
      }
    }
  }, []);

   
 
  const problemName = problemSolution?.M?.problem_name?.S || "";
  const problemDescription = problemSolution?.M?.problem_description?.S || "";
  const relevantLinks = problemSolution?.M?.relevant_links?.SS || [];
  const prerequisite = problemSolution?.M?.solution_prerequiste?.S || "";
  const prerequisiteLink = problemSolution?.M?.solution_prerequiste_links?.S || "";
  const requirement = problemSolution?.M?.solution_requirement?.S || "";
  const [solutionBlurred, setSolutionBlured] = useState(true);



  useEffect(() => {
    for(const key in alphaSolution){
        if(alphaSolution[key] === true && driverSolution){
            setDriverSolutionCode(driverSolution[key]?.M?.driver_run_solution?.S || "" );
            break;
        }
    }
  },[alphaSolution,driverSolution]);

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
          driverSolution &&
          <div name="code-solution " className=" mt-8">
            <h2 className="problem-question text-white text-left border-b border-gray-700">solution</h2>
              <div className="solution">
                <div className=" flex justify-items-end gap-10 flex-wrap items-center ">
                <SolutionButton  />
                </div>
                <div onClick={() => setSolutionBlured(prev => !prev)}  className={`${solutionBlurred ? 'solution-blurred' : ''} cursor-pointer`}>
                  <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{ borderRadius:"8px",width:"100%",textAlign:"justify",overflow:"hidden",padding:"15px",marginTop:"25px"}} style={tomorrowNightBlue}>
                    {driverSolutionCode}
                  </SyntaxHighlighter>
                </div>
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
