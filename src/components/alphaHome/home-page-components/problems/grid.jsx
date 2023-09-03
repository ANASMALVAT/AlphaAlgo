import React  from 'react'
import Checkbox from '@mui/material/Checkbox';
import "./styles/grid.css"
import "../../../../assets/free.png"
const Grid = ({problemInfo}) => {
    return(
        <div className='flex flex-row items-center h-12  rounded-md bg-[#FFFFFF]'>

            <Checkbox required disabled={problemInfo.status} sx={{ '&.MuiSvgIcon-root': { fontSize: 24 }, '&.Mui-disabled': {color:'rgb(76 90 223)'}}} color="success" />
            
            <div className='span mr-12 text-algoXcolor font-normal text-lg'>
                <span>{problemInfo.name}</span>
            </div>
            {
                problemInfo.isFree &&
                <div>
                    {/* <img src ={require(`../../../../assets/free.png`)} className='h-7 w-7 mr-4' ></img> */}
                </div>
            }
            <div className={`${ problemInfo.difficulty === 'easy' ? 'bg-green-400': problemInfo.difficulty === 'medium' ? 'bg-blue-600':'bg-red-800'} items-end w-8 h-full rounded-r-md  `}>

            </div>
        </div>
    )

}

export default Grid;