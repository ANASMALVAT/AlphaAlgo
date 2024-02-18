import React, { useState, useEffect } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import YouTubeIcon from '@mui/icons-material/YouTube';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SolutionButton from "../buttons/solutionButton";
import { unauthorized_image } from "../../../../utils/constants";
import { useSelector } from "react-redux";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import "./styles/solution.css";
import { toast } from "react-toastify";

const CodeSolution = () => {


  const [problemSolution, setProblemSolution] = useState(null);
  const [isAuthorised, setIsAuthorised] = useState(true);
  const [driverSolution, setDriverSolution] = useState(null);
  const [driverSolutionCode,setDriverSolutionCode] = useState("");
  const alphaSolution = useSelector((state) => state.solutionLanguage.solutionState);
  const [buttonText, setButtonText] = useState('Copy');

  useEffect(() => {
    const storedProblemSolution = sessionStorage.getItem("problemSolution");

    if (storedProblemSolution) {
      try {
        const parsedData = JSON.parse(storedProblemSolution);
        setIsAuthorised(parsedData?.authorized || false);
        setProblemSolution(parsedData?.data?.question_solution || {});
        setDriverSolution(parsedData?.data?.solution_code?.M);
      } catch (error) {
        toast("Error Fetching Problem Solution");
      }
    }
  }, []);

  
  useEffect(() => {
    for(const key in alphaSolution){
        if(alphaSolution[key] === true && driverSolution){
            setDriverSolutionCode(driverSolution[key]?.M?.driver_run_solution?.S || "" );
            break;
        }
    }
  },[alphaSolution,driverSolution]);

 
  const problemName = problemSolution?.M?.problem_name?.S || "";
  const problemDescription = problemSolution?.M?.problem_description?.S || "";
  const relevantLinks = problemSolution?.M?.relevant_links?.L || [];
  const prerequisite = problemSolution?.M?.solution_prerequiste?.S || "";
  const prerequisiteLink = problemSolution?.M?.solution_prerequiste_links?.S || "";
  const requirement = problemSolution?.M?.solution_requirement?.S || "";
  const [solutionBlurred, setSolutionBlured] = useState(true);

  const copyText = () => {
    setButtonText('Copied');
    setTimeout(() => {
      setButtonText('Copy');
    }, 3000);
  };

  return (
    <>
      <div className=" solution-layout max-h-full pt-4 pl-3 p-2 overflow-auto flex flex-col text-left h-full m-auto flex-grow  ">
      {
        !isAuthorised && 
        <div className=" flex flex-col justify-center items-center">
          <img width={400} height={400} src={unauthorized_image}></img>
          <h2 className=" text-white text-3xl">Purchase to access</h2>
        </div>
      }
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
              <div className="solution relative">
                <div className=" absolute flex  top-20 right-8 z-1  w-8 h-8 justify-center items-center rounded-sm  bg-[#4C5ADF]">
                    <CopyToClipboard text={driverSolutionCode} >
                      <button onClick={copyText} className=' px-2 py-1 rounded-[0.25rem] bg-algoXcolor '>
                          <pre className='text-white  text-[16px]'> {buttonText} </pre>
                      </button>
                    </CopyToClipboard>
                </div>
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
      {relevantLinks && relevantLinks.length &&
        <div name="code-links" className="mt-8">
          <h2 className="problem-question text-white text-left border-b border-gray-700">Resources</h2>
            <div className="flex gap-2 flex-wrap">
              {
                relevantLinks.map((links, index) => 
                  {
                    return (
                      <div key={index} className=" p-3 pl-0  flex w-full max-h-[400px] h-[275px]  ">
                        <a href={links.SS[1]} className=" relative max-w-[500px] " target="_blank" rel="noopener noreferrer">
                            <YouTubeIcon className="absolute w-20 h-20 text-[#CD201F]  transition-all duration-300 scale-[2.5] hover:transition-all hover:duration-200 hover:scale-[3.5]   left-1/2 top-1/2  text-3xl "   />
                            <img src={links.SS[0]} width={400}  className=" flex  h-full  rounded-md ">
                            </img>
                        </a>
                      </div>
                    )
                })
              }
            </div>
        </div>
      }
      </div>
      
    </>
  );
};

export default CodeSolution;
