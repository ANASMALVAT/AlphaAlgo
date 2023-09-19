import React, { useEffect,useState} from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import "./styles/codeProblem.css";

const CodeProblem = () => {

    const [problemData, setProblemData] = useState(null);

    useEffect(() => {
    
      const storedProblemData = localStorage.getItem("problemData");
      if (storedProblemData) {
        try {
          const parsedData = JSON.parse(storedProblemData);
          setProblemData(parsedData);
        } catch (error) {
          console.error("Error parsing stored problemData:", error);
        }
      }
    }, []);
  
    const problemName = problemData?.M?.question_name.S || null;
    const problemStatement = problemData?.M?.question_statement.S || null;
    const problemHint = problemData?.M?.hint.S || null;
    const problemConstraint = problemData?.constraints || [];
  
    const problemExampleOneInput = problemData?.M?.example_1?.M?.input.S || null;
    const problemExampleOneOutput = problemData?.M?.example_1?.M?.output.S || null;
    const problemExampleTwoInput = problemData?.M?.example_2?.M?.input?.S || null;
    const problemExampleTwoOutput = problemData?.M?.example_2?.M?.output?.S || null;



    return (
        <>
            <div className=" code-problem flex flex-col gap-4 h-full w-full whitespace-pre  overflow-auto rounded-md border border-gray-700 ">

                <div className="mb-2">
                    <h1 className="problem-question text-2xl font-normal landing-relaxed text-white mb-4">
                        {problemName}
                    </h1>
                    <h1 className=" problem-statement word-break text-md font-normal  landing-relaxed  text-gray-400" style={{ whiteSpace: 'pre-line' }}>
                        <code>{problemStatement}</code>
                    </h1>
                </div>

                { problemExampleOneInput && 
                <div name ="example-1">
                    <h1 className=" problem-example text-xl antialiased  font-normal tracking-normal landing-relaxed text-white mb-4">Example 1</h1>
                    <p className="word-break text-lg antialiased  tracking-normal landing-relaxed text-white mb-2">
                        Input
                    </p>
                    <div className="w-full mb-4">
                        <CodeBlock
                            text = {problemExampleOneInput}
                            language='jsx'
                            showLineNumbers={true}
                            theme={dracula}
                            customStyle={{color:'white'}}
                            />
                    </div>
                    <p className="word-break  text-lg  tracking-normal text-white mb-2">
                        Output
                    </p>
                    <div name="output" className="w-full mb-8">
                        <CodeBlock
                            text = {problemExampleOneOutput}
                            language='jsx'
                            showLineNumbers={true}
                            theme={dracula}
                            />
                    </div>
                </div>
                }

                { problemExampleTwoInput &&
                    <div name ="example 2">
                    <h1 className=" problem-example text-xl antialiased  font-normal tracking-normal landing-relaxed text-white mb-4">Example 2</h1>
                    <p className="word-break text-lg antialiased  tracking-normal landing-relaxed text-white mb-2">
                        Input
                    </p>
                    <div className="w-full mb-4">
                        <CodeBlock
                            text = {problemExampleTwoInput}
                            language='jsx'
                            showLineNumbers={true}
                            theme={dracula}
                            customStyle={{color:'white'}}
                            />
                    </div>
                    <p className="word-break  text-lg  tracking-normal text-white mb-2">
                        Output
                    </p>
                    <div name="output" className="w-full mb-8">
                        <CodeBlock
                            text = {problemExampleTwoOutput}
                            language='jsx'
                            showLineNumbers={true}
                            theme={dracula}
                            />
                    </div>
                </div>
                }
                <div name = 'constraint' className="mb-8">
                    <h1 name = "example" className=" text-xl antialiased tracking-normal landing-relaxed text-white mb-2">Constraints {problemData?.constraints} </h1>
                        <div className="h-16 w-full bg-algoprob rounded-md text-center font-mono text-xl antialiased  font-bold tracking-normal landing-relaxed text-white">
                    </div>
                </div>

                    {problemHint && (
                    <div name="hint" className="mb-8">
                        <h1 name="example" className="text-xl antialiased tracking-normal landing-relaxed text-white mb-2">Hint</h1>
                        <div className="h-16 w-full text-left p-2 bg-algoprob rounded-md font-mono text-lg font-normal antialiased tracking-normal landing-relaxed text-white">
                        <h3 name="example" className="text-[18px] antialiased tracking-normal landing-relaxed text-white mb-2">
                            {problemHint}
                        </h3>
                    </div>
                </div>
)}
            </div>
        </>
    )
}

export default CodeProblem;