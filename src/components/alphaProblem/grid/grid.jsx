import React  from 'react'
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import "./styles/grid.css"


const Grid = ({problemInfo}) => {
    return(
    <Link to={`/problems/${problemInfo?.question_id}`}>
        <div className=' problem-grid flex flex-row items-center justify-between h-12 shadow-md rounded-sm bg-[#F5F5F5]'>
            
            <div className='problem-name mr-8 ml-8 font-normal text-gray-900'>
                <a>{problemInfo?.question_name}</a>
            </div>

            {  
                problemInfo?.isFree && 
                <img src='https://pngimg.com/d/free_PNG90767.png' className='h-8 w-8 mr-4'></img>
            }

            {  
                !problemInfo?.isFree && problemInfo?.question_difficulty != 'special' &&
                <h1 className=" font-mono font-bold  text-green-500 text-3xl hover:duration-500 hover:rotate-[540deg]  mr-4">$</h1>
            }

            {
                problemInfo?.question_difficulty === 'special' &&
                <h1 className=" font-mono   font-bold  text-[#2D33CA] text-3xl hover:duration-500 hover:rotate-[540deg]  mr-4">X</h1>
            }

            <div className={` flex ${ problemInfo?.question_difficulty === 'easy' ? 'bg-yellow-400' : problemInfo?.question_difficulty === 'medium' ? 'bg-orange-500' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-600' : 'bg-purple-600' } h-full rounded-r-md `}>
                <div className={`flex items-center justify-center ${ problemInfo?.question_difficulty === 'easy' ? 'bg-yellow-300' : problemInfo?.question_difficulty === 'medium' ? 'bg-orange-400' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-500' : 'bg-purple-500'} rounded-r-lg  first-letter: items-end w-8 h-full`}>
                </div>
                <div className={`${ problemInfo?.question_difficulty === 'easy' ? 'bg-yellow-400' : problemInfo?.question_difficulty === 'medium' ? 'bg-orange-500' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-600' : 'bg-purple-600' } items-end w-3 h-full rounded-r-md  `}>
                </div>
            </div>
        </div>
        
    </Link>

    )

}

export default Grid;