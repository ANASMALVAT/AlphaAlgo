import React, { Component } from 'react'
import AlphaNavbar from '../../../../layouts/navbar/AlphaNavbar';
import TopicProblemList from './topicProblemList';
import ProblemGrid from './problemGrid';
const CodingProblems = () => {

    const problemList = [
        {
          status: true,
          name: "Topological Sort",
          isFree: true,
          difficulty: "easy",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "easy",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: true,
          difficulty: "medium",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: true,
          difficulty: "hard",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "easy",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "easy",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "medium",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "hard",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "easy",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "easy",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "medium",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "hard",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "easy",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "easy",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "medium",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "hard",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "medium",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "hard",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "easy",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "easy",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "medium",
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "hard",
        },
      ];
      
      

    return (
        <>
        <AlphaNavbar/>
        <div className='  flex flex-col min-h-screen h-full w-full bg-[#00182D]'>
            
            <div className=' flex flex-col justify-center items-center h-80 w-full text-center '>
                <div>
                    <h1 className='flex text-white h-24 justify-center  items-center  text-[42px] mt-4'>Coding Interview Questions!</h1>
                    <p className='text-white font-normal text-[22px]'> Questions that represent 20,000 hours of relentless pursuit. </p>
                    <p className='text-white font-normal text-[20px] mt-4 '> Questions that will make you ready for any Interviews! </p>
                </div>
                <div className=' mb-8'>
                    <button  className={`alpha-info-button overflow-hidden w-48 mt-8 mr-2 flex flex-row items-center rounded-sm px-6 py-2 font-mono font-normal justify-center hover:duration-100 text-xl text-white bg-[#4C5ADF] border-b-8 border-[#2d33ca]`}>
                        <h1 className=" font-mono   font-normal  text-[white] text-[20px] ">Purchase Alpha</h1>
                    </button>
                </div>
            </div>

            

            <div className='flex flex-col  flex-1 w-full h-2 flex-grow bg-[#F5F5F5] '>
                <TopicProblemList/>
                <ProblemGrid  problemList={problemList}/>
            </div>
        </div>
        </>
    )

}

export default CodingProblems;