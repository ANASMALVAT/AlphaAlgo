import React  from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Form from "react-bootstrap/Form"
import { Link } from 'react-router-dom';

import "./styles/grid.css"

const Grid = ({problemInfo}) => {
    return(
    <Link to="/coding-platform">
        <div className=' problem-grid flex shadow-md flex-row items-center h-12  rounded-sm bg-[#F5F5F5]'>
            
            {
                <Form>
                    <div className='ml-4'>
                        <Form.Check.Input type={"radio"} color='green' checked={problemInfo?.isFree} />
                    </div> 
                </Form>
            }
            <div className='problem-name mr-8 ml-8 font-semibold text-gray-500'>
                    <a>{problemInfo?.question_name}</a>
            </div>
            {  
                problemInfo?.isFree && 
                <LockOpenIcon  sx={{color:"purple",marginLeft:"10px",marginRight:"20px",fontWeight:"bold"}}/>
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