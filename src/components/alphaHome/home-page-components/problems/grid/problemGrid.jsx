import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Grid from './grid';
import './../styles/problemGrid.css';

const ProblemGrid = ({ problemList }) => {
  const [categorizedProblems, setCategorizedProblems] = useState({
    easy: [],
    medium: [],
    hard: [],
  });
  const problemTopic = useSelector((state) => state.problemTopic.topic);

  useEffect(() => {
    const updatedCategorizedProblems = {
      easy: [],
      medium: [],
      hard: [],
    };

    for (let i = 0; i < problemList.length; i++) {
      const problem = problemList[i];
      if (problemTopic === 'all' || problem.category === problemTopic) {
        updatedCategorizedProblems[problem.difficulty].push(problem);
      }
    }

    setCategorizedProblems(updatedCategorizedProblems);
  }, [problemList, problemTopic]);

  return (
    <div className='flex justify-evenly mt-12 mb-12 flex-wrap gap-8'>
      <div>
        <h2 className='h2'>Easy</h2>
        <div className='grid gap-3'>
          {categorizedProblems.easy.map((problem) => (
            <Grid problemInfo={problem} key={problem.id} />
          ))}
        </div>
      </div>

      <div>
        <h2>Medium</h2>
        <div className='grid gap-3'>
          {categorizedProblems.medium.map((problem) => (
            <Grid problemInfo={problem} key={problem.id} />
          ))}
        </div>
      </div>

      <div>
        <h2>Hard</h2>
        <div className='grid gap-3'>
          {categorizedProblems.hard.map((problem) => (
            <Grid problemInfo={problem} key={problem.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemGrid;
