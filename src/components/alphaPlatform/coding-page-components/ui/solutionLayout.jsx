import React, { useState, useEffect } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import "./styles/problemLayout.css";

const SolutionLayout = () => {
  const [problemSolution, setProblemSolution] = useState(null);

  useEffect(() => {
    const storedProblemSolution = localStorage.getItem("problemSolution");
    if (storedProblemSolution) {
      try {
        const parsedData = JSON.parse(storedProblemSolution);
        setProblemSolution(parsedData);
      } catch (error) {
        console.error("Error parsing stored problemData:", error);
      }
    }
  }, []);

  const solutionCode = problemSolution?.M?.solution_code?.S || null;
  const solutionExplanation = problemSolution?.M?.solution_explanation?.S || null;
  const relevantExplanation = problemSolution?.M?.relevant_links?.SS || [];

  return (
    <>
      <div className=" problem-layout max-h-full overflow-y-auto flex flex-col text-start h-full w-full overflow-hidden flex-grow ">
        <div name="code-solution" className="w-full mb-4">
          <CodeBlock text={solutionCode} language="jsx" showLineNumbers={true} theme={dracula} />
        </div>

        <div name="code-explanation" className="w-full mb-8">
          <CodeBlock text={solutionExplanation} language="jsx" showLineNumbers={false} theme={dracula} />
        </div>
        {
            relevantExplanation.map((link, index) => 
                (
                <div className="relevant_links w-[95%] h-48 ml-auto mr-auto mb-4 rounded-md bg-[#4C5ADF]">
                </div>
                ))
        }
        
      </div>
    </>
  );
};

export default SolutionLayout;
