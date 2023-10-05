import React  from 'react'
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import "./styles/grid.css"


const Grid = ({problemInfo}) => {
    return(
    <Link to={`/problems/${problemInfo?.question_id}`}>
        <div className=' problem-grid flex flex-row items-center h-12 shadow-md rounded-sm bg-[#F5F5F5]'>
            
            <div className='problem-name mr-8 ml-8 font-normal text-gray-900'>
                <a>{problemInfo?.question_name}</a>
            </div>

            {  
                problemInfo?.isFree && 
                <img src='https://pngimg.com/d/free_PNG90767.png' className='h-8 w-8 mr-4'></img>
            }

            <div className={` flex ${ problemInfo?.question_difficulty === 'easy' ? 'bg-yellow-400' : problemInfo?.question_difficulty === 'medium' ? 'bg-orange-500' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-600' : 'bg-purple-600' } h-full rounded-r-md `}>
                <div className={`flex items-center justify-center ${ problemInfo?.question_difficulty === 'easy' ? 'bg-yellow-300' : problemInfo?.question_difficulty === 'medium' ? 'bg-orange-400' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-500' : 'bg-purple-500'} rounded-r-lg  first-letter: items-end w-8 h-full`}>
                </div>
                <div className={`${ problemInfo?.question_difficulty === 'easy' ? 'bg-yellow-400' : problemInfo?.question_difficulty === 'medium' ? 'bg-orange-500' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-600' : 'bg-purple-600' } items-end w-2 h-full rounded-r-md  `}>
                </div>
            </div>
        </div>
        
    </Link>

    )

}

export default Grid;