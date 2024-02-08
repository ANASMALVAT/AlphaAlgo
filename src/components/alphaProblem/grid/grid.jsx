import React  from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./styles/grid.css"


const Grid = ({problemInfo, isUserLoggedIn, isProblemSolved}) => {

    const problemCategoryType = useSelector((state) => state.problemType.difficulty);

    return(
    <Link to={`/problems/${problemInfo?.question_id}`}>
        
        <div className=' problem-grid  flex flex-row items-center justify-between h-12 pl-3 shadow-md rounded-sm bg-[#F5F5F5]'>
            
            {
                isUserLoggedIn && isProblemSolved &&
                <div className=' w-5 h-5  rounded-full border border-gray-300 bg-green-700'>
                </div>
            }

            {
                isUserLoggedIn && !isProblemSolved &&
                <div className=' w-5 h-5  rounded-full border border-gray-400 bg-white'>
                </div>
            }
            
            {
                !isUserLoggedIn && !isProblemSolved && <></>
            }

            <div className='problem-name mr-6 ml-6 font-normal text-gray-900'>
                <a>{ !problemCategoryType ? "Anonymous" :  problemInfo?.question_name}</a>
            </div>

            {  
                !problemCategoryType ? <div  className='h-4 w-4'></div>
                : problemInfo?.isFree && 
                <img src='https://alpha-images.s3.amazonaws.com/free.png' className='h-8 w-8 mr-4'></img>
            }

            {  
                !problemInfo?.isFree && problemInfo?.question_difficulty != 'special' &&
                <h1 className=" font-mono font-bold  text-green-500 text-3xl hover:duration-500 hover:rotate-[540deg]  mr-4">$</h1>
            }

            {
                !problemCategoryType ? 
                <h1 className=" font-mono   font-bold  text-[#2D33CA] text-3xl hover:duration-500 hover:rotate-[540deg]  mr-4 w-4"></h1>
                :  problemInfo?.question_difficulty === 'special' &&
                <h1 className=" font-mono   font-bold  text-[#2D33CA] text-3xl hover:duration-500 hover:rotate-[540deg]  mr-4">X</h1>
            }

            <div className={` flex ${ !problemCategoryType ? "bg-gray-400" :  problemInfo?.question_difficulty === 'easy' ? 'bg-yellow-400' : problemInfo?.question_difficulty === 'medium' ? 'bg-orange-500' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-600' : 'bg-purple-600' } h-full rounded-r-md `}>
                <div className={`flex items-center justify-center ${ !problemCategoryType ? "bg-gray-400" : problemInfo?.question_difficulty === 'easy' ? 'bg-yellow-300' : problemInfo?.question_difficulty === 'medium' ? 'bg-orange-400' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-500' : 'bg-purple-500'} rounded-r-lg  first-letter: items-end w-8 h-full`}>
                </div>
                <div className={`${ !problemCategoryType ? "bg-gray-400" : problemInfo?.question_difficulty === 'easy' ? 'bg-yellow-400' : problemInfo?.question_difficulty === 'medium' ? 'bg-orange-500' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-600' : 'bg-purple-600' } items-end w-3 h-full rounded-r-md  `}>
                </div>
            </div>
        </div>
        
    </Link>

    )

}

export default Grid;