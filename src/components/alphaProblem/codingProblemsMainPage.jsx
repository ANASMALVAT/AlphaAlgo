import React, { Component, useEffect, useState,useLayoutEffect } from 'react'
import AlphaNavbar from '../../layouts/navbar/AlphaNavbar';
import TopicDropdown from './ui/topicsDropdown';
import ProblemGrid from './grid/problemGrid';
import ProblemInformation from './ui/problemInformation';
import { fetchQuestionList } from '../../services/fetchQuestionList';
import LinearProgress from '@mui/material/LinearProgress';

import { useScrollTrigger } from '@mui/material';

const CodingProblems = () => {

      const [questions, setQuestions] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error,setError] = useState();

      useLayoutEffect (() => { 
        fetchQuestionList()
        .then(questionList =>
        { 
          setQuestions(questionList);
          setLoading(false);
        })
        .catch(error=> {setError("Please try again in some time!")})
      },[])

      console.log(questions);
    return (
        <>
        <AlphaNavbar/>
        <div className='  flex flex-col min-h-screen h-full w-full bg-[#00182D]'>
            
            <div className=' flex flex-col justify-center items-center h-80 mt-12 w-full text-center '>
               <ProblemInformation/>
            </div>
            { loading && <LinearProgress color="secondary" /> }

            {!loading  &&
            <div className='flex flex-col  flex-1 w-full h-2 flex-grow bg-white '>
                <TopicDropdown/>
                <ProblemGrid  problemList = {questions}/>
            </div>
            }
        </div>
        </>
    )
}

export default CodingProblems;