import React, { Component } from 'react'
import HeightIcon from '@mui/icons-material/Height';
import SwitchRightIcon from '@mui/icons-material/SwitchRight';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { useDispatch } from 'react-redux';
import { toggelWidth,toggelHeight,toggelWindow } from '../../../../redux/slices/layoutSlice';

const VerticalHorizontalButtons = () => {
    const dispatch = useDispatch();

    const changeWidth = () => {
        dispatch(toggelWidth());
    }

    const changeHeight = () => {
        dispatch(toggelHeight());
    }
    const swapWindow = () => {
        dispatch(toggelWindow());
        
    }

    return (
        <>
                <button onClick={changeHeight} className={` bg-[#5867EA] overflow-hidden flex flex-row  w-16  justify-center rounded-[4px] px-2 py-[7px] font-sans  font-normal text-white`}>
                    <HeightIcon sx={{color:"white" ,borderRadius:"50%",":hover": { transform: "scale(1.5)", transition: 'transform 0.3s, background-color 0.3s'}}}  />
                </button>
                <button onClick={changeWidth} className={`  bg-[#5867EA] overflow-hidden flex flex-row r w-16  justify-center rounded-[4px] px-2 py-[7px] font-sans font-normal text-white`}>
                    <SwitchRightIcon sx={{color:"white", ":hover": { transform: "scale(1.5)", transition: 'transform 0.3s, background-color 0.3s',}}} />
                </button>
                <button onClick={swapWindow} className={`  bg-[#5867EA] overflow-hidden flex flex-row r w-16  justify-center rounded-[4px] px-2 py-[7px] font-sans font-normal text-white`}>
                    <SwapVertIcon sx={{color:"white", ":hover": { transform: "scale(1.5)", transition: 'transform 0.3s, background-color 0.3s',}}} />
                </button>
        </>
    )
}

export default VerticalHorizontalButtons;