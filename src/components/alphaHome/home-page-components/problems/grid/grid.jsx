import React  from 'react'
import Checkbox from '@mui/material/Checkbox';
import "./../styles/grid.css"

const Grid = ({problemInfo}) => {
    return(
        <div className='flex flex-row items-center h-12  rounded-md bg-[#FFFFFF]'>
            
            <Checkbox required disabled={problemInfo.status} sx={{ '&.MuiSvgIcon-root': { fontSize: 24 }, '&.Mui-disabled': {color:'rgb(76 90 223)'}}} color="success" />

            <div className='span mr-12 text-algocodeOutput font-normal text-md'>
                <span>{problemInfo.name}</span>
            </div>

            {
                problemInfo.isFree && <div></div>
            }

            <div className={`${ problemInfo.difficulty === 'easy' ? 'bg-green-400': problemInfo.difficulty === 'medium' ? 'bg-blue-600':'bg-red-700'} items-end w-8 h-full  `}>
            </div>
            <div className={`${ problemInfo.difficulty === 'easy' ? 'bg-green-700': problemInfo.difficulty === 'medium' ? 'bg-blue-700':'bg-red-900'} items-end w-2 h-full rounded-r-md  `}>
            </div>

        </div>
    )

}

export default Grid;