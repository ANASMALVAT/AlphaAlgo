import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Grid from './grid';
import './styles/problemGrid.css';

const ProblemGrid = ({ problemList }) => {

  
  const [categorizedProblems, setCategorizedProblems] = useState({ easy: [], medium: [], hard: [], special:[]});
  const problemCategories = useSelector((state) => state.problemCategories.category);
  
  useEffect(() => {
    const updatedCategorizedProblems = { easy: [], medium: [], hard: [], special :[]};
    for (let i = 0; i < problemList.length; i++) {
        const problem = problemList[i];
        if (problem &&  problemCategories.length === 0 || problemCategories.includes(problem?.question_category)) {
          updatedCategorizedProblems[problem?.question_difficulty].push(problem);
        }
    }
    setCategorizedProblems(updatedCategorizedProblems);
  }, [problemList, problemCategories]);



  return (
    <div className='flex justify-evenly mt-12 mb-12 flex-wrap gap-8'>

    { categorizedProblems.easy.length  != 0 &&
      <div className='category-easy'>
        <h2 className='h2 mb-2'>Easy</h2>
        <div className='grid gap-3 mt-4 fade-in'>
          {categorizedProblems.easy.map((problem) => (<Grid   className="fade-in" problemInfo={problem} key={problem?.id} />))}
        </div>
      </div>
    }


    { categorizedProblems.medium.length != 0 &&
      <div className='category-medium'>
        <h2>Medium</h2>
        <div className='grid gap-3 mt-4 fade-in'>
          {categorizedProblems.medium.map((problem) => (<Grid  className="fade-in" problemInfo={problem} key={problem?.id} /> ))}
        </div>
      </div>
    }

    { categorizedProblems.hard.length  != 0 &&
      <div className='category-hard'>
        <h2>Hard</h2>
        <div className='grid gap-3 mt-4 fade-in'>
          {categorizedProblems.hard.map((problem) => ( <Grid  className="fade-in" problemInfo={problem} key={problem?.id} /> ))}
        </div>
      </div>
    }

      { categorizedProblems.special.length != 0 &&
        <div className='category-special'>
          <div className='flex text-center justify-center align-middle' >
              <div className=' flex text-center text-algoXcolor justify-center align-middle font-semibold mr-1'>
                <h2 className=' h-full text-[32px] font-semibold'>X</h2>
              </div>
              <div className=' flex text-center justify-center align-middle'>
                <h2 className=' h-full'>special</h2>
              </div>
          </div>
          <div className='grid gap-3 mt-4 fade-in'>
            {
              categorizedProblems.special.map((problem) => (  <Grid  className="fade-in" problemInfo={problem} key={problem?.id} /> ))
            }
          </div>
        </div>
      }
    </div>
    
  );
};

export default ProblemGrid;