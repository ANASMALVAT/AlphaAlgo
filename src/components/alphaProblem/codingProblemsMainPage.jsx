import React, { Component, useEffect, useState,useLayoutEffect } from 'react'
import AlphaNavbar from '../../layouts/navbar/AlphaNavbar';
import TopicDropdown from './ui/topicsDropdown';
import ProblemGrid from './grid/problemGrid';
import ProblemInformation from './ui/problemInformation';
import { fetchQuestionList } from '../../services/fetchQuestionList';


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

    return (
        <>
        <AlphaNavbar/>
        <div className='  flex flex-col min-h-screen h-full w-full bg-[#00182D]'>
            
            <div className=' flex flex-col justify-center items-center h-80 mt-12 w-full text-center '>
               <ProblemInformation/>
            </div>
            { 
              loading && 
              <div className='h-60 w-60 ml-auto mr-auto'>
                <img className='animate-spin ' style={{ animationDuration: '3s' }} src='https://www.svgrepo.com//show/408307/cog-wheel-settings.svg'></img>
              </div>
            }

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