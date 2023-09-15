import React  from 'react'
import Checkbox from '@mui/material/Checkbox';
import LockIcon from '@mui/icons-material/Lock';
import "./../styles/grid.css"

const Grid = ({problemInfo}) => {
    return(
        <div className='flex flex-row items-center h-12  rounded-md bg-[#FFFFFF]'>
            <Checkbox required disabled={problemInfo.status} sx={{ '&.MuiSvgIcon-root': { fontSize: 24 }, '&.Mui-disabled': {color:'rgb(76 90 223)'}}} color="success" />
            <LockIcon sx={{color:"#2D33CA",marginLeft:"5px",marginRight:"5px"}}/>

            <div className='problem-name span mr-4 text-algocodeOutput  text-md'>
                {problemInfo.name}
            </div>

            <div className={`${ problemInfo.difficulty === 'easy' ? 'bg-green-400': problemInfo.difficulty === 'medium' ? 'bg-blue-600':'bg-red-700'} items-end w-6 h-full  `}>
            </div>
            <div className={`${ problemInfo.difficulty === 'easy' ? 'bg-green-700': problemInfo.difficulty === 'medium' ? 'bg-blue-700':'bg-red-900'} items-end w-2 h-full rounded-r-md  `}>
            </div>

        </div>
    )

}

export default Grid;