import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import "./styles/codeSolution.css";

const CodeProblem = ({ problemData }) => {

    return (
        <>
            <div className=" code-problem flex flex-col gap-4 h-full w-full whitespace-pre  overflow-auto rounded-md border border-gray-700 ">

                <div className="mb-2">
                    <h1 className="problem-question text-2xl font-normal landing-relaxed text-white mb-4">
                        Problem Question {problemData?.name}
                    </h1>
                    <p className=" problem-statement word-break text-md font-normal  landing-relaxed  text-white" style={{ whiteSpace: 'pre-line' }}>
                        problem statement is large so please read it carefully
                        {problemData?.question}
                    </p>
                </div>
                <div name ="example 1">
                    <h1 className=" problem-example text-xl antialiased  font-normal tracking-normal landing-relaxed text-white mb-4">Example 1</h1>
                    <p className="word-break text-lg antialiased  tracking-normal landing-relaxed text-white mb-2">
                        Input
                    </p>
                    <div className="w-full mb-4">
                        <CodeBlock
                            text = {problemData?.InputOne ? problemData?.InputOne : ``}
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
                            text = {problemData?.InputOneSol ? problemData?.InputOneSol : ``}
                            language='jsx'
                            showLineNumbers={true}
                            theme=''
                            />
                    </div>
                </div>
                <div name ="example 2">
                    <h1 className=" problem-example text-xl antialiased tracking-normal landing-relaxed text-white mb-4">Example 2 {problemData?.name} </h1>
                    <p className="word-break text-lg antialiased tracking-normal landing-relaxed text-white mb-2">
                        Input
                    </p>
                    <div name="input" className="w-full mb-4">
                        <CodeBlock
                            text = {problemData?.InputTwo ? problemData?.InputTwo : ``}
                            language='jsx'
                            showLineNumbers={true}
                            theme={dracula}
                            customStyle={{color:'white'}}
                            />
                    </div>
                    <p className="word-break text-lg antialiased tracking-normal landing-relaxed text-white mb-2">
                        Output
                    </p>

                    <div name="output" className="w-full mb-8">
                        <CodeBlock
                            text = {problemData?.InputTwoSol ? problemData?.InputTwoSol : ``}
                            language='jsx'
                            showLineNumbers={true}
                            theme=''
                            />
                    </div>
                </div>

                <div name = 'constraint' className="mb-8">
                    <h1 name = "example" className=" text-xl antialiased tracking-normal landing-relaxed text-white mb-2">Constraints {problemData?.constraints} </h1>
                        <div className="h-16 w-full bg-algoprob rounded-md text-center font-mono text-xl antialiased  font-bold tracking-normal landing-relaxed text-white">
                    </div>
                </div>

                <div name = "hint" className="mb-8">
                    <h1 name = "example" className=" text-xl antialiased  tracking-normal landing-relaxed text-white mb-2">Hint {problemData?.hint} </h1>
                    <div className="h-16 w-full  bg-algoprob rounded-md text-center font-mono text-xl antialiased  font-bold tracking-normal landing-relaxed text-white">
                    </div>
                </div>
                <br/>

            </div>
        </>
    )
}

export default CodeProblem;