import React, { Component, useEffect, useState,useLayoutEffect } from 'react'
import AlphaNavbar from '../../layouts/navbar/AlphaNavbar';
import ProblemGrid from './grid/problemGrid';
import TopicFilterDropdown from './ui/topicFilterDropdown';
import ProblemInformation from './ui/problemInformation';
import ProblemButtons from './ui/problemButtons';
import ProblemRandom from './ui/problemRandom';
import { fetchQuestionList } from '../../services/fetchQuestionList';

import DefaultFooter from '../../layouts/footer/AlphaFooter';


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
            
            <div className=' flex flex-col  justify-center items-center h-48 mt-10 w-full text-center '>
               <ProblemInformation/>
            </div>
            { 
              loading && 
              <div className='h-60 w-60 ml-auto mr-auto'>
                <img className='animate-spin ' style={{ animationDuration: '3s' }} src='https://alpha-images.s3.amazonaws.com/loading-wheel.svg'></img>
              </div>
            }

            {!loading  &&
              (
                <div className='flex flex-col min-h-screen flex-1 w-full h-2 flex-grow bg-white '>
                  <div className=' flex flex-wrap gap-8 topic-dropdown mt-8 justify-evenly '>
                    <TopicFilterDropdown />
                    <ProblemButtons />
                    <ProblemRandom />
                  </div>
                  <div className='  '>
                      <ProblemGrid problemList = {questions}/>
                  </div>
                </div>
              )
            }
        </div>
        <DefaultFooter/>
        </>
    )
}

export default CodingProblems;