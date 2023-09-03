import React, { Component } from 'react'
import Grid from './grid';
import "./styles/problemGrid.css"

const ProblemGrid = ({ problemList }) => {

    if(!problemList){
        return <></>
    }
    const categorizedProblems = {
      easy: [],
      medium: [],
      hard: [],
    };
  
    problemList.map((problem,index) => {
      categorizedProblems[problem.difficulty].push(problem);
    });
  
    return (
        <div className='flex justify-evenly mt-12 flex-wrap gap-8'>
        <div>
          <h2 className='h2'>Easy</h2>
          <div className='grid gap-3'>
            {categorizedProblems.easy.map((problem) => (<Grid problemInfo={problem} />))}
          </div>
        </div>
      
        <div>
          <h2>Medium</h2>
          <div className='grid gap-3'>
            {categorizedProblems.medium.map((problem) => (<Grid problemInfo={problem} />))}
          </div>
        </div>
      
        <div>
          <h2>Hard</h2>
          <div className='grid gap-3'>
            {categorizedProblems.hard.map((problem) => (<Grid problemInfo={problem} />))}
          </div>
        </div>
      </div>
      
    );
};

export default ProblemGrid;