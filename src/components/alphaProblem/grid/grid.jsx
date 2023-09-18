import React  from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import "./styles/grid.css"
import { Link } from 'react-router-dom';

const Grid = ({problemInfo}) => {
    return(
    <Link to="/coding-platform">
        <div className=' problem-grid flex flex-row items-center h-12  rounded-md bg-[#F5F5F5]'>
            <div className='problem-name mr-8 ml-8 font-semibold text-gray-600'>
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
        
           <div className={`${ problemInfo?.question_difficulty === 'easy' ? 'bg-green-300' : problemInfo?.question_difficulty === 'medium' ? 'bg-blue-300' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-300' : 'bg-purple-100'} items-end w-12 h-full`}>
            </div>
            <div className={`${ problemInfo?.question_difficulty === 'easy' ? 'bg-green-400' : problemInfo?.question_difficulty === 'medium' ? 'bg-blue-400' : problemInfo?.question_difficulty === 'hard' ? 'bg-red-400' : 'bg-purple-100' } items-end w-2 h-full rounded-r-md`}>
            </div>
        </div>
    </Link>

    )

}

export default Grid;