import React, { useState, useEffect } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import "./styles/problemLayout.css";

const SolutionLayout = () => {
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

  const solutionCode = problemSolution?.M?.solution_code?.S || "";
  const solutionExplanation = problemSolution?.M?.solution_explanation?.S || "";
  const relevantExplanation = problemSolution?.M?.relevant_links?.SS || [];
  console.log(relevantExplanation);

  return (
    <>
      <div className=" problem-layout max-h-full overflow-auto flex flex-col text-start h-full w-full  flex-grow ">
        <div name="code-solution" className="w-full mb-4">
          <CodeBlock text={solutionCode} language="jsx" showLineNumbers={true} theme={dracula} />
        </div>

        <div name="code-explanation" className="w-full mb-8">
          <CodeBlock text={solutionExplanation} language="jsx" showLineNumbers={false} theme={dracula} />
        </div>
        <div>        
          {
            relevantExplanation.map((link, index) => 
                {
                return <div className="relevant_links w-[95%] h-48   ml-auto mr-auto mb-4 rounded-md bg-[#4C5ADF]"></div>
              })
          }
        </div>
        
        
      </div>
    </>
  );
};

export default SolutionLayout;
