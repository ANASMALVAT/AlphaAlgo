import React  from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import "./styles/grid.css"
import { Link } from 'react-router-dom';

const Grid = ({problemInfo}) => {
    return(
    <Link to="/coding-platform">
        <div className=' problem-grid flex shadow-md flex-row items-center h-12  rounded-sm bg-[#F5F5F5]'>
            <div className='problem-name mr-8 ml-8 font-semibold text-gray-700'>
                    <a>{problemInfo?.question_name}</a>
            </div>
            {  !problemInfo?.isFree &&
                <div className='star-outline'>
                    <div className='ml-[10px] mr-[25px]'> </div>
                </div>
            }
            {  problemInfo?.isFree && 
                <LockOpenIcon  sx={{color:"#4C5ADF",marginLeft:"10px",marginRight:"25px"}}/>
            }
            <div className={` flex ${ problemInfo?.question_difficulty === 'easy' ? 'bg-green-600' : problemInfo?.question_difficulty === 'medium' ? 'bg-blue-600' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-600' : 'bg-purple-100' } h-full rounded-r-md `}>
                <div className={`flex items-center justify-center ${ problemInfo?.question_difficulty === 'easy' ? 'bg-green-500' : problemInfo?.question_difficulty === 'medium' ? 'bg-blue-500' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-500' : 'bg-purple-100'} rounded-r-lg  first-letter: items-end w-8 h-full`}>
                </div>
                <div className={`${ problemInfo?.question_difficulty === 'easy' ? 'bg-green-600' : problemInfo?.question_difficulty === 'medium' ? 'bg-blue-600' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-600' : 'bg-purple-100' } items-end w-2 h-full rounded-r-md  `}>
                </div>
            </div>
        </div>
    </Link>

    )

}

export default Grid;