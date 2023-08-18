import React from "react";
import { CodeBlock,dracula, } from "react-code-blocks";

const ProblemLayout = ({ problemData }) => {

    if(!problemData){
        return (
            <div className="flex flex-col  text-start h-full w-full">
                <h1 className="font-mono text-2xl antialiased font-bold tracking-normal landing-relaxed text-white mb-4">
                    No problem selected
                </h1>
            </div>
        );
    }
    return (
        <>
            <div className="flex flex-col  text-start h-full w-full">

                <div className=" mb-5">
                    <h1 name = "prob name" className="font-mono text-2xl antialiased  font-bold tracking-normal landing-relaxed text-white mb-4">Problem Question {problemData?.name} </h1>
                    <p name = "prob stat" className="word-break font-mono text-lg antialiased  font-normal tracking-normal landing-relaxed text-white">
                        problem statement is large so please read it carefully
                    </p>
                </div>

                <div name ="example 1">
                    <h1 name = "example" className="font-mono text-xl antialiased  font-bold tracking-normal landing-relaxed text-white mb-4">Example 1 {problemData?.name} </h1>
                    <p className="word-break font-mono text-lg antialiased  font-semibold tracking-normal landing-relaxed text-white mb-2">
                        Input
                    </p>
                    <div name="input" className="w-full mb-4">
                        <CodeBlock
                            text = {`asdasdf`}
                            language='jsx'
                            showLineNumbers={true}
                            theme=''
                            />
                    </div>
                    <p className="word-break font-mono text-lg antialiased  font-semibold tracking-normal landing-relaxed text-white mb-2">
                        Output
                    </p>
                    <div name="output" className="w-full mb-8">
                        <CodeBlock
                            text = {`asdfas`}
                            language='jsx'
                            showLineNumbers={true}
                            theme=''
                            />
                    </div>
                </div>
                
                <div name ="example 2">
                    <h1 name = "example" className="font-mono text-xl antialiased  font-bold tracking-normal landing-relaxed text-white mb-4">Example 2 {problemData?.name} </h1>
                    <p className="word-break font-mono text-lg antialiased  font-semibold tracking-normal landing-relaxed text-white mb-2">
                        Input
                    </p>
                    <div name="input" className="w-full mb-4">
                        <CodeBlock
                            text = {`asdasdf`}
                            language='jsx'
                            showLineNumbers={true}
                            theme=''
                            />
                    </div>
                    <p className="word-break font-mono text-lg antialiased  font-semibold tracking-normal landing-relaxed text-white mb-2">
                        Output
                    </p>
                    <div name="output" className="w-full mb-8">
                        <CodeBlock
                            text = {`asdfas
                            asdf
                            asdf
                            asdf
                            asdf
                            asdf`}
                            language='jsx'
                            showLineNumbers={true}
                            theme=''
                            />
                    </div>
                </div>

                <div name = 'constraint' className="mb-8">
                    <h1 name = "example" className="font-mono text-xl antialiased  font-bold tracking-normal landing-relaxed text-white mb-2">Constraints {problemData?.name} </h1>
                        <div className="h-16 w-full bg-algoprob rounded-md text-center font-mono text-xl antialiased  font-bold tracking-normal landing-relaxed text-white">
                           
                    </div>
                </div>

                <div name = "hint" className="mb-8">
                <h1 name = "example" className="font-mono text-xl antialiased  font-bold tracking-normal landing-relaxed text-white mb-2">Hint {problemData?.name} </h1>
                    <div className="h-16 w-full  bg-algoprob rounded-md text-center font-mono text-xl antialiased  font-bold tracking-normal landing-relaxed text-white">
                    </div>
                </div>
                <br/>
               
            </div>
        </>
    )
}

export default ProblemLayout;