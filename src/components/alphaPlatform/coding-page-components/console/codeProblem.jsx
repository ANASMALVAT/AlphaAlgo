import React, { useEffect,useState} from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeProblem = () => {

    const [problemData, setProblemData] = useState(null);

    useEffect(() => {

      const storedProblemData = sessionStorage.getItem(`problemData`);
      if (storedProblemData) {
        try {
          const parsedData = JSON.parse(storedProblemData);
          setProblemData(parsedData);
        } catch (error) {
          console.error("Error parsing stored problemData:", error);
        }
      }

    }, []);
  
    const problemName = problemData?.M?.question_name.S || "";
    const problemStatement = problemData?.M?.question_statement.S || "";
    const problemHint = problemData?.M?.hint.S || "";
    const problemConstraint = problemData?.M?.question_constraints.M || "";
    
    const problemExampleInput = problemData?.M?.example?.M?.input.S || "";
    const problemExampleOutput = problemData?.M?.example?.M?.output.S || "";
    const problemVisualization = problemData?.M?.visualization?.S || "";
    const [isHintBlurred, setIsHintBlurred] = useState(true);
    const [isConstraintBlurred, setIsConstraintBlurred] = useState(true);


    const toggleBlur = () => {
        setIsHintBlurred(!isHintBlurred);
      };

    return (
        <>
            <div className=" code-problem flex flex-col gap-2 h-full w-full whitespace-pre overflow-auto rounded-md ">

                <div className="mb-2">
                    <div className="flex ">
                        <h2 className="problem-question text-white">{problemName}</h2>
                    </div>
                    <h1 className=" problem-statement text-justify word-break bg-[transparent] pt-4 pb-4  border-t border-b border-gray-700" style={{ whiteSpace: 'pre-line' }}>
                        <p className=" whitespace-pre-wrap  text-[#bfc4cd]">{problemStatement}</p>
                    </h1>
                </div>

                { 
                <div name ="example-1">
                    <h1 className=" problem-example text-xl antialiased  font-normal tracking-semibold landing-relaxed  text-white mb-3">Example </h1>
                    <div className="w-full mb-4">
                        <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px"}} style={tomorrowNightBlue}>
                            {problemExampleInput}
                        </SyntaxHighlighter>
                    </div>
                    <h1 className=" problem-example text-xl antialiased  font-normal tracking-semibold landing-relaxed  text-white mb-3">Output</h1>
                    <div name="output" className="w-full mb-5">
                        <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px"}} style={tomorrowNightBlue}>
                            {problemExampleOutput}
                        </SyntaxHighlighter>
                    </div>
                </div>
                }

                { problemVisualization &&
                
                    <div className="mb-4">
                        <h1 className=" problem-example text-xl antialiased  font-normal tracking-semibold landing-relaxed  text-white mb-4">Visualization </h1>
                        <img src = {problemVisualization} className="rounded-md"></img>
                    </div>
                }

                <div name = 'constraint' className="mb-4  w-full  rounded-md font-mono">
                    <h1 name = "example" className=" text-xl antialiased tracking-normal landing-relaxed text-white mb-2">Constraints </h1>
                    <div className=" text-[16px] w-full bg-[#002451]  whitespace-pre-wrap rounded-md pt-4 pb-4 font-mono text-sm antialiased  font-normal tracking-normal landing-relaxed text-white">

                        <div className="flex pl-3">
                            <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px"}} style={tomorrowNightBlue}>
                                Expected Time Complexity:
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px"}} style={tomorrowNightBlue}>
                                {problemConstraint?.time_complexity?.S }
                            </SyntaxHighlighter>
                        </div>

                        <div className="flex pl-3">
                            <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px"}} style={tomorrowNightBlue}>
                                Expected Space Complexity:
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px"}} style={tomorrowNightBlue}>
                                {problemConstraint?.space_complexity?.S }
                            </SyntaxHighlighter>
                        </div>

                        <div className="flex  pl-3">
                            <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px"}} style={tomorrowNightBlue}>
                                Problem Constraints:
                            </SyntaxHighlighter>
                            <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px"}} style={tomorrowNightBlue}>
                                {problemConstraint?.constraint?.S }
                            </SyntaxHighlighter>
                        </div>

                    </div>
                </div>

                {problemHint && (
                    <div className="hint" >
                        <h1 name="example" className="text-xl antialiased tracking-normal landing-relaxed text-white mb-2">Hint</h1>
                            <div name="example" onClick={toggleBlur} className={`mb-4 clickable-div ${isHintBlurred ? 'blurred' : ''} antialiased  whitespace-pre-wrap tracking-normal landing-relaxed text-white mb-2 `}>
                                <SyntaxHighlighter language="javascript" wrapLongLines={true} customStyle={{borderRadius:"8px",fontSize:"16px",paddingTop:"10px",paddingBottom:"10px"}} style={tomorrowNightBlue}>
                                    {problemHint}
                                </SyntaxHighlighter>                         
                            </div>
                    </div>
                )}
        </div>
        </>
    )
}

export default CodeProblem;