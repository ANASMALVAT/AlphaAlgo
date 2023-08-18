import React from 'react';
import  Select  from 'react-select';
import { customStyles } from '../styles/customCss';

const FontDropDown = ({onSelectChange, fontOptions}) => {
    return(
        <div className=' mr-1 '>
            <Select
                options={fontOptions}
                styles={customStyles}
                defaultValue={fontOptions[0]}
                onChange={(selectedOption) => onSelectChange(selectedOption)}
            />
        </div>
    )
}
export default FontDropDown;