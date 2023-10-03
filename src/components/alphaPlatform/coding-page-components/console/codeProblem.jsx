import React, { useEffect,useState} from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import "./styles/codeProblem.css";

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
                        <h2 className="problem-question">{problemName}</h2>
                    </div>
                    <h1 className=" problem-statement text-justify word-break bg-[transparent] pt-4 pb-4  border-t border-b border-gray-700" style={{ whiteSpace: 'pre-line' }}>
                        <p className=" whitespace-pre-wrap  text-[#bfc4cd]">{problemStatement}</p>
                    </h1>
                </div>

                { 
                <div name ="example-1">
                    <h1 className=" problem-example text-xl antialiased  font-normal tracking-semibold landing-relaxed  text-white mb-3">Example </h1>
                    <div className="w-full mb-4">
                        <CodeBlock
                            text = {problemExampleInput}
                            language='jsx'
                            showLineNumbers={true}
                            theme={dracula}
                            customStyle={{color:'white'}}
                            />
                    </div>
                    <h1 className=" problem-example text-xl antialiased  font-normal tracking-semibold landing-relaxed  text-white mb-3">Output</h1>
                    <div name="output" className="w-full mb-5">
                        <CodeBlock
                            text = {problemExampleOutput}
                            language='jsx'
                            showLineNumbers={true}
                            theme={dracula}
                            />
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
                    <div className=" text-[16px] w-full bg-[#7d2525]  whitespace-pre-wrap rounded-md pt-4 pb-4 font-mono text-sm antialiased  font-normal tracking-normal landing-relaxed text-white">
                        <div className="flex pl-3">
                            <pre className=" flex text-center items-center text-gray-300">Expected Time complexity: </pre>
                            <CodeBlock text = {problemConstraint?.time_complexity?.S || ""} language='c' showLineNumbers={false} theme={dracula}  customStyle={{background:"transparent",color:"white",padding:"0px"}} codeBlockStyle={{padding:"0px"}} />
                        </div>
                        <div className="flex pl-3">
                            <pre className=" flex text-center items-center text-gray-300">Expected Space complexity: </pre>
                            <CodeBlock text = {problemConstraint?.space_complexity?.S || ""} language='c' showLineNumbers={false} theme={dracula}  customStyle={{background:"transparent",color:"white",padding:"0px"}} codeBlockStyle={{padding:"0px"}} />
                        </div>
                        <div className="flex  pl-3">
                            <pre className=" flex text-center items-center text-gray-300">Problem Constraints: </pre>
                            <CodeBlock text = {problemConstraint?.constraint?.S || ""} language='python' showLineNumbers={false} theme={dracula}  customStyle={{background:"transparent",color:"white",padding:"0px"}} codeBlockStyle={{padding:"0px"}}/>
                        </div>
                    </div>
                </div>

                {problemHint && (
                    <div className="hint" >
                        <h1 name="example" className="text-xl antialiased tracking-normal landing-relaxed text-white mb-2">Hint</h1>
                        <div className="h-24 w-full text-left p-4 bg-[#7d2525] rounded-md font-mono text-lg font-normal antialiased tracking-normal landing-relaxed text-white">
                            <div name="example" onClick={toggleBlur} className={`mb-4 clickable-div ${isHintBlurred ? 'blurred' : ''} antialiased  whitespace-pre-wrap tracking-normal landing-relaxed text-white mb-2 `}>
                                <pre className=" whitespace-pre-wrap text-[16px]">{problemHint}</pre>
                            </div>
                        </div>
                    </div>
                )}
        </div>
        </>
    )
}

export default CodeProblem;