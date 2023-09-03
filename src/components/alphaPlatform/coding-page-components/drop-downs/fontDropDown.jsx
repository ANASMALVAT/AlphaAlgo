import React , {useEffect, useState} from 'react';
import  Select  from 'react-select';
import { fontOptions } from '../../../../data/fontSizes';
import { customStyles } from './styles/customCss';
import './styles/dropdown.css';
import { setFont } from '../../../../redux/slices/dropDownSlice';
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux"

const FontDropDown = () => 
{

    const dropdownValue = useSelector((state) => state.dropdownValues.dropdownValue);
    const dispatch = useDispatch();
    const [fontValue, setFontValue] = useState(dropdownValue.fontSize);
   
    const changeFont = (selectedOption) => {
        dispatch(setFont(selectedOption.value));
    }

    useEffect(() => {
        setFontValue(dropdownValue.fontSize);
    },[dropdownValue.fontSize])

    return(

        <div className=' mr-1 '>
            <Select
                options={fontOptions}
                styles={customStyles}
                onChange={(selectedOption) => changeFont(selectedOption)}
                value={{label:fontValue}}
                defaultValue={"16px"}
            />

        </div>
    )
}
export default FontDropDown;