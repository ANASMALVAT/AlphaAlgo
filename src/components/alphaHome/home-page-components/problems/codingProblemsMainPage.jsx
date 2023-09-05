import React, { Component } from 'react'
import AlphaNavbar from '../../../../layouts/navbar/AlphaNavbar';
import TopicDropdown from './ui/topicsDropdown';
import ProblemGrid from './grid/problemGrid';
import ProblemInformation from './ui/problemInformation';

const CodingProblems = () => {

    const problemList = [
        {
          status: true,
          name: "Topological Sort",
          isFree: true,
          difficulty: "easy",
          category:"all"
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "easy",
          category:"all"
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: true,
          difficulty: "medium",
          category:"all"
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: true,
          difficulty: "hard",
          category:"all"
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "easy",
          category:"graph"
        },
        {
          status: true,
          name: "Topological Sort",
          isFree: false,
          difficulty: "easy",
          category:"graph"
        },
        {
            status: true,
            name: "Topological Sort",
            isFree: true,
            difficulty: "easy",
            category:"binary tree"
          },
          {
            status: true,
            name: "Topological Sort",
            isFree: false,
            difficulty: "easy",
            category:"graph"
          },
          {
            status: true,
            name: "Topological Sort",
            isFree: true,
            difficulty: "medium",
            category:"graph"
          },
          {
            status: true,
            name: "Topological Sort",
            isFree: true,
            difficulty: "hard",
            category:"graph"
          },
          {
            status: true,
            name: "Topological Sort",
            isFree: false,
            difficulty: "easy",
            category:"graph"
          },
          {
            status: true,
            name: "Topological Sort",
            isFree: false,
            difficulty: "easy",
            category:"graph"
          }
          
        
      ];
      
    return (
        <>
        <AlphaNavbar/>
        <div className='  flex flex-col min-h-screen h-full w-full bg-[#00182D]'>
            
            <div className=' flex flex-col justify-center items-center h-80 mt-12 w-full text-center '>
               <ProblemInformation/>
            </div>

            <div className='flex flex-col  flex-1 w-full h-2 flex-grow bg-[#F5F5F5] '>
                <TopicDropdown/>
                <ProblemGrid  problemList={problemList}/>
            </div>
        </div>
        </>
    )
}

export default CodingProblems;